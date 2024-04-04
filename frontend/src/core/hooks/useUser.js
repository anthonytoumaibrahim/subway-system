// Context
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { toast } from "react-toastify";
import { sendRequest } from "../tools/remote/request";
import { useNavigate } from "react-router-dom";
import { removeLocalUser } from "../tools/local/user";

export const useUser = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const isLoggedIn = user.token ? true : false;

  const logout = () => {
    sendRequest("GET", "/logout")
      .then((response) => {
        const { status, message } = response.data;
        if (status === "success") {
          toast.success(message);
          return;
        }
      })
      .catch((error) => {
        toast.error("Your logout token could not be expired.");
      })
      .finally(() => {
        navigate("/");
        removeLocalUser();
        setUser({
          token: "",
        });
      });
  };

  return { user, isLoggedIn, logout };
};
