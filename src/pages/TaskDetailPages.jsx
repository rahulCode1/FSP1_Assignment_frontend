import axios from "axios";
import TaskDetails from "../components/task/TaskDetails";
import { Await, useLoaderData } from "react-router-dom";
import {
  showLoadingToast,
  showSuccessToast,
  showErrorToast,
} from "../utils/toast";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import { Suspense } from "react";

const TaskDetailsPage = () => {
  const { task } = useLoaderData();

  return (
    <Suspense fallback={<LoadingSpinner size={30}/>}>
      <Await resolve={task}>
        {(isTaskLoad) => <TaskDetails task={isTaskLoad} />}
      </Await>
    </Suspense>
  );
};

export default TaskDetailsPage;

const task = async (taskId) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/task/${taskId}`);

    return response?.data?.task;
  } catch (error) {
    console.log(error);
  }
};

export const loader = async ({ request, params }) => {
  const taskId = params.id;

  return {
    task: task(taskId),
  };
};

export const action = async ({ request, params }) => {
  const taskId = params.id;
  const toastId = showLoadingToast("Update status...");


  try {
    await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/task/${taskId}`);
    showSuccessToast(toastId, `Status update to Completed`);
  } catch (error) {

    showErrorToast(toastId, error.response?.data?.message);
  }
};
