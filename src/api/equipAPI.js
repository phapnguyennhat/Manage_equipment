import instance from "~/config/axiosConfig";

export const createEquip = async (form) => {
  form.timeBorrow = +form.timeBorrow;
  form.price = +form.price;
  form.quantity = +form.quantity;
  form.avaiQuantity = +form.avaiQuantity;
  const response = await instance.post("equipment", form);
  const equip = response.data;
  // console.table(equip);
  const formdata = new FormData();
  formdata.append("file", form.file);
  const res = await instance.post(`equipment/${equip.id}`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export const updateEquipAPI = async (form) => {
  const formdata = new FormData();
  for (let key in form) {
    formdata.append(key, form[key]);
  }
  const res = await instance.put(`equipment/${form.id}`, formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

export const fetchEquipAPI = async (page, status, cate, timefrom, timeto) => {
  if (!page) page = 1;
  let url = `equipment?page=${page}`;

  if (status) url = url + `&status=${status}`;
  if (cate) url = url + `&cate=${cate}`;
  if (timefrom) url = url + `&timefrom=${timefrom}`;
  if (timeto) url = url + `&timeto=${timeto}`;
  // console.log(url);
  const response = instance.get(url);
  return response;
};

export const getEquipByIdAPI = async (id) => {
  return instance.get(`equipment/${id}`);
};

export const deleteEquipByid = async (id) => {
  const response = instance.delete(`equipment/${id}`);
  return response;
};
