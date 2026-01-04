import { Form } from "react-router-dom";

const TaskDetails = ({ task }) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-success";
      case "In Progress":
        return "bg-primary";
      case "Blocked":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="container py-4">
      {/* Task Details Card - Everything Combined */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white border-bottom">
          <h5 className="mb-0 fw-semibold">
            <i className="bi bi-list-check me-2"></i>
            Task Details
          </h5>
        </div>
        <div className="card-body">
          {/* Task Name and Badges */}
          <div className="mb-4">
            <h2 className="mb-3 fw-bold">{task.name}</h2>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <span
                className={`badge ${getStatusBadgeClass(
                  task.status
                )} fs-6 px-3 py-2`}
              >
                {task.status}
              </span>
              <span
                className={`badge ${getStatusBadgeClass(
                  task.priority
                )} px-3 py-2`}
              >
                <i className="bi bi-flag-fill me-1"></i>
                {task.priority} Priority
              </span>
            </div>
          </div>

          {/* Time and Date Info */}
          <div className="row g-3 mb-4 pb-4 border-bottom">
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="bg-warning bg-opacity-10 rounded p-3 me-3">
                  <i className="bi bi-clock-history fs-4 text-warning"></i>
                </div>
                <div>
                  <h6 className="text-muted mb-1 small">Time Remaining</h6>
                  <h5 className="mb-0 fw-bold">
                    {task.timeToComplete}{" "}
                    <span className="fs-6 text-muted fw-normal">days</span>
                  </h5>
                </div>
              </div>
            </div>

            {task.dueDate && (
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-danger bg-opacity-10 rounded p-3 me-3">
                    <i className="bi bi-calendar-event fs-4 text-danger"></i>
                  </div>
                  <div>
                    <h6 className="text-muted mb-1 small">Due Date</h6>
                    <h5 className="mb-0 fw-bold">
                      {new Date(task.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Task Owners Section */}
          <div className="mb-4 pb-4 border-bottom">
            <h5 className="mb-3 fw-semibold">
              <i className="bi bi-person-badge me-2"></i>
              Task Owners
            </h5>
            {task.owners && task.owners.length !== 0 ? (
              <div className="row g-3">
                {task.owners.map((owner, index) => (
                  <div key={index} className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center p-3 border rounded-3 bg-light h-100 hover-shadow transition">
                      <span
                        className="badge bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                        style={{
                          width: "48px",
                          height: "48px",
                          fontSize: "18px",
                        }}
                      >
                        {owner.name[0].toUpperCase()}
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="mb-1 fw-semibold text-truncate">
                          {owner.name}
                        </h6>
                        <small className="text-muted d-block text-truncate">
                          <i className="bi bi-envelope me-1"></i>
                          {owner.email}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-3">
                <i className="bi bi-person-x fs-1 text-muted mb-2 d-block"></i>
                <p className="text-muted mb-0">
                  No owners assigned to this task.
                </p>
              </div>
            )}
          </div>

          {/* Tags Section */}
          <div>
            <h5 className="mb-3 fw-semibold">
              <i className="bi bi-tags me-2"></i>
              Tags
            </h5>
            {task.tags && task.tags.length !== 0 ? (
              <div className="d-flex flex-wrap gap-2">
                {task.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-info bg-opacity-75 text-dark fs-6 px-3 py-2 rounded-pill"
                  >
                    <i className="bi bi-tag-fill me-1"></i>
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-center py-3">
                <i className="bi bi-tags fs-1 text-muted mb-2 d-block"></i>
                <p className="text-muted mb-0">No tags added to this task.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project and Team Info */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-primary bg-opacity-10 border-0">
              <h5 className="mb-0 fw-semibold">
                <i className="bi bi-folder me-2"></i>
                Project
              </h5>
            </div>
            <div className="card-body">
              <h6 className="fw-bold mb-2">{task.project.name}</h6>
              <p className="text-muted mb-0">
                {task.project?.description || "No description available"}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success bg-opacity-10 border-0">
              <h5 className="mb-0 fw-semibold">
                <i className="bi bi-people-fill me-2"></i>
                Team
              </h5>
            </div>
            <div className="card-body">
              <h6 className="fw-bold mb-2">{task.team.name}</h6>
              <p className="text-muted mb-0">
                {task.team?.description || "No description available"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Status Card */}
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <Form method="post">
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-semibold"
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Mark as Complete
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
