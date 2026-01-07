import { Await, useRouteLoaderData } from "react-router-dom";
import Tasks from "../../components/setting/Tasks";
import { Suspense } from "react";

const TaskSetting = () => {
  const { dashboard } = useRouteLoaderData("task_id");

  return (
    <>
      <Suspense >
        <Await resolve={dashboard}>
          {(isLoadDashboard) => <Tasks tasks={isLoadDashboard.tasks}/>}
        </Await>
      </Suspense>
    </>
  );
};

export default TaskSetting;
