import React from "react";
import { HiOutlineX } from "react-icons/hi";
import noteBook from "../../assets/imgs/Depot/product-a5-notebook-2-400x500.jpg";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartCard = ({ product }) => {
  return (
    <div className="flex items-center">
      <HiOutlineX size={20} />
      <img src={noteBook} alt="" className="w-[90px]" />
      <div>
        <div>Cuốn sổ tay</div>
        <div>Muợn tối đa: 7 ngày</div>
        <div>Giá trị bồi thường: $28</div>
      </div>
      <div className="inline-flex items-center rounded-full border-2 p-5">
        <FaMinus color="gray" />
        <input className="w-[80px] text-center outline-none" type="text" />
        <FaPlus color="gray" />
      </div>
    </div>
  );
};

export default CartCard;
