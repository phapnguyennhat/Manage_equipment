import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import Footer from "~/Components/Footer";
import LogoDoan from "../../assets/imgs/Home/LogoDoan.png";
import Speaker from "../../assets/imgs/Depot/speaker.avif";
import Table from "../../assets/imgs/Depot/table.avif";
import Chair from "../../assets/imgs/Depot/chair.avif";
import Tablecloth from "../../assets/imgs/Depot/tablecloth.avif";
import Marie from "../../assets/imgs/Home/Marie.jpg";
import Albert from "../../assets/imgs/Home/Albert.jpg";
import Steve from "../../assets/imgs/Home/Steve.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Home() {
  const ListProduct = [Speaker, Table, Chair, Tablecloth];
  const [idx, setIdx] = useState(0);
  const SomeSays = [
    {
      name: "Marie Curie",
      picture: Marie,
      say: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.",
    },
    {
      name: "Albert Einstein",
      picture: Albert,
      say: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
    },
    {
      name: "Steve Jobs",
      picture: Steve,
      say: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    },
  ];

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * 3);
    if (randomIdx === 3) randomIdx = 2;
    setIdx(randomIdx);
  }, []);

  return (
    <div className={cx("mx-auto max-w-screen-2xl px-6 md:px-[45px]")}>
      <div
        className={cx(
          "mainimg",
          "h-[730px] w-full rounded-lg bg-cover bg-center",
        )}
      >
        <div className="unit ml-7 flex pt-8">
          <div className="img mr-10 w-64">
            <img
              className="h-full w-full object-contain"
              alt=""
              src={LogoDoan}
            ></img>
          </div>
          <div className="name">
            <h4 className="text-center text-lg uppercase text-yellow-100">
              trường đại học bách khoa - tphcm
            </h4>
            <h3 className="uppercase text-white">
              khoa khoa học & kỹ thuật máy tính
            </h3>
          </div>
        </div>
        <div className="title mx-auto w-full pt-96 text-white">
          <h1 className="text-center text-7xl uppercase">
            website quản lý vật dụng đoàn - hội
          </h1>
          <i className="mt-8 block text-center font-normal">
            "Nhanh gọn, tiện lợi"
          </i>
          <Link className="block text-center uppercase" to="/Depot">
            <button className="mt-8 rounded-2xl bg-white px-10 py-5 text-3xl text-black">
              Khám phá ngay
            </button>
          </Link>
        </div>
      </div>
      <div className="trend mx-auto mt-24 h-fit w-full text-5xl">
        <h2 className="text-center font-light">Nổi bật</h2>
        <div className="product grid gap-8 pt-24 md:grid-cols-2 lg:grid-cols-4">
          {ListProduct.map((pro, index) => {
            return (
              <div
                className={cx("trendingpro col-span-1 group-last:hover:block")}
              >
                <img
                  src={pro}
                  alt=""
                  className="w-full rounded-lg object-cover"
                ></img>
                <span className="block pt-5 text-xl font-semibold text-red-600">
                  Nổi bật
                </span>
                <h3 className="pt-5 text-4xl">
                  {index === 0
                    ? "Loa Lớn"
                    : index === 1
                      ? "Bàn Gỗ"
                      : index === 2
                        ? "Ghế Đơn"
                        : "Khăn Trải Bàn"}
                </h3>
                <span
                  className={cx(
                    "addpro block cursor-pointer pt-3 text-2xl italic underline",
                  )}
                >
                  Thêm sản phẩm
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="says mt-60 h-fit w-full rounded-xl bg-gray-100 px-12 py-24 md:px-32 lg:px-48">
        <div className="person flex">
          <img
            src={SomeSays[idx].picture}
            className="h-24 w-24 rounded-full object-contain"
            alt="not found"
          ></img>
          <span className="ml-12 block text-3xl font-semibold">
            {SomeSays[idx].name}
          </span>
        </div>
        <div className="say pt-12">
          <span className="block font-serif text-4xl font-normal">
            {SomeSays[idx].say}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
