// React stuff
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ role = 1, children }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (user.role_id !== role) {
      navigate("/");
      toast.error("Please login or signup to access this page.");
    } else {
      setRender(true);
    }
  }, []);

  return render && children;
};

export default ProtectedRoute;
