import axios from "axios";
import Dashboard from "../components/dashboard/Dashboard";
import { Await, useRouteLoaderData } from "react-router-dom";
import { Suspense } from "react";
import LoadingSpinner from "../components/loading/LoadingSpinner";

const DashboardScreenPage = () => {
  const { dashboard } = useRouteLoaderData("task_id");

  return (
    <Suspense fallback={<LoadingSpinner size={30} />}>
      <Await resolve={dashboard}>
        {(isLoadDashboard) => (
          <Dashboard
            tasks={isLoadDashboard.tasks}
            
          />
        )}
      </Await>
    </Suspense>
  );
};

export default DashboardScreenPage;

const dashboard = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/task`);

    return response?.data;
  } catch (error) {}
};

export const loader = async () => {
  return {
    dashboard: dashboard(),
  };
};
