import WorkTrackProvider from './context/workTrackContext';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardScreenPage, { loader as taskLoader } from './pages/DashboardScreenPage';
import RootLayout from "./components/layout/RootLayout"
import ProjectInfoPage, { loader as projectDetailLoader } from './pages/ProjectInfoPage';
import AddTaskPage, { action as addTaskAction } from './pages/AddTaskPage';
import TaskDetailsPage, { loader as taskDetailsLoader, action as taskAction } from './pages/TaskDetailPages';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';
import LoginPage, { action as loginAction } from './pages/LoginPage';
import ReportPage from './pages/ReportPage';
import AddProject from './components/project/AddProject';
import ProjectPage from './pages/ProjectPage';
import TeamDetails, { loader as teamLoader } from './pages/TeamDetailsPage';
import TaskListPage from './pages/TaskListPage';


const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    loader: taskLoader,
    
    id: "task_id",
    children: [
      {
        index: true, element: <DashboardScreenPage />
      },
      {
        path: "addTask", element: <AddTaskPage />, action: addTaskAction
      },
      {
        path: "list", element: <TaskListPage/>
      },
      {
        path: ":id", element: <TaskDetailsPage />, loader: taskDetailsLoader, action: taskAction
      },
      {
        path: "projects", children: [

          {
            index: true, element: <ProjectPage />
          },
          {
            path: "add", element: <AddProject />
          },
          {
            path: ":id", element: <ProjectInfoPage />, loader: projectDetailLoader
          },
        ]
      },
      {
        path: "team", children: [
          {
            index: true, element: <TeamPage />
          },
          {
            path: ":id", element: <TeamDetails />, loader: teamLoader
          }
        ],
      },
      {
        path: "signup", element: <SignupPage />,
      },
      {
        path: "login", element: <LoginPage />
      },
      {
        path: "report", element: <ReportPage />
      }

    ]
  }
])


function App() {


  return <>
    <WorkTrackProvider>
      <RouterProvider router={router} />
    </WorkTrackProvider>
  </>
}

export default App;
