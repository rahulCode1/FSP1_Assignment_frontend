import { useWorkContext } from "../../context/workTrackContext";
import SubmitLoading from "../loading/SubmitLoading";

const AddTaskFrom = ({ setTaskModal, fetcher }) => {
  const { teams, users, tags, projects } = useWorkContext();

  const status = ["To Do", "In Progress", "Completed", "Blocked"];
  const priority = ["High", "Medium", "Low"];

  const isLoading = fetcher.state === "submitting";

  return (
    <>
      <fetcher.Form method="post" action="/addTask">
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter task name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="team" className="form-label">
              Select Team
            </label>
            <select id="team" name="team" required className="form-select">
              <option value="" disabled selected>
                Select Team
              </option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="project" className="form-label">
              Select Project
            </label>
            <select id="project" name="project" required className="form-select">
              <option value="" disabled selected>
                Select Project
              </option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <select id="priority" required name="priority" className="form-select">
                <option value="" disabled selected>
                  Select priority
                </option>
                {priority.map((pri) => (
                  <option key={pri} value={pri}>
                    {pri}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select name="status" id="status" required className="form-select">
                <option value="" disabled selected>
                  Select Status
                </option>
                {status.map((stat) => (
                  <option key={stat} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label d-block mb-2">Task Owners</label>
            <div
              className="border rounded p-2 bg-light"
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              {users.map((user) => (
                <div key={user.id} className="form-check py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={user.id}
                    name="owners"
                    id={`owner-${user.id}`}
                    
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`owner-${user.id}`}
                  >
                    {user.email}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label d-block mb-2">Tags</label>
            <div
              className="border rounded p-2 bg-light"
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              {tags && tags.length !== 0 ? (
                tags.map((tag) => (
                  <div key={tag.name} className="form-check py-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={tag.name}
                      name="tags"
                      id={`tag-${tag.name}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`tag-${tag.name}`}
                    >
                      {tag.name}
                    </label>
                  </div>
                ))
              ) : (
                <p className="text-muted mb-0 small">No tags found.</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="time" className="form-label">
                Time (Days)
              </label>
              <input
                type="number"
                id="time"
                name="time"
                className="form-control"
                placeholder="Days"
                min="1"
                required
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <SubmitLoading /> <span className="ms-2">Submitting...</span>
              </>
            ) : (
              "Add Task"
            )}
          </button>
        </div>
      </fetcher.Form>
    </>
  );
};

export default AddTaskFrom;
