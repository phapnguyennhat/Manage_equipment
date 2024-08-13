import React from "react";
import { useMe } from "~/hooks/useAuth";
import { useReturnEquip } from "~/hooks/useForm";

const RowEquipForm = ({ item }) => {
  const { mutate: returnEquip } = useReturnEquip();
  const { data } = useMe();
  const user = data?.data || {};

  const handleReturn = () => {
    const data = { formId: item.formId, equipId: item.equipId };
    returnEquip(data);
  };

  return (
    <tr>
      <td>{item?.equipment?.title}</td>
      <td>{item?.quantity}</td>
      <td>{item?.dlReturnDate}</td>
      <td>{item?.returnDate}</td>
      <td>
        {item?.returnDate ? (
          <span>Đã Trả</span>
        ) : user.role === "admin" ? (
          <button onClick={handleReturn} className="rounded bg-blue-500 p-2">
            Trả vật dụng
          </button>
        ) : (
          <span>Chưa Trả</span>
        )}
      </td>
    </tr>
  );
};

export default RowEquipForm;
