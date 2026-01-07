import { useEffect, useState } from "react";
import { useWorkContext } from "../../context/workTrackContext";
import SubmitLoading from "../loading/SubmitLoading";

const AddTaskForm = ({ fetcher, task, method}) => {
  const { teams, users, tags, projects } = useWorkContext();

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedOwners, setSelectedOwners] = useState([]);

  const status = ["To Do", "In Progress", "Completed", "Blocked"];
  const priority = ["High", "Medium", "Low"];

  const isLoading = fetcher.state === "submitting";

  /* =========================
     Sync state for EDIT / CREATE
     ========================= */
  useEffect(() => {
    setSelectedTags(task?.tags || []);
    setSelectedOwners(task?.owners || []);
  }, [task]);

  /* =========================
     Toggle handlers
     ========================= */

  // tags = array of strings
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // owners = array of objects
  const toggleOwner = (user) => {
    setSelectedOwners((prev) =>
      prev.some((u) => u._id === user._id)
        ? prev.filter((u) => u._id !== user._id)
        : [...prev, user]
    );
  };

  return (
    <fetcher.Form method={method} action="/addTask">
      <div className="modal-body">
        {/* ================= TASK NAME ================= */}
        <div className="mb-3">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            defaultValue={task?.name || ""}
          />
        </div>

        {/* ================= TEAM ================= */}
        <div className="mb-3">
          <label className="form-label">Select Team</label>
          <select
            name="team"
            className="form-select"
            required
            defaultValue={task?.team?._id || ""}
          >
            <option value="" disabled>
              Select Team
            </option>
            {teams.map((team) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        {/* ================= PROJECT ================= */}
        <div className="mb-3">
          <label className="form-label">Select Project</label>
          <select
            name="project"
            className="form-select"
            required
            defaultValue={task?.project?._id || ""}
          >
            <option value="" disabled>
              Select Project
            </option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* ================= PRIORITY & STATUS ================= */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Priority</label>
            <select
              name="priority"
              className="form-select"
              required
              defaultValue={task?.priority || ""}
            >
              <option value="" disabled>
                Select Priority
              </option>
              {priority.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Status</label>
            <select
              name="status"
              className="form-select"
              required
              defaultValue={task?.status || ""}
            >
              <option value="" disabled>
                Select Status
              </option>
              {status.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ================= OWNERS (IMPORTANT PART) ================= */}
        <div className="mb-3">
          <label className="form-label d-block mb-2">Task Owners</label>
          <div
            className="border rounded p-2 bg-light"
            style={{ maxHeight: 150, overflowY: "auto" }}
          >
            {users.map((user) => (
              <div key={user._id} className="form-check py-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="owners" // ✅ REQUIRED for action
                  value={user._id} // ✅ goes to formData.getAll("owners")
                  checked={selectedOwners.some((u) => u._id === user._id)}
                  onChange={() => toggleOwner(user)}
                  id={`owner-${user._id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`owner-${user._id}`}
                >
                  {user.email}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TAGS ================= */}
        <div className="mb-3">
          <label className="form-label d-block mb-2">Tags</label>
          <div
            className="border rounded p-2 bg-light"
            style={{ maxHeight: 150, overflowY: "auto" }}
          >
            {tags.map((tag) => (
              <div key={tag} className="form-check py-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="tags" // ✅ REQUIRED
                  value={tag} // ✅ string
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  id={`tag-${tag}`}
                />
                <label className="form-check-label" htmlFor={`tag-${tag}`}>
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DATE & TIME ================= */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="form-control"
              required
              defaultValue={task?.dueDate ? task.dueDate.split("T")[0] : ""}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Time (Days)</label>
            <input
              type="number"
              name="time"
              className="form-control"
              min="1"
              required
              defaultValue={task?.timeToComplete || ""}
            />
          </div>
        </div>
      </div>

      <input type="text" hidden name="taskId" value={task?.id} />

      {/* ================= FOOTER ================= */}
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <SubmitLoading />
              <span className="ms-2">Submitting...</span>
            </>
          ) : task ? (
            "Update Task"
          ) : (
            "Add Task"
          )}
        </button>
      </div>
    </fetcher.Form>
  );
};

export default AddTaskForm;
