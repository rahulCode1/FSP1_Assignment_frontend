import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TeamInfo from "../components/team/TeamInfo";

const TeamDetails = () => {
  const data = useLoaderData();

  return (
    <>
      <TeamInfo team={data.team} tasks={data.tasks} />
    </>
  );
};

export default TeamDetails;

export const loader = async ({ request, params }) => {
  const projectId = params.id;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/team/${projectId}`
    );

    return response.data;
  } catch (error) {}
};
