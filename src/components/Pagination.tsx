import React from "react";
import { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  // const [mobilePages, setMobilePages] = useState<number>(currentPage);

  // Calculate the range of visible page numbers
  const calculateVisiblePages = () => {
    const range = [];
    let start = currentPage - 2;
    let end = currentPage + 2;

    if (start < 1) {
      start = 1;
      end = Math.min(5, totalPages);
    }

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, totalPages - 4);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    setVisiblePages(range);
  };
  

  const currentpage = () => {
    if (currentPage === 1) {
      return 1;
    } else if (currentPage === totalPages) {
      return totalPages;
    } else {
      return currentPage;
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    onPageChange(page);
    calculateVisiblePages();
  };

  const handlePageChanges = (currentPage: number) => {
    onPageChange(currentPage);
    currentpage();
  };

  // Generate page number buttons
  const renderPageNumbers = () => {
    return visiblePages.map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`hidden md:flex mx-1 px-3 py-2 rounded-full ${
          page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {page}
      </button>
    ));
  };

  const mainPageNumber = () => {
    return(
      <div
        onClick={() => handlePageChanges(currentPage)}
        className={`md:flex mx-1 px-3 py-2 rounded-full`}
      >
        <div className="flex items-center md:hidden">
          Page {currentPage} of 10
        </div>
      </div>
  )};

  // Previous page button
  const renderPreviousButton = () => {
    return (
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex items-start justify-start mx-1 px-3 py-2 rounded-full bg-gray-200"
      >
        <img src="" alt="" className="" />
        <span>Previous</span>
      </button>
    );
  };

  // Next page button
  const renderNextButton = () => {
    return (
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex items-center justify-center mx-1 px-3 py-2 rounded-full bg-gray-200"
      >
        <img src="" alt="" className="" />
        <span>Next</span>
      </button>
    );
  };

  return (
    <div className="flex justify-between my-4">
      <div className="flex">{renderPreviousButton()}</div>
      <div className="flex md:hidden">{mainPageNumber()}</div>
      <div className="hidden md:flex">{renderPageNumbers()}</div>
      <div className="flex">{renderNextButton()}</div>
    </div>
  );
};

export default Pagination;
