import { useEffect } from "react";

const Pagination = ({ setPage, numPages, currentPage }) => {
    return (
        <div className="flex justify-center items-center mt-10">
            <button
                className=" p-2 "
                onClick={() => setPage((prevState) => prevState - 1)}
                disabled={currentPage === 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" h-4 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <ul className="flex flex-wrap items-center mt-10">
                {[...Array(numPages)].map((el, index) => {
                    return (
                        <li
                            className={`p-2 hover:cursor-pointer ${
                                currentPage === index + 1 &&
                                "text-zinc-500 border-b-2 border-zinc-500 "
                            }`}
                            key={"page" + index}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </li>
                    );
                })}
            </ul>
            <button
                className="p-2"
                onClick={() => setPage((prevState) => prevState + 1)}
                disabled={currentPage === numPages}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
