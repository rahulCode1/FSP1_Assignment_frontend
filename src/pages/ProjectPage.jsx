import { Suspense } from "react";
import Projects from "../components/project/Projects";
import { Await, useRouteLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/loading/LoadingSpinner"

const ProjectPage = () => {
  const { dashboard } = useRouteLoaderData("task_id");

  return (
    <Suspense fallback={<LoadingSpinner/>}>
     

      <Await resolve={dashboard}>
        {(isTaskLoad) => <Projects tasks={isTaskLoad.tasks} />}
      </Await>
    </Suspense>
  );
};

export default ProjectPage;
