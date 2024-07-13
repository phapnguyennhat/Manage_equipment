import React, { memo } from "react";

const DeleteModal = ({
  displayDeleteModal,
  setDisplayDeleteModal,
  handleDelete,
}) => {
  const handleClose = () => {
    setDisplayDeleteModal(false);
  };

  const handleConfirm = () => {
    handleDelete();
    handleClose();
  };
  return (
    displayDeleteModal && (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center bg-transparent">
        <div
          className="absolute z-0 h-full w-full bg-modal"
          onClick={handleClose}
        ></div>
        <div className="z-50 h-auto w-[350px] bg-white p-5">
          <h3 className="text-center text-3xl font-bold">
            {" "}
            Xác nhận xóa Thiết bị
          </h3>
          <p className="my-4 text-center">
            Thiết bị sau khi xóa không thể hoàn tác
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleConfirm}
              className="mr-4 rounded bg-blue-500 p-4 hover:bg-blue-700"
            >
              {" "}
              Xác nhận
            </button>
            <button
              onClick={handleClose}
              className="rounded bg-red-500 p-4 hover:bg-red-700"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(DeleteModal);
