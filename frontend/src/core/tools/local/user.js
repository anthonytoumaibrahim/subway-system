const setLocalUser = ({ token, avatar = null }) => {
  localStorage.user = JSON.stringify({
    token: token,
    avatar: avatar,
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
