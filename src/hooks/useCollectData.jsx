import React, { useEffect, useState } from "react";

export const useCollectData = (formInit) => {
  const [form, setForm] = useState({});
  const handleCollectData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (formInit) {
      setForm(formInit);
    }
  }, []);
  return { form, handleCollectData };
};
