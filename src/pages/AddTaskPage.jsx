import AddTaskFrom from "../components/task/TaskForm";
import axios from "axios";
import {
  showLoadingToast,
  showErrorToast,
  showSuccessToast,
} from "../utils/toast";
import privateApi from "../api/axios";

const AddTaskPage = () => {
  return (
    <>
      <AddTaskFrom />
    </>
  );
};

export default AddTaskPage;

export const action = async ({ request }) => {
  const toastId = showLoadingToast("Adding task...");
  const formData = await request.formData();

  const data = {
    name: formData.get("name"),
    project: formData.get("project"),
    team: formData.get("team"),
    owners: formData.getAll("owners"),
    tags: formData.getAll("tags"),
    timeToComplete: formData.get("time"),
    status: formData.get("status"),
    dueDate: formData.get("dueDate"),
    priority: formData.get("priority"),
  };

  try {
    const response = await privateApi.post(`/task`, data);
    showSuccessToast(toastId, "Task added successfully.");

    return response.data;
  } catch (error) {
    showErrorToast(
      toastId,
      error.response?.data?.message || "Failed to add new task."
    );
    return null;
  }
};
