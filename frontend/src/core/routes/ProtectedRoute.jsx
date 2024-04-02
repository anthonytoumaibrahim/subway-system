// React stuff
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user, role = 1, children }) => {
  const navigate = useNavigate();

  const [render, setRender] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setRender(true);
    }
  }, []);

  return render && children;
};

export default ProtectedRoute;
