import axios from "axios";
import { getLocalUser, removeLocalUser } from "../local/user";

axios.defaults.baseURL = "http://localhost:8000/api";

export const sendRequest = async (method, route, body) => {
  const token = getLocalUser().token ?? "";
  try {
    const response = await axios.request({
      method: method,
      url: route,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    const { status } = error.response;
    if (status === 401) {
      removeLocalUser();
      window.location.replace("/");
    }
    throw {
      response: error.response,
    };
  }
};
