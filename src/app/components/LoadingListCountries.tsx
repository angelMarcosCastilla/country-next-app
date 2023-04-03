import styles from "@/app/page.module.css";

export default function LoadingListCountries() {
  return (
    <section className="container pt-5">
      <div role="loading" className="mb-8 flex justify-between items-center">
        <div className="border animate-pulse rounded-md w-[350px] h-10 bg-gray-300"></div>
        <div className="min-w-[200px] animate-pulse h-10 rounded-md bg-gray-300"></div>
      </div>
      <div role="loading countries list" className={styles.gridCounter}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="animate-pulse h-[298px] bg-white">
            <div className="h-[150px] bg-gray-300 grid place-content-center">
              <svg
                className="fill-current text-gray-400 w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
                <path d="m10 14-1-1-3 4h12l-5-7z"></path>
              </svg>
            </div>
            <div className="flex flex-col pl-3">
              <div className="h-4 my-4 bg-gray-300 rounded-full  w-32"></div>
              <div className="h-2.5 my-1.5 bg-gray-300 rounded-full  w-24"></div>
              <div className="h-2.5 my-1.5 bg-gray-300 rounded-full  w-24"></div>
              <div className="h-2.5 my-1.5 bg-gray-300 rounded-full  w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
