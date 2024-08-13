import React, { useCallback, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import FormEquip from "./FormEquip";

const RowFormStu = ({ item }) => {
  const [displayFormEquip, setDisplayFormEquip] = useState(false);
  const [displayAction, setDisplayAction] = useState(false);
  const handleSetDisplay = useCallback((value) => {
    setDisplayFormEquip(value);
  }, []);
  return (
    <tr>
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
                  onClick={() => setDisplayFormEquip(true)}
                  className="hover:bg-gray-200"
                >
                  Xem Vật Dụng
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

export default RowFormStu;
