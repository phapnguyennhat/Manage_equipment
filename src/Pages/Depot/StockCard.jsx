import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEquip from "~/Components/CreateEquip";
import DeleteModal from "~/Components/DeleteModal";
import Loader from "~/Components/Loader";
import ToastSuccess from "~/Components/ToastSuccess";
import { useMe } from "~/hooks/useAuth";
import { useAddItemCart } from "~/hooks/useCart";
import { useDeleteEquip } from "~/hooks/useEquip";

// import { useMe } from "~/hooks/useMe";

const StockCard = ({ product }) => {
  const navigate = useNavigate();
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);

  const { data } = useMe();

  const handleDisplay = useCallback((value) => {
    setDisplayDeleteModal(value);
  }, []);

  const handleDisplayToast = () => {
    setDisplayToast(true);
    setTimeout(() => {
      setDisplayToast(false);
    }, 2000);
  };

  // const { handleAddItem } = useCart();

  const handleEdit = () => {
    setDisplay(true);
  };

  const { mutate: addItemCart } = useAddItemCart();
  const { mutate: deleteEquip, isLoading, isError } = useDeleteEquip();

  const handleDeleteEquip = useCallback(() => {
    deleteEquip(product.id);
  }, [product.id]);

  if (isError) return <div>Something wrong </div>;

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
        {data?.data.role === "admin" ? (
          <div className="absolute top-[50%] z-10 flex w-full justify-evenly md:hidden md:group-hover/item:flex">
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
      <div>Tối đa mượn {product.timeBorrow} ngày </div>
      <div>Còn {product.avaiQuantity}</div>
      {data?.data.role === "student" ? (
        product.avaiQuantity !== 0 ? (
          <button
            onClick={async () => {
              // await handleAddItem(product.id);
              addItemCart({ equipId: product.id });
              handleDisplayToast();
            }}
            className="invisible mt-4 underline underline-offset-4 hover:no-underline group-hover/item:visible group-hover/item:-translate-y-2"
          >
            Thêm vào DS
          </button>
        ) : (
          <button
            onClick={async () => {
              // await handleAddItem(product.id);
              navigate(`Product/${product.id}`);
            }}
            className="invisible mt-4 underline underline-offset-4 hover:no-underline group-hover/item:visible group-hover/item:-translate-y-2"
          >
            Xem Vật Dụng
          </button>
        )
      ) : null}
      {displayDeleteModal && (
        <DeleteModal
          // displayDeleteModal={displayDeleteModal}
          setDisplayDeleteModal={handleDisplay}
          action={handleDeleteEquip}
          // handleDelete={() => handleDelete(product.id)}
          // id={product.id}
        />
      )}

      <CreateEquip
        display={display}
        setDisplayForm={setDisplay}
        // handleAdd={handleAdd}
        equip={product}
        // handleUpdate={handleUpdate}
        // error={error}
        // handleClearErr={handleClearErr}
      />
      {/* {loading && <Loader />} */}
      {displayToast && <ToastSuccess />}
      {isLoading ? <Loader /> : null}
    </div>
  );
};

export default StockCard;
