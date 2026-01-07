import AddTaskFrom from "../components/task/TaskForm";
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
  const taskId = await formData.get("taskId");
  const method = await request.method;

  console.log(method);

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
    let response;
    if (method === "POST") {
      response = await privateApi.post(`/task`, data);

      showSuccessToast(toastId, "Task added successfully.");
    } else if (request.method === "PATCH") {
      response = await privateApi.patch(`/task/${taskId}`, data);
      showSuccessToast(toastId, "Task update successfully.");
    }

    return response?.data || null;
    
  } catch (error) {
    console.log(error);
    showErrorToast(
      toastId,
      error.response?.data?.message || "Failed to add new task."
    );
    return null;
  }
};

// export const action = async ({ request }) => {
//   const toastId = showLoadingToast("Adding task...");
//   const formData = await request.formData();

//   const data = {
//     name: formData.get("name"),
//     project: formData.get("project"),
//     team: formData.get("team"),
//     owners: formData.getAll("owners"),
//     tags: formData.getAll("tags"),
//     timeToComplete: formData.get("time"),
//     status: formData.get("status"),
//     dueDate: formData.get("dueDate"),
//     priority: formData.get("priority"),
//   };

//   try {
//     const response = await privateApi.post("/task", data);

//     showSuccessToast(toastId, "Task added successfully.");

//     // ✅ SAFE RETURN
//     return response?.data || null;
//   } catch (error) {
//     console.log("ACTION ERROR:", error);

//     showErrorToast(
//       toastId,
//       error.response?.data?.message || "Failed to add new task."
//     );

//     return null;
//   }
// };
