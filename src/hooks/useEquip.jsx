import React, { useCallback, useEffect, useState } from "react";
import {
  createEquip,
  deleteEquipByid,
  getAll,
  updateEquipAPI,
} from "~/api/equipAPI";

export const useEquip = (page, status, cate, timefrom, timeto) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllEquip = async (page, status, cate, timefrom, timeto) => {
    const res = await getAll(page, status, cate, timefrom, timeto);
    if (res && res.data) {
      setLoading(true);
      setData(res.data.data);
      setCount(res.data.count);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError("");
    try {
      await deleteEquipByid(id);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      const mess = error?.response?.data?.message || "";
      setError(Array.isArray(mess) ? mess[0] : mess);
    }
    setLoading(false);
    return error;
  };

  const handleAdd = async (form) => {
    // console.log(form);
    setLoading(true);
    setError("");
    if (form.file && !form.file.type.startsWith("image/")) {
      setError("Vui lòng tải file ảnh");
    } else if (!form.file) {
      setError("Vui lòng tải file ảnh");
    } else {
      try {
        const res = await createEquip(form);
        setData([res.data, ...data]);
      } catch (error) {
        const mess = error?.response?.data?.message || "";
        setError(Array.isArray(mess) ? mess[0] : mess);
      }
    }
    setLoading(false);
    return error;
  };

  const handleUpdate = async (form) => {
    setLoading(true);
    setError("");
    if (form.file && !form.file.type.startsWith("image/")) {
      setError("Vui lòng tải file ảnh");
    } else {
      try {
        const res = await updateEquipAPI(form);
        const updatedata = data.map((item) => {
          if (item.id === form.id) return res.data;
          return item;
        });
        setData(updatedata);
      } catch (error) {
        const mess = error?.response?.data?.message || "";
        setError(Array.isArray(mess) ? mess[0] : mess);
      }
    }
    setLoading(false);
    return error;
  };

  const handleClearErr = () => {
    setError("");
  };

  useEffect(() => {
    getAllEquip();
    window.scrollTo(0, 0);
  }, [page, status, cate, timefrom, timeto]);

  return {
    data,
    count,
    handleDelete,
    handleAdd,
    loading,
    handleUpdate,
    error,
    handleClearErr,
  };
};
