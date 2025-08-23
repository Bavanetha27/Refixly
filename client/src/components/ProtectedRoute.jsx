import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-[#150617]">
        <Loader2 className="animate-spin h-10 w-10 text-[#38BDF8] dark:text-[#7C3AED] drop-shadow-md" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
