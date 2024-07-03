import React, { useRef, useState } from "react";
import { createEquip } from "~/api/equipAPI";
import Loader from "./Loader";
import Select from "./Select";

const CreateEquip = ({ display, setDisplayForm }) => {
  const [form, setForm] = useState({
    urlImg: "string",
    category: "Đồ trang trí",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const collectData = (e) => {
    const value = isNaN(e.target.value) ? e.target.value : +e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  // console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (form.file && form.file.type.startsWith("image/")) {
      // Gửi form hoặc xử lý file image tại đây
      try {
        await createEquip(form);
        setLoading(false);
        setDisplayForm(false);
        window.location.reload();
        // formRef.current.reset();
      } catch (err) {
        const mess = err?.response.data.message;
        setError(Array.isArray(mess) ? mess[0] : mess);
        setLoading(false);
      }
    } else {
      setError("Vui Lòng Tải File Ảnh");
      setLoading(false);
    }
  };
  return (
    <div
      className={` ${display ? "block" : "hidden"} fixed left-0 top-0 z-20 flex h-[100%] w-[100%] bg-modal`}
    >
      <div className="m-auto w-[90%] max-w-[600px] overflow-scroll overflow-x-hidden rounded-md bg-white">
        <h3 className="py-5 text-center text-3xl font-bold">
          Thông Tin Vật Dụng
        </h3>
        {error ? (
          <p className="mx-2 my-2 rounded-md bg-red-500 p-4"> {error}</p>
        ) : null}
        <form
          action="POST"
          onSubmit={handleSubmit}
          ref={formRef}
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
              onChange={(e) => collectData(e)}
              className="w-full border-b-2 p-3 outline-none"
              type="text"
              name="title"
              placeholder="Tên Vật Dụng"
            />
            <input
              onChange={(e) => collectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="number"
              name="timeBorrow"
              placeholder="Thời Hạn Mượn Cho Phép (Day)"
            />

            <Select form={form} setForm={setForm} />
            <input
              onChange={(e) => collectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="number"
              name="price"
              placeholder="Giá Trị"
            />
            <input
              onChange={(e) => collectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="number"
              name="quantity"
              placeholder="Số Lượng"
            />
            <input
              onChange={(e) => collectData(e)}
              className="w-full border-b-2 p-3 outline-none"
              required
              type="number"
              name="avaiQuantity"
              placeholder="Sẳn Có"
            />
            <input
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              name="file"
              className="w-full p-3 outline-none"
              type="file"
              accept="image/*"
              required
            />

            <input
              onChange={(e) => collectData(e)}
              required
              className="w-full border-b-2 p-3 outline-none"
              type="text"
              name="description"
              placeholder="Mô Tả"
            />
          </div>
          <div></div>
          <div className="my-3 flex flex-row justify-center gap-x-5">
            <button type="submit" className="rounded-md bg-blue-400 p-4">
              Lưu
            </button>

            <button
              type="reset"
              onClick={() => {
                setDisplayForm(false);
                setError("");
              }}
              className="rounded-md bg-red-500 p-4"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>

      <div className={`${loading ? "block" : "hidden"}`}>
        {" "}
        <Loader />
      </div>
    </div>
  );
};

export default CreateEquip;
