import React from "react";

export default function LoadingCountry() {
  return (
    <div className="container py-14 animate-pulse">
      <div className="shadow-md h-[37px] w-[100px]"></div>
      <article className="py-14 mt-5 flex gap-x-20 flex-wrap">
        <section>
          <div className="w-[500px] h-[300px] bg-gray-300 grid place-content-center">
            <svg
              className="fill-current text-gray-400 w-40 h-40"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
              <path d="m10 14-1-1-3 4h12l-5-7z"></path>
            </svg>
          </div>
        </section>
        <section className="">
          <p className="h-10 w-32 bg-gray-300 mb-4"></p>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-3">
              <p className="h-[20px] w-[200px]  bg-gray-300"></p>
              <p className="h-[20px] w-[200px] bg-gray-300"></p>
              <p className="h-[20px] w-[200px] bg-gray-300"></p>
              <p className="h-[20px] w-[200px] bg-gray-300"></p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="h-[20px] w-[200px] bg-gray-300"></p>
              <p className="h-[20px] w-[200px] bg-gray-300"></p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
