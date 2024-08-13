import React, { memo } from "react";
import RowEquipForm from "./RowEquipForm";

const FormEquip = ({ setDisplayFormEquip, formEquip }) => {
  const handleClose = () => {
    setDisplayFormEquip(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center bg-transparent">
      <div
        className="absolute z-0 h-full w-full bg-modal"
        onClick={handleClose}
      ></div>
      <div className="z-50 bg-white p-5 shadow-sm">
        <table className="text-center">
          <tr className="border-b-2">
            <th className="px-2">Tên Vật Dụng</th>
            <th>Số Lượng</th>
            <th>Hạn Trả</th>
            <th className="px-6">Ngày Trả</th>
            <th>Trạng Thái</th>
          </tr>
          {formEquip.map((item, index) => (
            <RowEquipForm key={index} item={item} />
          ))}
        </table>
      </div>
      {/* {isLoading ?? <Loader />} */}
    </div>
  );
};

export default memo(FormEquip);
