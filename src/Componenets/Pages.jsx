import React, { useState } from "react";

const Pages = ({pageChange}) => {
  const [page, setPage] = useState(1);
  const handleOnclick = (e) => {
    let currPage = Number(e.target.textContent);
    console.log(currPage)
    if (currPage <= 98) setPage(currPage);
    else setPage(98);
    pageChange(currPage)
  };
  return (
    <div className="flex justify-center items-center gap-2 m-5">
      {page >= 2 && (
        <button
          onClick={handleOnclick}
          className="h-5 min-w-5 bg-slate-700 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center px-2"
        >
          1
        </button>
      )}
      {page >= 2 && (
        <div className="h-5 min-w-5 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center mx-[-0.3rem]">
          .....
        </div>
      )}

      <button
        onClick={handleOnclick}
        className="h-5 min-w-5 bg-slate-700 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center px-2"
      >
        {page}
      </button>
      <button
        onClick={handleOnclick}
        className="h-5 min-w-5 bg-slate-700 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center px-2"
      >
        {page + 1}
      </button>
      <button
        onClick={handleOnclick}
        className="h-5 min-w-5 bg-slate-700 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center px-2"
      >
        {page + 2}
      </button>
      {page < 97 && (
        <div className="h-5 min-w-5 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center mx-[-0.3rem]">
          .....
        </div>
      )}
      {page < 98 && (
        <button
          onClick={handleOnclick}
          className="h-5 min-w-5 bg-slate-700 text-gray-300 rounded-sm text-center text-xl font-medium flex justify-center items-center px-2"
        >
          100
        </button>
      )}
    </div>
  );
};

export default Pages;
