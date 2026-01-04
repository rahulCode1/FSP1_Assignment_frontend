const Project = ({ project }) => {
  return (
    <>
      <div className="card shadow-sm h-100 border-0 hover-shadow transition">
        <div className="card-body d-flex flex-column">
          {/* Project Title */}
          <h4 className="card-title mb-3 text-dark fw-bold">{project.name}</h4>

          {/* Project Description */}
          <div className="flex-grow-1 mb-3">
            {project.description ? (
              <p className="card-text text-muted mb-0">{project.description}</p>
            ) : (
              <p className="card-text text-muted fst-italic mb-0">
                <i className="bi bi-info-circle me-2"></i>
                No description available for this project.
              </p>
            )}
          </div>

          {/* Footer Actions/Info */}
          <div className="border-top pt-3 mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                <i className="bi bi-folder me-1"></i>
                Project
              </small>
              <button className="btn btn-sm btn-outline-primary">
                <i className="bi bi-arrow-right me-1"></i>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
