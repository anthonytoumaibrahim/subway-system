const setLocalUser = ({ token, role_id = null, avatar = null }) => {
  localStorage.user = JSON.stringify({
    token: token,
    role_id: role_id,
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
