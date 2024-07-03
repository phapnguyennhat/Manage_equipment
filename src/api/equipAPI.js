import instance from "~/config/axiosConfig";

export const createEquip = async (form) => {
  const response = await instance.post("equipment", form);
  const equip = response.data;
  // console.table(equip);
  const formdata = new FormData();
  formdata.append("file", form.file);
  await instance.post(`equipment/${equip.id}`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("success");
};

export const getAll = async (page, limit, status, cate) => {
  let url = `equipment?page=${page}&limit=${limit}`;
  if (status) url = url + `&status=${status}`;
  if (cate) url = url + `&cate=${cate}`;
  const response = instance.get(url);
  return response;
};
