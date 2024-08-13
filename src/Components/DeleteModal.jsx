import React, { memo } from "react";

const DeleteModal = ({ setDisplayDeleteModal, action }) => {
  const handleClose = () => {
    setDisplayDeleteModal(false);
  };

  const handleConfirm = () => {
    // handleDelete();
    action();

    handleClose();
  };

  // console.log("re-render delete modal");
  // const { mutate: deleteEquip, isLoading, isError } = useDeleteEquip();

  // if (isError) return <div>Something wrong :(</div>;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center bg-transparent">
      <div
        className="absolute z-0 h-full w-full bg-modal"
        onClick={handleClose}
      ></div>
      <div className="z-50 h-auto w-[350px] bg-white p-5">
        <h3 className="text-center text-3xl font-bold"> Xác nhận xóa</h3>
        <p className="my-4 text-center">Sau khi xóa không thể hoàn tác</p>
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
      {/* {isLoading ?? <Loader />} */}
    </div>
  );
};

export default memo(DeleteModal);
