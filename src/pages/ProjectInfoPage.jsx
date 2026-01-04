import axios from "axios";
import ProjectInfo from "../components/project/ProjectInfo";
import { Await, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import { Suspense } from "react";

const ProjectInfoPage = () => {
  const { projectInfo } = useLoaderData();

  return (
    <Suspense fallback={<LoadingSpinner loading size={30} />}>
      <Await resolve={projectInfo}>
        {(isProjectLoad) => (
          <ProjectInfo
            project={isProjectLoad.project}
            tasks={isProjectLoad.tasks}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default ProjectInfoPage;

const productInfo = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/project/${projectId}`
    );

    return response.data;
  } catch (error) {}
};

export const loader = async ({ request, params }) => {
  const projectId = params.id;

  return {
    projectInfo: productInfo(projectId),
  };
};
