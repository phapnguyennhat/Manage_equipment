import instance from "../config/axiosConfig";

export const loginAPI = async (username, password) => {
  const response = await instance.post("auth/login", { username, password });
  localStorage.setItem("token", response.data.access_token);
};

export const signInAPI = async (form) => {
  return instance.post("auth/signup", form);
};

export const logOut = async () => {
  localStorage.removeItem("token");
};

export const profile = async () => {
  try {
    if (localStorage.getItem("token")) {
      return instance.get("auth/profile");
    }
  } catch (err) {
    logOut();
  }
};
