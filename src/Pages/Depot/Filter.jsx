import React, { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";

import { FaMinus } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "~/hooks/useQuery";

const Filter = ({
  displayAside,
  setDisplayAside,
  asideState,
  setAsideState,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useQuery();

  const [timeFrom, setTimeFrom] = useState(searchParams.get("timefrom"));
  const [timeTo, setTimeTo] = useState(searchParams.get("timeto"));
  const [cateSelect, setCate] = useState(searchParams.get("cate"));

  // const [isAvai, setIsAvai] = useState(true);
  // const [isOut, setIsOut] = useState(false);

  let status = searchParams.get("status")
    ? searchParams.get("status").split(",")
    : [];

  const handleNav = (e) => {
    searchParams.set("cate", e.target.innerText);

    const newSearch = searchParams.toString();
    setCate(e.target.innerText);
    setDisplayAside(false);
    navigate(`${location.pathname}?${newSearch}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("timefrom", timeFrom);
    searchParams.set("timeto", timeTo);
    const newSearch = searchParams.toString();
    setDisplayAside(false);
    navigate(`${location.pathname}?${newSearch}`);
  };
  // console.log(status);
  const handleStatus = () => {
    if (status.includes("available")) {
      status = status.filter((item) => item !== "available");
      searchParams.set("status", status);
      const newSearch = searchParams.toString();
      setDisplayAside(false);
      navigate(`${location.pathname}?${newSearch}`);
    } else if (!status.includes("available")) {
      status = [...status, "available"];

      searchParams.set("status", status);
      const newSearch = searchParams.toString();
      setDisplayAside(false);
      navigate(`${location.pathname}?${newSearch}`);
    }
  };
  const handleStatusSoldOut = () => {
    if (status.includes("soldout")) {
      status = status.filter((item) => item !== "soldout");
      searchParams.set("status", status);
      const newSearch = searchParams.toString();
      setDisplayAside(false);
      navigate(`${location.pathname}?${newSearch}`);
    } else if (!status.includes("soldout")) {
      status = [...status, "soldout"];
      console.log(status);
      searchParams.set("status", status);
      const newSearch = searchParams.toString();
      setDisplayAside(false);
      navigate(`${location.pathname}?${newSearch}`);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex bg-modal">
      <div className={"w-[420px] overflow-scroll overflow-x-hidden bg-white"}>
        <div className="border-b-2 px-11">
          <div
            onClick={() => {
              setDisplayAside(!asideState);
              setAsideState({});
            }}
            className="my-2 inline-block cursor-pointer rounded-full border-2 border-[#c1c1c1] p-4 transition duration-300 hover:border-[#282828]"
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
            className="flex cursor-pointer items-center justify-between"
          >
            Danh Mục <FaAngleDown />
          </h4>
          <ul className={asideState.isOpenCategories ? "block" : "hidden"}>
            <li className="mt-4">
              <span
                className={`cursor-pointer ${cateSelect === "Đồ trang trí" ? "font-bold" : ""} `}
                onClick={(e) => handleNav(e)}
              >
                {" "}
                Đồ trang trí
              </span>
              <span className="text-gray-500">(6)</span>
            </li>
            <li className="mt-4">
              <span
                className={`cursor-pointer ${cateSelect === "Văn phòng phẩm" ? "font-bold" : ""} `}
                onClick={(e) => handleNav(e)}
              >
                {" "}
                Văn phòng phẩm
              </span>
              <span className="text-gray-500">(6)</span>
            </li>

            <li className="mt-4">
              <span
                className={`cursor-pointer ${cateSelect === "Vật dụng sự kiện" ? "font-bold" : ""} `}
                onClick={(e) => handleNav(e)}
              >
                {" "}
                Vật dụng sự kiện
              </span>
              <span className="text-gray-500">(6)</span>
            </li>
            <li className="mt-4">
              <span
                className={`cursor-pointer ${cateSelect === "Khác" ? "font-bold" : ""} `}
                onClick={(e) => handleNav(e)}
              >
                Khác
              </span>
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
            className="flex cursor-pointer items-center justify-between"
          >
            {" "}
            Ngày Mượn <FaAngleDown />
          </h4>
          <form
            action="GET"
            className={asideState.isOpenBorrow ? "block" : "hidden"}
          >
            <div className="flex w-full flex-row items-center py-4 text-center">
              <input
                className="w-full p-2 text-center"
                type="number"
                placeholder="Từ (day)"
                value={timeFrom}
                onChange={(e) => setTimeFrom(e.target.value)}
              />
              <span className="px-3">
                {" "}
                <FaMinus />
              </span>
              <input
                className="w-full p-2 text-center"
                type="number"
                placeholder="Đến (day)"
                value={timeTo}
                onChange={(e) => setTimeTo(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-400 p-3"
            >
              {" "}
              Áp dụng
            </button>
          </form>
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
          <ul className={asideState.isOpenStock ? "flex flex-col" : "hidden"}>
            <li className="mt-4">
              <input
                type="checkbox"
                checked={status.includes("available")}
                onChange={handleStatus}
              />{" "}
              <span>Sẵn Có</span>
            </li>
            <li className="mt-4">
              <input
                type="checkbox"
                onChange={handleStatusSoldOut}
                checked={status.includes("soldout")}
              />{" "}
              <span>Hết</span>
            </li>
            {/* <li className="mt-4">
              <input type="checkbox" /> Sắp có
            </li> */}
          </ul>
        </div>
        <div className="flex justify-end pr-3 pt-3">
          {" "}
          <button
            onClick={() => {
              navigate("/Depot?page=1");
              setDisplayAside(false);
            }}
            className="rounded-md bg-red-500 p-4"
          >
            Bỏ lọc
          </button>
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
