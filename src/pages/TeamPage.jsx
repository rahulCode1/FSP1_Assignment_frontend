import { Await, useRouteLoaderData } from "react-router-dom";
import Team from "../components/team/Team";

import { Suspense } from "react";

const TeamPage = () => {

  const { dashboard } = useRouteLoaderData("task_id");

  return (
    <Suspense>
      <Await resolve={dashboard}>
        {(isTaskLoad) => <Team tasks={isTaskLoad.tasks} />}
      </Await>
    </Suspense>
  );
};

export default TeamPage;
