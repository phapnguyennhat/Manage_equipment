import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import Footer from "~/Components/Footer";
import LogoDoan from "../../assets/imgs/Home/LogoDoan.png";
import Speaker from "../../assets/imgs/Depot/speaker.avif";
import Table from "../../assets/imgs/Depot/table.avif";
import Chair from "../../assets/imgs/Depot/chair.avif";
import Tablecloth from "../../assets/imgs/Depot/tablecloth.avif";
import Marie from '../../assets/imgs/Home/Marie.jpg'
import Albert from '../../assets/imgs/Home/Albert.jpg'
import Steve from '../../assets/imgs/Home/Steve.png'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Home() {
  const ListProduct = [Speaker, Table, Chair, Tablecloth];
  const [idx, setIdx] = useState(0);
  const SomeSays = [
    {
      name:'Marie Curie',
      picture: Marie,
      say: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained."
    },
    {
      name: "Albert Einstein",
      picture: Albert,
      say: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."
    },
    {
      name: "Steve Jobs",
      picture: Steve,
      say: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
    }
  ]

  useEffect(() => {
    const randomIdx = Math.floor(Math.random()*3);
    if(randomIdx === 3) randomIdx = 2;
    setIdx(randomIdx);
  },[])

  return (
    <div className={cx("max-w-screen-2xl mx-auto px-[60px]")}>
      <div
        className={cx(
          "mainimg",
          "w-full bg-center bg-cover h-[730px] rounded-lg"
        )}
      >
        <div className="unit flex pt-8 ml-7">
          <div className="img w-64 mr-10">
            <img
              className="w-full h-full object-contain"
              alt=""
              src={LogoDoan}
            ></img>
          </div>
          <div className="name">
            <h4 className="uppercase text-yellow-100 text-lg text-center">
              trường đại học bách khoa - tphcm
            </h4>
            <h3 className="uppercase text-white">
              khoa khoa học & kỹ thuật máy tính
            </h3>
          </div>
        </div>
        <div className="title w-full mx-auto text-white pt-96">
          <h1 className="text-center uppercase text-7xl">
            website quản lý vật dụng đoàn - hội
          </h1>
          <i className="text-center block font-normal mt-8">
            "Nhanh gọn, tiện lợi"
          </i>
          <Link className="block text-center uppercase" to="/Depot">
            <button className="bg-white px-10 py-5 rounded-2xl text-black mt-8 text-3xl">
              Khám phá ngay
            </button>
          </Link>
        </div>
      </div>
      <div className="trend w-full mx-auto mt-24 text-5xl h-fit">
        <h2 className="text-center font-light">Nổi bật</h2>
        <div className="product grid grid-cols-4 gap-8 pt-24">
          {ListProduct.map((pro, index) => {
            return (
              <div className={cx("trendingpro group-last:hover:block")}>
                <img
                  src={pro}
                  alt=""
                  className="w-full h-full rounded-lg object-cover"
                ></img>
                <span className="block text-red-600 text-xl font-semibold pt-5">
                  Nổi bật
                </span>
                <h3 className="text-4xl pt-5">
                  {index === 0
                    ? "Loa Lớn"
                    : index === 1
                    ? "Bàn Gỗ"
                    : index === 2
                    ? "Ghế Đơn"
                    : "Khăn Trải Bàn"}
                </h3>
                <span className={cx("addpro pt-3 text-2xl underline cursor-pointer block italic")}>
                  Thêm sản phẩm
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="says w-full h-fit py-24 px-48 bg-gray-100 mt-60 rounded-xl">
          <div className="person flex">
            <img src={SomeSays[idx].picture} className="rounded-full object-contain w-24 h-24"></img>
            <span className="block font-semibold ml-12 text-3xl">{SomeSays[idx].name}</span>
          </div>
          <div className="say pt-12">
            <span className="block text-4xl font-normal font-serif">{SomeSays[idx].say}</span>
          </div>
      </div>
      <Footer />
    </div>
  );
}
