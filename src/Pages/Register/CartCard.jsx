import React, { useCallback, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import noteBook from "../../assets/imgs/Depot/product-a5-notebook-2-400x500.jpg";
import { FaMinus, FaPlus } from "react-icons/fa6";
import DeleteModal from "~/Components/DeleteModal";
import { useDeleteItem, useUpdateItem } from "~/hooks/useCart";
import debounce from "lodash.debounce";

const CartCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const { mutate: updateItem } = useUpdateItem();

  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  // const handleQuantity = (quantity) => {
  //   if (quantity >= 1 && quantity <= product.equip.avaiQuantity) {
  //     setQuantity(quantity);
  //   }
  // };

  const handleDisplay = useCallback((value) => {
    setDisplayDeleteModal(value);
  }, []);

  const debouncedUpdate = useCallback(
    debounce((quantity) => {
      // call api
      updateItem({ equipId: product.equipId, quantity });
      // console.log("call api update");
    }, 1000),
    [],
  );

  const handleChangeQuantity = (quantity) => {
    if (
      !isNaN(quantity) &&
      quantity <= product.equip.avaiQuantity &&
      product.equip.avaiQuantity !== 0
    ) {
      debouncedUpdate(quantity);
      setQuantity(quantity);
    }
  };

  const { mutate: deleteItem } = useDeleteItem();

  const handleDeleteItem = useCallback(() => {
    deleteItem(product.equipId);
  }, [product.equipId]);

  return (
    <div className="flex items-center border-b-2 pb-6">
      <HiOutlineX
        onClick={() => setDisplayDeleteModal(true)}
        className="order-3 cursor-pointer sm:order-1"
      />
      <img
        src={product.equip.urlImg}
        alt=""
        className="order-1 mr-3 w-[90px] sm:order-2 sm:mx-[25px]"
      />

      <div className="order-2 flex flex-auto flex-col justify-between sm:order-3 sm:flex-row">
        <div className="flex-auto">
          <h3>{product.equip.title}</h3>
          <p>Giá trị ${product.equip.price}</p>
        </div>

        <div className="flex items-center justify-between">
          <div
            className={`inline-flex items-center rounded-full border-2 p-3 sm:p-4 ${quantity < 1 ? "border-red-500" : null} `}
          >
            <FaMinus
              onClick={() => handleChangeQuantity(+quantity - 1)}
              color="gray"
            />
            <input
              className="mx-2 w-[50px] text-center outline-none sm:w-[80px]"
              type="text"
              value={quantity}
              disabled={product.equip.avaiQuantity === 0}
              onChange={(e) => handleChangeQuantity(e.target.value)}
            />
            <FaPlus
              onClick={() => handleChangeQuantity(+quantity + 1)}
              color="gray"
            />
          </div>
          <span className="sm:pl-11">{product.equip.timeBorrow} ngày</span>
        </div>
      </div>
      {displayDeleteModal && (
        <DeleteModal
          setDisplayDeleteModal={handleDisplay}
          action={handleDeleteItem}
        />
      )}
    </div>
  );
};

export default CartCard;
