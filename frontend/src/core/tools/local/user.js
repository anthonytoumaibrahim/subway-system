const setLocalUser = ({
  id,
  username = "",
  email = "",
  bank = 0,
  image_url,
  location,
  role = 0,
  token,
}) => {
  localStorage.user = JSON.stringify({
    id: id,
    username: username,
    email: email,
    bank: bank,
    image_url: image_url,
    location: location,
    role_id: role,
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
