import instance from "~/config/axiosConfig";

export const getCartAPI = async () => {
  if (localStorage.getItem("token")) {
    return await instance.get("cartItem");
  }
};

export const addItemAPI = async (data) => {
  // console.log(data);
  const response = await instance.post("cartItem", data);
  return response;
};

export const deleteItemAPI = async (equipId) => {
  const response = await instance.delete(`cartItem/${equipId}`);
  return response;
};

export const updateItemAPI = async ({ equipId, quantity }) => {
  // console.log({ equipId, quantity });
  const response = await instance.put(`cartItem/${equipId}`, { quantity });
  return response;
};

export const deleteCartAll = async () => {
  return instance.delete("cartItem/delete/all");
};

export const updateCartAll = async (data) => {
  return instance.put("cartItem/update/all", data);
};
