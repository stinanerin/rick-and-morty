const Pagination = ({ setPage, numPages, currentPage }) => {
    // console.log("currentPage", currentPage);

    // Max num of visible pages
    const maxVisiblePages = 5;

    // Calculate half of the maxVisiblePages
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    // console.log("halfMaxVisiblePages", halfMaxVisiblePages);

    // Calculate the starting page number for the visible range - in the middle of the visisble range
    let startPage = currentPage - halfMaxVisiblePages;
    // Ensure the startPage is never less than 1
    if (startPage < 1) {
        startPage = 1;
    }
    // console.log("startPage", startPage);
    let endPage = startPage + maxVisiblePages - 1;
    // console.log("endPage", endPage);

    if (endPage > numPages) {
        endPage = numPages;
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const pageNumbers = [];
    // Loop through the range of page numbers within the visible range
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    // console.log("pageNumbers to display", pageNumbers);

    return (
        <div className=" flex justify-center  mt-10">
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
            <ul className="flex flex-wrap items-center ">
                {/* Display the first page if not on the first page */}

                {startPage > 1 && (
                    <>
                        <li
                            className="p-2 hover:cursor-pointer"
                            key="pageStart"
                            onClick={() => setPage(1)}
                        >
                            1
                        </li>

                        {/*  If there are more than two pages between the first page and 
                            the start of the visible range, display ... */}
                        {startPage > 2 && <li className="p-2">...</li>}
                    </>
                )}
                {pageNumbers.map((pageNumber) => (
                    <li
                        className={`p-2 hover:cursor-pointer ${
                            currentPage === pageNumber &&
                            "text-zinc-500 border-b-2 border-zinc-500"
                        }`}
                        key={"page" + pageNumber}
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                ))}
                {/* If there are more pages after the visible range, display an ellipsis.
                 */}
                {endPage < numPages && (
                    <>
                        {endPage < numPages - 1 && <li className="p-2">...</li>}
                        <li
                            className="p-2 hover:cursor-pointer"
                            key="pageEnd"
                            onClick={() => setPage(numPages)}
                        >
                            {numPages}
                        </li>
                    </>
                )}
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
