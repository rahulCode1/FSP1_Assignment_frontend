import TeamForm from "./TeamForm";
import remove from "../../imgs/delete.png";
import Modal from "../model/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Team = ({ teams }) => {
  const [isModelOpen, setModelIsOpen] = useState(false);
  return (
    <>
      {isModelOpen && (
        <Modal title={"Add New Member"} isOpen={isModelOpen} onClose={() => setModelIsOpen(false)}>
          <TeamForm setModelIsOpen={setModelIsOpen} />
        </Modal>
      )}
      <main className="container">
        <div className="d-flex justify-content-between py-4">
          <h2>All Teams </h2>
          <button
            onClick={() => setModelIsOpen(true)}
            className="btn btn-primary"
          >
            + Add Team
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
            {teams.map((team, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Link to={`${team.id}`} className="text-decoration-none">
                    {team.name}
                  </Link>
                </td>
                <td>
                  {team?.description
                    ? team.description
                    : "No description found."}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Team;
