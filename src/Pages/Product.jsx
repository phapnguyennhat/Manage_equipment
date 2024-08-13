import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Footer from "~/Components/Footer";
import StockCard from "./Depot/StockCard";
import dataStock from "~/constant/depotConstant";
import { getEquipByIdAPI } from "~/api/equipAPI";
import { useEquipId } from "~/hooks/useEquip";
import Loader from "~/Components/Loader";
import { useAddItemCart } from "~/hooks/useCart";
import ToastSuccess from "~/Components/ToastSuccess";
const Product = () => {
  // const location = useLocation();
  // const item = location.state.info;
  // console.log(item);
  const { mutate: addItemCart, isSuccess } = useAddItemCart();
  const [displayToast, setDisplayToast] = useState(false);

  const handleToast = () => {
    if (isSuccess) {
      setDisplayToast(true);
      setTimeout(() => {
        setDisplayToast(false);
      }, 2000);
    }
  };

  const { id } = useParams();

  const { data, isLoading, isError } = useEquipId(id);

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (quantity) => {
    if (quantity >= 1 && quantity <= item.avaiQuantity) {
      setQuantity(quantity);
    }
  };
  const handleChangeQuantity = (quantity) => {
    if (!isNaN(quantity) && quantity <= item.avaiQuantity) {
      setQuantity(quantity);
    }
  };

  const item = data?.data || {};

  // const [item, setItem] = useState({});
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0, { smooth: true });
  }, [id]);

  if (isError) return <div>Khong tim thay vat dung</div>;

  return (
    <div className="mx-[30px] lg:mx-[60px]">
      <div className="my-11 flex flex-col gap-20 pb-10 lg:flex-row">
        <div className="hidden flex-col gap-y-7 lg:flex">
          <div className="cursor-pointer overflow-hidden rounded-md border-2 duration-300 hover:border-[#282828]">
            <img src={item.urlImg} className="w-[150px]" alt="" />
          </div>
          <div className="cursor-pointer rounded-md border-2 duration-300 hover:border-[#282828]">
            <img src={item.urlImg} className="w-[150px]" alt="" />
          </div>
          <div className="cursor-pointer rounded-md border-2 duration-300 hover:border-[#282828]">
            <img src={item.urlImg} className="w-[150px]" alt="" />
          </div>
        </div>
        <img
          className="mx-auto w-[90%] lg:w-[50%]"
          src={item.urlImg}
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
            {`Giá trị bồi thường: ${item.price}`}
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
              <FaMinus
                onClick={() => handleQuantity(parseInt(quantity) - 1)}
                color="gray"
              />
              <input
                className="w-[80px] select-none text-center outline-none"
                type="text"
                value={quantity}
                onChange={(e) => handleChangeQuantity(e.target.value)}
              />
              <FaPlus
                onClick={() => handleQuantity(parseInt(quantity) + 1)}
                color="gray"
              />
            </div>
            <button
              disabled={item?.avaiQuantity === 0}
              onClick={() => {
                addItemCart({ equipId: item.id, quantity: parseInt(quantity) });
                handleToast();
              }}
              className={`w-full select-none rounded-full p-5 text-white ${item?.avaiQuantity === 0 ? "bg-gray-500" : "bg-black"} `}
            >
              Thêm vào DS
            </button>
          </div>
          {item?.avaiQuantity === 0 ? (
            <p className="py-4 text-3xl font-medium text-red-500">
              Vật dụng không có sẵn
            </p>
          ) : null}
        </div>
      </div>
      <h3 className="mb-9 text-4xl">Vật dụng khác</h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
        {dataStock.slice(0, 4).map((product, index) => (
          <StockCard product={product} key={index} />
        ))}
      </div>
      {isLoading ? <Loader /> : null}
      <Footer />
      {displayToast ? <ToastSuccess /> : null}
    </div>
  );
};

export default Product;
