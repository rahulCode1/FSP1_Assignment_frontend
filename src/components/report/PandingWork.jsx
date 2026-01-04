import { Pie } from "react-chartjs-2";

const PendingWork = ({ tasks }) => {
  const pendingTask = tasks.filter((task) => task.status !== "Completed");
  const completedWork = tasks.filter((task) => task.status === "Completed");

  const pendingHours = pendingTask.reduce(
    (acc, curr) => acc + curr.timeToComplete,
    0
  );
  const completedHours = completedWork.reduce(
    (acc, curr) => acc + curr.timeToComplete,
    0
  );

  const data = {
    labels: ["Pending Hours", "Completed Hours"],
    datasets: [
      {
        label: "Task",
        data: [pendingHours, completedHours],
        backgroundColor: ["#3b82f6", "#22c55e"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percent = ((value / total) * 100).toFixed(1);
          return `${value}\n(${percent}%)`;
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-5 shadow p-3 rounded">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Task Status by hours.
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Track your pending work hours.
      </p>
      <div
        className="flex justify-center items-center"
        style={{ maxWidth: "350px", margin: "0 auto" }}
      >
        <Pie data={data} options={options} />
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Pending Hours:</span>
          <span className="font-semibold text-green-600">{pendingHours}</span>
        </div>
      </div>
    </div>
  );
};
export default PendingWork;
