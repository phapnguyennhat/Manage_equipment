import { useEffect, useState } from "react";
import { getEquipByIdAPI } from "~/api/equipAPI";

export const useCreateEquip = (id) => {
  const [form, setForm] = useState({
    title: "",
    timeBorrow: "",
    category: "",
    price: "",
    quantity: "",
    avaiQuantity: "",
    file: "",
    description: "",
  });

  // const handleDelete = async () => {
  //   await deleteEquipByid(id);
  // };
  console.log(form);

  const getEquipById = async () => {
    if (id) {
      const res = await getEquipByIdAPI(id);
      console.log(res);
      if (res && res?.data) {
        setForm(res.data);
      }
    } else {
      setForm({});
    }
  };

  const collectData = (e) => {
    const value = isNaN(e.target.value) ? e.target.value : +e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  useEffect(() => {
    getEquipById();
  }, []);

  return { form, collectData, setForm };
};
