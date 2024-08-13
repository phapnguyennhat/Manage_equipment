import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import CartCard from "./CartCard";
import Footer from "~/Components/Footer";
import { FaSave } from "react-icons/fa";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCartData, useDeleteCartAll, useDeleteItem } from "~/hooks/useCart";
import DeleteModal from "~/Components/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "~/redux/slices/cartSlice";
import { useAddForm } from "~/hooks/useForm";
import Loader from "~/Components/Loader";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Register() {
  const { data } = useCartData();
  const cartList = data?.data.data || [];
  const count = data?.data.count || 0;
  const total = data?.data.total || 0;
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  // const [displaySave, setDisplaySave] = useState(false);
  // console.log("re-render -register");

  const cartListFilter = cartList.filter(
    (item) => item.equip.avaiQuantity !== 0,
  );

  const handleDisplay = useCallback((value) => {
    setDisplayDeleteModal(value);
  }, []);

  const { mutate: deleteCartAll } = useDeleteCartAll();

  const handleDeleteCartAll = useCallback(() => {
    deleteCartAll();
  }, []);

  const {
    mutate: addForm,
    isLoading: isLoadingAdd,
    isError: isErrorAdd,
    isSuccess: isSuccessAdd,
  } = useAddForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = document.getElementById("method").value;
    const formEquipments = cartListFilter.map((item) => ({
      quantity: item.quantity,
      equipId: item.equipId,
    }));
    const data = { method, formEquipments };
    addForm(data);
  };

  // useEffect(() => {
  //   dispatch(fetchCartData());
  // }, []);
  if (isErrorAdd) return <div>Opps SomeThing wrong</div>;

  return (
    <div className="mx-[30px] lg:mx-[45px]">
      <div className="min-h-screen">
        <h2 className="my-20 text-center text-4xl">Đăng Ký Vật Dụng</h2>
        <div className="flex flex-col justify-center gap-x-20 lg:flex-row">
          {count === 0 ? (
            <div className="mb-4 flex flex-col justify-center">
              <img
                alt="not found"
                src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png"
              />
              <p className="text-center text-3xl font-medium text-gray-400">
                Danh Sách Vật Dụng Trống 🥲🥲
              </p>
            </div>
          ) : (
            <div className="mb-6 w-auto lg:w-[60%]">
              {cartList.map((item, index) => (
                <CartCard key={index} product={item} />
              ))}
            </div>
          )}
          <div className="w-auto lg:w-[35%]">
            <section className="w-full rounded-md border-2 p-6">
              <div className="flex justify-between border-b-2 border-gray-300 pb-3 text-3xl font-bold">
                <span>Tổng giá trị:</span>
                <span>${total}</span>
              </div>
              {cartListFilter.map((item, index) => (
                <div key={index} className="my-4 flex justify-between text-3xl">
                  <span>{item.equip.title}</span>
                  <span>x{item.quantity}</span>
                </div>
              ))}

              <form onSubmit={handleSubmit}>
                <select
                  id="method"
                  required
                  disabled={count === 0}
                  className="outline-none"
                >
                  <option value={""}>--HÌNH THỨC NHẬN VẬT DỤNG--</option>
                  <option value={"office"}>Nhận tại văn phòng</option>
                  <option value={"destination"}>
                    Vận chuyển đến điểm giao
                  </option>
                </select>
                <div className="my-5 flex lg:justify-center">
                  <button
                    disabled={count === 0}
                    type="submit"
                    className={`mr-4 p-4 ${count === 0 ? "bg-gray-400" : "bg-blue-400 hover:bg-blue-600"} `}
                  >
                    Xác nhận
                  </button>
                  <button
                    onClick={() => setDisplayDeleteModal(true)}
                    disabled={count === 0}
                    type="button"
                    className={`p-4 ${count === 0 ? "bg-gray-400" : "bg-red-400 hover:bg-red-600"} `}
                  >
                    Xóa tất cả
                  </button>
                </div>
                <p className="text-red-500">
                  *Cá nhân hay tổ chức nào làm mất hay hư hỏng vật dụng có trách
                  nhiệm mua lại hoặc đền giá trị tương đương
                </p>
                <p className="text-red-500">
                  *Trả phí vận chuyển 1$ với mỗi Km cho hình thức vận chuyển đến
                  điểm giao
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />

      {displayDeleteModal && (
        <DeleteModal
          setDisplayDeleteModal={handleDisplay}
          action={handleDeleteCartAll}
        />
      )}
      {isLoadingAdd && <Loader />}
    </div>
  );
}
