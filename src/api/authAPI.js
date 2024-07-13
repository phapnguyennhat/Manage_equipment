import instance from "../config/axiosConfig";

export const loginAPI = async (username, password) => {
  const response = await instance.post("auth/login", { username, password });
  localStorage.setItem("token", response.data.access_token);
};

export const signInAPI = async (form) => {
  const res = await instance.post("auth/signup", form);
  return res;
};

export const logOut = async () => {
  localStorage.removeItem("token");
};

export const profile = async () => {
  try {
    const res = await instance.get("auth/profile");
    return res;
  } catch (err) {
    logOut();
  }
};
