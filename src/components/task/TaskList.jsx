import { Link, useFetcher } from "react-router-dom";
import TaskForm from "./TaskForm";
import { useState } from "react";
import Modal from "../model/Modal";

const TaskList = ({ tasks }) => {
  const [isTaskModalOpen, setTaskModal] = useState(true);
  const fetcher = useFetcher()

  return (
    <main className="py-3">
      {isTaskModalOpen && (
        <Modal
          title={"Add new task"}
          isOpen={isTaskModalOpen}
          onClose={() => setTaskModal(false)}
        >
          <TaskForm  fetcher={fetcher}/>
        </Modal>
      )}
      <div className="d-flex justify-content-between align-items-center py-3">
        <h1>Tasks </h1>
        <button  className="btn btn-primary">
          Add new Task
        </button>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Task</th>
            <th>Status</th>
            <th>Time to complete</th>
          </tr>
        </thead>

        <tbody>
          {tasks &&
            tasks.length !== 0 &&
            tasks.map((task, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/${task.id}`} className="text-decoration-none">
                    {task.name}
                  </Link>
                </td>
                <td>{task.status}</td>
                <td>{task.timeToComplete} days</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default TaskList;
