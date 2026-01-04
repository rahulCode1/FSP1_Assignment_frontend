import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../model/Modal";
import AddProject from "./AddProject";

const Projects = ({ projects }) => {
  const [isModalOpen, setModelOpen] = useState(false);

  return (
    <main className="container">
      {isModalOpen && (
        <Modal title={"Add Project"} isOpen={isModalOpen} onClose={() => setModelOpen(false)}>
          <AddProject setIsOpen={setModelOpen}/>
        </Modal>
      )}
      <div className="d-flex justify-content-between py-4">
        <h2>All Projects </h2>
        <button onClick={() => setModelOpen(true)} className="btn btn-primary">
          + Add Project
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="">
            <th>S.N.</th>
            <th>Name </th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <Link to={`${project.id}`} className="text-decoration-none">
                  {project.name}
                </Link>
              </td>
              <td>
                {project?.description ? project.description : "No description"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Projects;
