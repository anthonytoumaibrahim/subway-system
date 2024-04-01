// Context
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  return { user };
};
