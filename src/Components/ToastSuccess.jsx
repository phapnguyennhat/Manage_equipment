import React from "react";
import { FaCheck } from "react-icons/fa";

const ToastSuccess = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-transparent">
      <div className="rounded-lg bg-modal p-5">
        <div className="mb-5 flex justify-center">
          {" "}
          <div className="rounded-full bg-white p-5">
            {" "}
            <FaCheck color="green" size={50} />
          </div>
        </div>
        <p className="text-center text-2xl text-white md:text-3xl lg:text-4xl">
          {" "}
          Vật dụng đã được thêm vào danh sách
        </p>
      </div>
    </div>
  );
};

export default ToastSuccess;
