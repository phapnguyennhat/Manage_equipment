import React from "react";

const Loader = () => {
  return (
    <div
      className={`fixed left-0 top-0 flex h-[100%] w-[100%] items-center justify-center bg-modal`}
    >
      <div
        className="h-10 w-10 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
