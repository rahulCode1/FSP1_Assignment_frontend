import { useRouteLoaderData, Await } from "react-router-dom";
import Report from "../components/report/Report";
import { Suspense } from "react";
import LoadingSpinner from "../components/loading/LoadingSpinner";

const ReportPage = () => {
  const { dashboard } = useRouteLoaderData("task_id");

  return (
    <>
      <Suspense fallback={<LoadingSpinner size={30} />}>
        <Await resolve={dashboard}>
          {(isLoadDashboard) => <Report tasks={isLoadDashboard.tasks} />}
        </Await>
      </Suspense>
    </>
  );
};

export default ReportPage;
