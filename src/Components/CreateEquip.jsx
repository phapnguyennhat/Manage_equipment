import React, { memo, useEffect, useState } from "react";
import { useAddEquip, useUpdateEquip } from "~/hooks/useEquip";
import Loader from "./Loader";

const CreateEquip = ({ display, setDisplayForm, equip }) => {
  const cate = ["Đồ trang trí", "Văn phòng phẩm", "Vật dụng sự kiện", "Khác"];

  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const formRef = useRef(null);

  // const collectData = (e) => {
  //   const value = isNaN(e.target.value) ? e.target.value : +e.target.value;
  //   setForm({ ...form, [e.target.name]: value });
  // };
  const {
    mutate: addEquip,
    isError: isErrorAdd,
    error: errorAdd,
    isLoading: isLoadingAdd,
    isSuccess: isSuccessAdd,
  } = useAddEquip();

  const {
    mutate: updateEquip,
    isError: isErrorUpdate,
    error: errorUpdate,
    isLoading: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateEquip();

  const [form, setForm] = useState({});
  const [err, setErr] = useState("");

  const handleClose = () => {
    // setForm({});
    // setError("");
    setDisplayForm(false);
  };

  useEffect(() => {
    if (equip) {
      setForm(equip);
    } else {
      setForm({
        title: "",
        timeBorrow: "",
        category: "",
        price: "",
        quantity: "",
        avaiQuantity: "",
        file: "",
        description: "",
      });
    }
  }, [display]);
  // console.log("rerender...");

  const handleCollectData = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (equip) {
      // console.log("call api");
      updateEquip(form);
      // if (isSuccessUpdate) setDisplayForm(false);
    } else if (!equip) {
      if (form.file) {
        addEquip(form);
      } else {
        setErr("File is required");
      }
      // if (isSuccessAdd) setDisplayForm(false);
    }
  };

  // console.log({ isSuccessAdd, isSuccessUpdate });

  return (
    <div
      className={` ${display ? "flex items-center justify-center" : "hidden"} fixed left-0 top-0 z-20 flex h-[100%] w-[100%] bg-transparent`}
    >
      <div
        onClick={handleClose}
        className="absolute z-0 h-full w-full bg-modal"
      ></div>
      <div className="z-40 m-auto w-[90%] max-w-[600px] overflow-scroll overflow-x-hidden rounded-md bg-white">
        <h3 className="py-5 text-center text-3xl font-bold">
          Thông Tin Vật Dụng
        </h3>
        {isErrorUpdate ? (
          <p className="mx-2 my-2 rounded-md bg-red-500 p-4">
            {errorUpdate?.response.data.message}
          </p>
        ) : null}
        {isErrorAdd ? (
          <p className="mx-2 my-2 rounded-md bg-red-500 p-4">
            {errorAdd?.response.data.message}
          </p>
        ) : null}
        {err ? (
          <p className="mx-2 my-2 rounded-md bg-red-500 p-4">{err}</p>
        ) : null}
        <form
          action="POST"
          onSubmit={handleSubmit}
          // ref={formRef}
          className="grid h-auto w-full items-center pb-5 sm:grid-cols-2"
        >
          <img
            className="col-span-1 hidden sm:block"
            src="./assets/imgs/equip.png"
            alt=""
          />
          <div className="col-span-1 pr-3">
            <input
              required
              onChange={(e) => handleCollectData(e)}
              className="w-full border-b-2 p-3 outline-none"
              type="text"
              name="title"
              placeholder="Tên Vật Dụng"
              value={form.title}
            />
            <input
              onChange={(e) => handleCollectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="number"
              name="timeBorrow"
              placeholder="Thời Hạn Mượn Cho Phép (Day)"
              value={form.timeBorrow ?? +form.timeBorrow}
            />

            {/* <Select form={form} setForm={setForm} /> */}
            <div>
              {/* <label
                for="HeadlineAct"
                class="block text-sm font-medium text-gray-900"
              >
                {" "}
                Headliner{" "}
              </label> */}

              <select
                name="category"
                required
                onChange={(e) => handleCollectData(e)}
                // id="HeadlineAct"
                value={form.category}
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 outline-none"
              >
                <option value={""}>--DANH MỤC--</option>
                {cate.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <input
              onChange={(e) => handleCollectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="number"
              name="price"
              value={form.price ?? +form.price}
              placeholder="Giá Trị"
            />
            <input
              onChange={(e) => handleCollectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="number"
              name="quantity"
              placeholder="Số Lượng"
              value={form.quantity ?? +form.quantity}
            />
            <input
              onChange={(e) => handleCollectData(e)}
              className="w-full border-b-2 p-3 outline-none"
              required
              type="number"
              name="avaiQuantity"
              placeholder="Sẳn Có"
              value={form.avaiQuantity ?? +form.avaiQuantity}
            />
            <input
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              name="file"
              className="w-full p-3 outline-none"
              type="file"
              accept="image/*"

              // value={form.file}
            />

            <input
              onChange={(e) => handleCollectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="text"
              name="description"
              placeholder="Mô Tả"
              value={form.description}
            />
          </div>
          <div></div>
          <div className="my-3 flex flex-row justify-center gap-x-5">
            <button type="submit" className="rounded-md bg-blue-400 p-4">
              Lưu
            </button>

            <button
              type="reset"
              onClick={handleClose}
              className="rounded-md bg-red-500 p-4"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
      {isLoadingAdd || isLoadingUpdate ? <Loader /> : null}
    </div>
  );
};

export default memo(CreateEquip);
