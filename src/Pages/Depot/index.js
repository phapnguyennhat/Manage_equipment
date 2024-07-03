import classNames from "classnames/bind";
import styles from "./Depot.module.scss";
import { FaChevronDown } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import StockCard from "./StockCard";
import Footer from "~/Components/Footer";
import Filter from "./Filter";
import { profile } from "~/api/authAPI";
import CreateEquip from "~/Components/CreateEquip";
import { useLocation } from "react-router-dom";
import { getAll } from "~/api/equipAPI";
import Pagination from "~/Components/Pagination";

const cx = classNames.bind(styles);
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function Depot() {
  const [displayFilter, setDisplayFilter] = useState(false);
  const [displayAside, setDisplayAside] = useState(false);
  const [asideState, setAsideState] = useState({
    isOpenCategories: false,
    isOpenBorrow: false,
    isOpenColor: false,
    isOpenStock: false,
  });
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);
  const query = useQuery();
  const page = +query.get("page");

  const status = query.get("status");
  const cate = query.get("cate");

  const [displayForm, setDisplayForm] = useState(false);

  const handleAside = () => setDisplayAside(!displayAside);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("token")) {
      profile().then((res) => setUser(res.data));
    }
    getAll(page, status, cate).then((res) => {
      setData(res.data.data);
      setCount(res.data.count);
    });
    // window.scrollTo(0, 0);
  }, [page, status, cate]);

  return (
    <div className="px-6 md:px-[45px]">
      {displayAside && (
        <Filter
          displayAside={displayAside}
          setDisplayAside={setDisplayAside}
          asideState={asideState}
          setAsideState={setAsideState}
        />
      )}
      <div className="my-[50px] flex items-center justify-between">
        <ul className="hidden gap-4 md:flex">
          <li
            className="btn-filter relative flex flex-row items-center justify-center gap-1"
            onClick={() => setDisplayFilter(!displayFilter)}
          >
            Sắp xếp <FaChevronDown size={20} />
            {displayFilter && (
              <ul className="absolute left-[-1rem] top-[100%] w-[170px] overflow-hidden rounded-xl border-l border-r bg-transparent shadow-lg">
                <li className="pl-2 hover:bg-[#c1c1c1]">Mặc định</li>
                <li className="pl-2 hover:bg-[#c1c1c1]">Sắp xếp gần đây</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              handleAside();
              setAsideState({
                ...asideState,
                isOpenCategories: !asideState.isOpenCategories,
              });
            }}
            className="btn-filter"
          >
            Danh Mục
          </li>
          <li
            onClick={() => {
              handleAside();
              setAsideState({
                ...asideState,
                isOpenBorrow: !asideState.isOpenBorrow,
              });
            }}
            className="btn-filter"
          >
            Ngày Mượn
          </li>
          <li
            onClick={() => {
              handleAside();
              setAsideState({
                ...asideState,
                isOpenColor: !asideState.isOpenColor,
              });
            }}
            className="btn-filter"
          >
            Màu
          </li>
          <li
            onClick={() => {
              handleAside();
              setAsideState({
                ...asideState,
                isOpenStock: !asideState.isOpenStock,
              });
            }}
            className="btn-filter"
          >
            Còn Trong Kho
          </li>
          {/* <li className="btn-filter">Đánh giá</li> */}
        </ul>
        <button
          onClick={handleAside}
          className="btn-filter flex gap-4 md:hidden"
        >
          Filter <IoFilterOutline />
        </button>
        {user?.role !== "admin" ? (
          <div>{count} Products</div>
        ) : (
          <button
            onClick={() => setDisplayForm(true)}
            className="rounded-md bg-blue-300 p-4"
          >
            Thêm Vật Dụng
          </button>
        )}
      </div>
      <div className="grid min-h-screen grid-cols-2 gap-x-10 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product, index) => (
          <StockCard product={product} key={index} />
        ))}
      </div>
      {/* <div className="flex flex-col text-center">
        Hiển thị 1-12 của 28 sản phẩm
        <button className="btn-filter mx-auto w-[200px]">Hiển thị thêm</button>
      </div> */}
      <Pagination count={count} limit={12} />

      <CreateEquip setDisplayForm={setDisplayForm} display={displayForm} />
      <Footer />
    </div>
  );
}
