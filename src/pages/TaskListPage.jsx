import { Await, useRouteLoaderData } from "react-router-dom";
import TaskList from "../components/task/TaskList";
import { Suspense } from "react";
import LoadingSpinner from "../components/loading/LoadingSpinner"

const TaskListPage = () => {
  const { dashboard } = useRouteLoaderData("task_id");

  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Await resolve={dashboard}>
        {(isTaskLoad) => <TaskList tasks={isTaskLoad.tasks} />}
      </Await>
    </Suspense>
  );
};

export default TaskListPage;
