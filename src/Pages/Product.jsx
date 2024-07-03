import React from "react";
import { useLocation } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Footer from "~/Components/Footer";
import StockCard from "./Depot/StockCard";
import dataStock from "~/constant/depotConstant";
const Product = () => {
  // const location = useLocation();
  // const item = location.state.info;
  // console.log(item);
  const item = {};

  return (
    <div className="mx-[30px] lg:mx-[60px]">
      <div className="my-11 flex flex-col gap-20 pb-10 lg:flex-row">
        <div className="hidden flex-col gap-y-7 lg:flex">
          <div className="cursor-pointer overflow-hidden rounded-md border-2 duration-300 hover:border-[#282828]">
            <img src={item.src} className="w-[150px]" alt="" />
          </div>
          <div className="cursor-pointer rounded-md border-2 duration-300 hover:border-[#282828]">
            <img src={item.src} className="w-[150px]" alt="" />
          </div>
          <div className="cursor-pointer rounded-md border-2 duration-300 hover:border-[#282828]">
            <img src={item.src} className="w-[150px]" alt="" />
          </div>
        </div>
        <img
          className="mx-auto w-[90%] lg:w-[50%]"
          src={item.src}
          alt="not found"
        />
        <div className="mx-auto w-[90%] lg:w-[50%]">
          <p className="text-gray-400">
            <a href="/">Trang Chủ/</a>
            <a href="/Depot">Kho/</a>
            <a href="/Depot">{item.category}</a>
          </p>
          <h3 className="mt-6 text-5xl font-medium">{item.title}</h3>
          <h4 className="mt-6 text-3xl">
            {`Giá trị bồi thường: ${item.compensate}`}{" "}
          </h4>
          <p className="my-6 lg:w-[70%]">{item.description}</p>
          <span className="mt-6">Màu: Đen</span>
          <div className="my-6 flex">
            <span className="rounded-full border-2 bg-black p-5 duration-300 hover:border-[#282828]"></span>
            <span className="rounded-full border-2 bg-white p-5 duration-300 hover:border-[#282828]"></span>
            <span className="rounded-full border-2 bg-blue-600 p-5 duration-300 hover:border-[#282828]"></span>
          </div>
          <div className="flex gap-x-7">
            <div className="inline-flex items-center rounded-full border-2 p-5">
              <FaMinus color="gray" />
              <input
                className="w-[80px] text-center outline-none"
                type="text"
              />
              <FaPlus color="gray" />
            </div>
            <button className="w-full rounded-full bg-black p-5 text-white">
              Thêm vào DS
            </button>
          </div>
        </div>
      </div>
      <h3 className="mb-9 text-4xl">Vật dụng liên quan</h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
        {dataStock.slice(0, 4).map((product, index) => (
          <StockCard product={product} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
