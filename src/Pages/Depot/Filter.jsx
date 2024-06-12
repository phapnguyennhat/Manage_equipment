import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";

const Filter = ({
  displayAside,
  setDisplayAside,
  asideState,
  setAsideState,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex bg-modal">
      <div className={"w-[420px] bg-white"}>
        <div className="border-b-2 px-11">
          <div
            onClick={() => {
              setDisplayAside(!asideState);
              setAsideState({});
            }}
            className="my-2 inline-block rounded-full border-2 border-[#c1c1c1] p-4 transition duration-300 hover:border-[#282828]"
          >
            <VscChromeClose />
          </div>
        </div>
        <div className="item-filter">
          <h4
            onClick={() =>
              setAsideState({
                ...asideState,
                isOpenCategories: !asideState.isOpenCategories,
              })
            }
            className="flex items-center justify-between"
          >
            Danh Mục <FaAngleDown />
          </h4>
          <ul className={asideState.isOpenCategories ? "block" : "hidden"}>
            <li className="mt-4">
              Đồ trang trí
              <span className="text-gray-500">(6)</span>
            </li>
            <li className="mt-4">
              Văn phòng phẩm
              <span className="text-gray-500">(6)</span>
            </li>

            <li className="mt-4">
              Vật dụng sự kiện
              <span className="text-gray-500">(6)</span>
            </li>
            <li className="mt-4">
              Khác
              <span className="text-gray-500">(6)</span>
            </li>
          </ul>
        </div>
        <div className="item-filter">
          <h4
            onClick={() =>
              setAsideState({
                ...asideState,
                isOpenBorrow: !asideState.isOpenBorrow,
              })
            }
            className="flex items-center justify-between"
          >
            {" "}
            Ngày Mượn <FaAngleDown />
          </h4>
          <ul className={asideState.isOpenBorrow ? "block" : "hidden"}>
            <li className="mt-4">
              <input type="checkbox" /> 3 Ngày
            </li>
            <li className="mt-4">
              <input type="checkbox" /> 7 Ngày
            </li>
            <li className="mt-4">
              <input type="checkbox" /> 14 Ngày
            </li>
          </ul>
        </div>
        <div className="item-filter">
          <h4
            onClick={() =>
              setAsideState({
                ...asideState,
                isOpenColor: !asideState.isOpenColor,
              })
            }
            className="flex items-center justify-between"
          >
            Màu <FaAngleDown />
          </h4>
          <ul className={asideState.isOpenColor ? "block" : "hidden"}>
            <li className="mt-4">
              <input type="checkbox" /> Đỏ
            </li>
            <li className="mt-4">
              <input type="checkbox" /> Cam
            </li>{" "}
            <li className="mt-4">
              <input type="checkbox" /> Vàng
            </li>{" "}
            <li className="mt-4">
              <input type="checkbox" /> Lục
            </li>
          </ul>
        </div>
        <div className="item-filter">
          <h4
            onClick={() =>
              setAsideState({
                ...asideState,
                isOpenStock: !asideState.isOpenStock,
              })
            }
            className="flex items-center justify-between"
          >
            Còn Trong Kho <FaAngleDown />
          </h4>
          <ul className={asideState.isOpenStock ? "block" : "hidden"}>
            <li className="mt-4">
              <input type="checkbox" /> Sẵn Có
            </li>
            <li className="mt-4">
              <input type="checkbox" /> Hết
            </li>
            <li className="mt-4">
              <input type="checkbox" /> Sắp có
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => {
          setDisplayAside(!asideState);
          setAsideState({});
        }}
        className="flex-1"
      ></div>
    </div>
  );
};

export default Filter;
