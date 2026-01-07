import { Bar } from "react-chartjs-2";

const TaskClosedByTeam = ({ tasks }) => {
  const completedTask = tasks.filter((task) => task.status === "Completed");
  const groupedByTeam = completedTask.reduce((acc, curr) => {
    const team = curr?.team ? curr.team.name : "Unknown";
    acc[team] = (acc[team] || 0) + 1;
    return acc;
  }, {});

  const colors = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

  const data = {
    labels: Object.keys(groupedByTeam),
    datasets: [
      {
        data: Object.values(groupedByTeam),
        backgroundColor: colors,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#111",
        font: { weight: "bold" },
        offset: 4,
        clip: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grace: "10%",
      },
    },
    layout: {
      padding: {
        top: 30,
      },
    },
  };

  return (
    <div className="bg-white rounded shadow p-3 mt-4">
      <h2 className="h5 fw-bold mb-2">Team Performance</h2>
      <p className="text-muted small mb-3">Tasks completed by each team</p>
      <div style={{ height: "350px", maxHeight: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TaskClosedByTeam;
