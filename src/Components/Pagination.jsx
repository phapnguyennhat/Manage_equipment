import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "~/hooks/useQuery";

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Pagination = ({ currentPage, limit, count }) => {
  const totalPages = Math.ceil(count / limit);
  const searchParams = useQuery();
  // const currentPage = searchParams.get("page");

  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      searchParams.set("page", page);
      const newSearch = searchParams.toString();
      navigate(`${location.pathname}?${newSearch}`);
      // setCurrentPage(page);
    }
  };

  return (
    <div className="my-5 flex select-none items-center justify-center space-x-1">
      <button
        onClick={() => {
          handleChangePage(currentPage - 1);
        }}
        className="rounded-md bg-gray-200 px-4 py-2 text-gray-700"
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>
      {[...Array(totalPages).keys()].map((_, index) => (
        <button
          key={index}
          onClick={() => {
            handleChangePage(index + 1);
          }}
          className={`px-4 py-2 ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} rounded-md`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => {
          handleChangePage(currentPage + 1);
        }}
        className="rounded-md bg-gray-200 px-4 py-2 text-gray-700"
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
