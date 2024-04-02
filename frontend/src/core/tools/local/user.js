const setLocalUser = ({ token }) => {
  localStorage.user = JSON.stringify({
    token: token,
  });
};
const getLocalUser = () => {
  const user = localStorage.user;
  if (user) {
    return JSON.parse(user);
  }
  return false;
};
const removeLocalUser = () => {
  localStorage.removeItem("user");
};

export { setLocalUser, getLocalUser, removeLocalUser };
