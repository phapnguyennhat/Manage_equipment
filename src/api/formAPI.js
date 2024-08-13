import instance from "~/config/axiosConfig";

export const fetchFormAPI = async (page, limit, sortBy, sortOrder, mssv) => {
  if (localStorage.getItem("token")) {
    if (!page) page = 1;
    let url = `form?page=${page}`;
    if (limit) url += `&limit=${limit}`;
    if (sortBy) url += `&sortBy=${sortBy}`;
    if (sortOrder) url += `&sortOrder=${sortOrder}`;
    if (mssv) url += `&mssv=${mssv}`;

    return instance.get(url);
  }
};

export const createFormAPI = async (data) => {
  if (localStorage.getItem("token")) {
    return instance.post("form", data);
  }
};

export const deleteFormAPI = async (id) => {
  if (localStorage.getItem("token")) {
    return instance.delete(`form/${id}`);
  }
};

export const updateStatusFormAPI = async ({ id, status }) => {
  if (localStorage.getItem("token")) {
    return instance.put(`form/${id}/status`, { status });
  }
};

export const returnEquip = async ({ formId, equipId }) => {
  if (localStorage.getItem("token")) {
    return instance.put(`form/${formId}/${equipId}/return`);
  }
};
