import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEquip from "~/Components/CreateEquip";
import DeleteModal from "~/Components/DeleteModal";
import ToastSuccess from "~/Components/ToastSuccess";

import { useMe } from "~/hooks/useMe";

const StockCard = ({
  product,
  handleDelete,
  handleAdd,
  handleUpdate,
  error,
  handleClearErr,
}) => {
  const navigate = useNavigate();
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { user } = useMe();
  const { role } = user;

  // const { handleDelete } = useCreateEquip(product.id);
  // const handleDelete = useCallback(async () => {
  //   setLoading(true);
  //   await deleteEquipByid(product.id);
  //   setLoading(false);
  // }, [product.id]);
  const handleDisplayToast = () => {
    setDisplayToast(true);
    setTimeout(() => {
      setDisplayToast(false);
    }, 2000);
  };

  const handleEdit = () => {
    setDisplay(true);
  };

  return (
    <div className="group/item relative transition duration-500">
      <div className="relative">
        {" "}
        <img
          src={product.urlImg}
          onClick={() => {
            navigate(`Product/${product.id}`);
          }}
          alt="not found"
          className="w-full"
        />
        {role === "admin" ? (
          <div className="absolute top-[50%] z-10 hidden w-full justify-evenly group-hover/item:flex">
            <button
              onClick={() => handleEdit()}
              className="rounded bg-blue-400 p-4"
            >
              Edit
            </button>
            <button
              className="rounded bg-red-400 p-4"
              onClick={() => setDisplayDeleteModal(true)}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <div className="my-7 inline-block text-3xl font-medium hover:underline">
        {product.title}
      </div>
      <div> {product.timeBorrow} </div>
      <button
        onClick={handleDisplayToast}
        className="invisible mt-4 underline underline-offset-4 hover:no-underline group-hover/item:visible group-hover/item:-translate-y-2"
      >
        Thêm vào DS
      </button>
      <DeleteModal
        displayDeleteModal={displayDeleteModal}
        setDisplayDeleteModal={setDisplayDeleteModal}
        handleDelete={() => handleDelete(product.id)}
      />

      <CreateEquip
        display={display}
        setDisplayForm={setDisplay}
        handleAdd={handleAdd}
        equip={product}
        handleUpdate={handleUpdate}
        error={error}
        handleClearErr={handleClearErr}
      />
      {/* {loading && <Loader />} */}
      {displayToast && <ToastSuccess />}
    </div>
  );
};

export default StockCard;
