import LastWeekDoneWork from "./LastWeekDoneWork";
import PendingWork from "./PandingWork";
import TaskClosedByTeam from "./TaskClosedByTeam";
import "./chartSetup";

const Report = ({ tasks }) => {


  
  return (
    <div className="min-h-screen bg-gray-50  sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Task Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive overview of team performance and task completion
          </p>
        </div>

        

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LastWeekDoneWork tasks={tasks} />
          <PendingWork tasks={tasks} />
          <TaskClosedByTeam tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Report;
