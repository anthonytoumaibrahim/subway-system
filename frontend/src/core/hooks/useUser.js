// Context
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const isLoggedIn = user.id ? true : false;

  return { user, isLoggedIn };
};
