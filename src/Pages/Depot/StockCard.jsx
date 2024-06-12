import React from "react";
import { useNavigate } from "react-router-dom";

const StockCard = ({ product }) => {
  const navigate = useNavigate();
  console.log(product);
  return (
    <div
      onClick={() => {
        navigate("Product", { state: { info: product } });
      }}
      className="group/item transition duration-500"
    >
      <img src={product.src} alt="not found" className="w-full" />
      <div className="my-7 inline-block text-3xl font-medium hover:underline">
        {product.title}
      </div>
      <div> {product.timeBorrow} </div>
      <button className="invisible mt-4 underline underline-offset-4 hover:no-underline group-hover/item:visible group-hover/item:-translate-y-2">
        Thêm vào DS
      </button>
    </div>
  );
};

export default StockCard;
