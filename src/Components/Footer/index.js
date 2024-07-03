import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className="Footer my-10 w-full">
      <div className="flex-row gap-14 lg:flex">
        <div className="left basis-1/4">
          <span className="text-5xl font-semibold text-[#9db7f0]">DH</span>
          <span className="text-5xl font-semibold text-[#3ea6f1]">Store</span>
          <p className="my-auto mt-3 md:mt-10">
            Nơi để mọi người có thể mượn vật dụng khi cần tổ chức sự kiện.
          </p>
        </div>
        <div className="mid my-4 basis-2/4">
          <p className="mb-5 text-3xl font-medium">Thông tin liên hệ</p>
          <div className="address mb-3 flex gap-5">
            <svg
              class="svg-inline--fa fa-map-marker-alt fa-w-12 mr-4 h-8"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="map-marker-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
              ></path>
            </svg>
            <span>
              Địa chỉ: 609-H6, Trường Đại học Bách khoa - ĐHQG-HCM, phường Đông
              Hòa, thành phố Dĩ An, tỉnh Bình Dương.
            </span>
          </div>
          <div className="email mb-3 flex gap-5">
            <svg
              class="svg-inline--fa fa-envelope fa-w-16 h-8"
              aria-hidden="true"
              data-prefix="far"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              ></path>
            </svg>
            <span>Email: dtn-ktmt@hcmut.edu.vn</span>
          </div>
          <div className="website flex gap-5">
            <svg
              class="svg-inline--fa fa-globe-asia fa-w-16 h-8"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="globe-asia"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"
              ></path>
            </svg>
            <span>Website: www.doanhoi.cse.hcmut.edu.vn</span>
          </div>
        </div>
        <div className="right basis-1/4">
          <p className="mb-10 text-center text-3xl font-medium md:text-left lg:text-center">
            Theo dõi chúng tôi
          </p>
          <div className="icons flex justify-center gap-5 md:justify-start lg:justify-center">
            <a
              className=""
              href="https://www.facebook.com/BKCSE.Multimedia"
              // target="_blank"
            >
              <svg
                class="svg-inline--fa fa-facebook fa-w-14 mt-[4.5px] h-16"
                aria-hidden="true"
                data-prefix="fab"
                data-icon="facebook"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@csemultimedia?is_from_webapp=1&sender_device=pc"
              // target="_blank"
              className=""
            >
              <img
                className="h-[50px]"
                src="https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=000000"
                alt="not found"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
