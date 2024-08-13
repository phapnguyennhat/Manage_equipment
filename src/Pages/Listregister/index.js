import classNames from "classnames/bind";
import styles from "./Listregister.module.scss";
import { useMe } from "~/hooks/useAuth";
import Footer from "~/Components/Footer";
import { FiMoreVertical } from "react-icons/fi";
import { useFormData } from "~/hooks/useForm";
import { useQueries } from "react-query";
import { useQuery } from "~/hooks/useQuery";
import Pagination from "~/Components/Pagination";
import RowFormAd from "~/Components/RowFormAd";
import { useLocation, useNavigate } from "react-router-dom";
import RowFormStu from "~/Components/RowFormStu";

const cx = classNames.bind(styles);

export default function Listregister() {
  const { data: userData } = useMe();
  const query = useQuery();
  const page = query.get("page") || 1;
  const limit = query.get("limit") || 5;
  const sortBy = query.get("sortBy");
  const sortOrder = query.get("sortOrder");
  const mssv = query.get("mssv");
  const navigate = useNavigate();
  const location = useLocation();

  const user = userData?.data || {};

  const { data } = useFormData(page, limit, sortBy, sortOrder, mssv);
  const formList = data?.data.data || [];
  const count = data?.data.count || 0;

  return (
    <div className="mx-[30px] lg:mx-[45px]">
      <div className="min-h-screen">
        <h2 className="my-20 text-center text-4xl">Danh Sách Đăng Ký</h2>
        <div className="mx-auto mb-4 flex w-full max-w-[700px] flex-col justify-center md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <span>Trình bày </span>
            <select
              onChange={(e) => {
                query.set("limit", e.target.value);
                navigate(`${location.pathname}?${query}`);
              }}
              name="limit"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <span>dòng/trang</span>
          </div>
          {user.role === "admin" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // console.log(e.HASIKIRAMA SUNEO);
                const value = document.getElementById("search").value;
                query.set("mssv", value);
                navigate(`${location.pathname}?${query}`);
              }}
            >
              Tìm Kiếm
              <input
                id="search"
                name="mssv"
                type="text"
                placeholder="MSSV"
                autoComplete="off"
                className="e ml-3 rounded border-2 py-2 outline-blue-400"
              />
            </form>
          )}
        </div>
        {user.role === "admin" ? (
          <div className="min-h-[500px] overflow-y-auto overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <table className="mx-auto w-[800px] text-center">
              <tr className="bg-blue-300">
                <th>MSSV</th>
                <th>Ngày Mượn</th>
                <th>Ngày Duyệt</th>
                <th>Trạng Thái</th>
                <th>Phương Thức</th>
                <th>Người Duyệt</th>
                <th>Thao Tác</th>
              </tr>
              {formList.map((item, index) => (
                <RowFormAd key={index} item={item} />
              ))}
            </table>
          </div>
        ) : (
          <div className="min-h-[500px] overflow-y-auto overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <table className="mx-auto w-[800px] text-center">
              <tr className="bg-blue-300">
                <th>Ngày Mượn</th>
                <th>Ngày Duyệt</th>
                <th>Trạng Thái</th>
                <th>Phương Thức</th>
                <th>Người Duyệt</th>
                <th>Thao Tác</th>
              </tr>
              {formList.map((item, index) => (
                <RowFormStu key={index} item={item} />
              ))}
            </table>
          </div>
        )}
        <div className="mx-auto mb-4 flex w-full max-w-[700px] items-center justify-between">
          <span className="text-red-500">
            Tổng số danh sách đăng kí {count}
          </span>
          <Pagination limit={limit} currentPage={page} count={count} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
