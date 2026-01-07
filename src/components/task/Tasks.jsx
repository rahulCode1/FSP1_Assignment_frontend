const Tasks = ({ task }) => {



  return (
    <>
      <div className="card mb-3 shadow-sm position-relative">
        <div className="card-body">
          <span className="badge bg-success position-absolute top-0 end-0 m-2">
            {task.status}
          </span>

          <h3 className="card-title mb-3 mt-2">{task.name}</h3>

          <p className="text-muted mb-3">
            <i className="bi bi-calendar-event me-2"></i>
            <strong>Due date:</strong> {task?.dueDate.split("T")[0]}
          </p>

          <div className="d-flex align-items-center gap-2">
            {task.owners &&
            task.owners.length !== 0 &&
            task.owners.length === 1 ? (
              <div className="d-flex align-items-center">
                <span
                  className="badge bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: "40px", height: "40px", fontSize: "16px" }}
                >
                  {task.owners[0].name[0]}
                </span>
                <span className="fw-semibold text-dark">
                  {task.owners[0].name}
                </span>
              </div>
            ) : (
              <div className="d-flex" style={{ marginLeft: "4px" }}>
                {task.owners.map((owner, index) => (
                  <span
                    key={index}
                    className="badge bg-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "40px",
                      height: "40px",
                      fontSize: "16px",
                      marginLeft: index === 0 ? "0" : "-12px",
                      zIndex: task.owners.length - index,
                      border: "2px solid white",
                    }}
                    title={owner.name}
                  >
                    {owner.name[0]}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
