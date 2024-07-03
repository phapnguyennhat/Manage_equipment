import instance from "../config/axiosConfig";

export const loginAPI = async (username, password) => {
  const response = await instance.post("auth/login", { username, password });
  localStorage.setItem("token", response.data.access_token);
};

export const logOut = async () => {
  localStorage.removeItem("token");
};

export const profile = async () => {
  const res = await instance.get("auth/profile");
  return res;
};
