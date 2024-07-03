import React from "react";
import { HiOutlineX } from "react-icons/hi";
import noteBook from "../../assets/imgs/Depot/product-a5-notebook-2-400x500.jpg";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartCard = ({ product }) => {
  return (
    <div className="flex items-center border-b-2 pb-6">
      <HiOutlineX className="order-3 sm:order-1" />
      <img
        src={noteBook}
        alt=""
        className="order-1 mr-3 w-[90px] sm:order-2 sm:mx-[25px]"
      />

      <div className="order-2 flex flex-auto flex-col justify-between sm:order-3 sm:flex-row">
        <div className="flex-auto">
          <h3>Cuon so tay</h3>
          <p>gia tri boi thuong $25</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-full border-2 p-3 sm:p-4">
            <FaMinus color="gray" />
            <input
              className="mx-2 w-[50px] text-center outline-none sm:w-[80px]"
              type="text"
            />
            <FaPlus color="gray" />
          </div>
          <span className="sm:pl-11">7 ngay</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
