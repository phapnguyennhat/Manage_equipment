import React, { useCallback, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { useDeleteForm, useUpdateStatusForm } from "~/hooks/useForm";
import FormEquip from "./FormEquip";

const RowFormAd = ({ item }) => {
  const [displayAction, setDisplayAction] = useState(false);
  const [displayFormEquip, setDisplayFormEquip] = useState(false);
  const { mutate: updateForm } = useUpdateStatusForm();
  const handleAction = (status) => {
    updateForm({ id: item.id, status });
  };

  const handleSetDisplay = useCallback((value) => {
    setDisplayFormEquip(value);
  }, []);

  const { mutate: deleteForm } = useDeleteForm();

  return (
    <tr>
      <td>{item.user?.mssv}</td>
      <td>{item?.borrowDate}</td>
      <td>{item?.approveDate}</td>
      <td>{item?.status}</td>
      <td>{item?.method}</td>
      <td>{item?.userApproved?.username}</td>
      <td>
        <div className="relative inline-block cursor-pointer">
          <FiMoreVertical
            onClick={() => setDisplayAction(!displayAction)}
            className="mx-auto"
          />
          {displayAction && (
            <div className="absolute right-[-60px] top-[100%] z-10 w-[150px] overflow-hidden rounded border bg-white shadow-md">
              <ul className="">
                <li
                  onClick={() => {
                    handleAction("Duyệt");
                    setDisplayAction(false);
                  }}
                  className="hover:bg-gray-200"
                >
                  Duyệt
                </li>
                <li
                  onClick={() => {
                    handleAction("Từ Chối");
                    setDisplayAction(false);
                  }}
                  className="hover:bg-gray-200"
                >
                  Từ Chối
                </li>
                <li
                  onClick={() => {
                    setDisplayFormEquip(true);
                    setDisplayAction(false);
                  }}
                  className="hover:bg-gray-200"
                >
                  Xem Vật Dụng
                </li>
                <li
                  onClick={() => {
                    deleteForm(item.id);
                    setDisplayAction(false);
                  }}
                  className="hover:bg-gray-200"
                >
                  Xóa
                </li>
              </ul>
            </div>
          )}
        </div>
      </td>
      {displayFormEquip && (
        <FormEquip
          setDisplayFormEquip={handleSetDisplay}
          formEquip={item.formEquipments}
        />
      )}
    </tr>
  );
};

export default RowFormAd;
