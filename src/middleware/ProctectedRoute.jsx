import { Navigate } from "react-router-dom";
import useWorkContext from "../context/workTrackContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useWorkContext();

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
