import React, { useState } from "react";
import { products } from "../Mocks/products";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import fire from "../assets/Icons/fire.svg";
import location from "../assets/Icons/location.svg";
import Pagination from "../components/Pagination";

const Properties: React.FC = () => {
 const [currentPage, setCurrentPage] = useState(1);
 const totalPages = 10; // Replace with your total number of pages
 const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data for the new page or update your component state accordingly
  };

  const renderProducts = () => {
    return products.map((product, index) => (
      <div
        key={index}
        className="w-[343px] lg:w-[405px] bg-white rounded-xl shadow-lg pb-[16px] md:px-[16px] md:py-[16px] font-inter border-[1px] border-[#EAECF0]"
      >
        <img src={product.image} alt={product.title} className=" h-auto mb" />
        <span className="disabled={!product.available} relative top-[-30px]">
          {product.available ? (
            <span className="flex w-[81px] py-[2px] pl-[6px] pr-[8px] ml-[8px] border-2 rounded-lg text-[#DC6803] bg-yellow-50 font-medium text-[12px] leading-[18px] text-center ">
              <img src={fire} alt="" className="mr-[4px]" />
              Trending
            </span>
          ) : (
            <span className="py-[2px] pl-[6px] pr-[8px] ml-[8px] border-2 rounded-lg text-[#039855] bg-[#ECFDF3] font-medium text-[12px] leading-[18px] text-center">
              Fully Funded
            </span>
          )}
        </span>
        <div className="px-[16px] md:px-0">
          <p className="font-semibold text-[14px] leading-[20px] text-[#00359E]">
            {product.type}
          </p>
          <p className="font-medium text-[18px] leading-[28px] text-[#101828] mt-[4px]">
            {product.title}
          </p>
          <span className="flex justify-between pr-[10px] mt-[20px]">
            <p className="font-normal text-base ">Offering Amount</p>
            <p className="font-semibold text-[20px] leading-[30px] text[#101828]">
              ${product.amount.toFixed(2)}
            </p>
          </span>
          <span className="flex justify-between pr-[10px] mt-[22px]">
            <p className="font-normal text-base ">Price per Share</p>
            <p className="font-semibold text-[20px] leading-[30px] text[#101828]">
              ${product.percentageOff.toFixed(2)}
            </p>
          </span>
          <p className="flex text-gray-600 mt-[18px]">
            <img className="mr-[11px]" src={location} alt="" />
            {product.location}
          </p>
          <button
            className={` w-full font-bold py-2 px-4 mt-4 rounded-lg cursor-pointer ${
              product.available
                ? "bg-[#00359E] text-white"
                : "bg-white text-[#00359E] border-2 border-[#00359E]"
            }`}
            disabled={!product.available}
          >
            {product.available ? "Invest Now" : "View Property"}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="font-inter">
      <TopNav />
      <div className="flex flex-col justify-center items-center my-[64px] md:my-[96px]">
        <h1 className="font-semibold text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] text-[#101828] text-center">
          Properties
        </h1>
        <h1 className="text-xl font-normal mt-6">{products.length} results</h1>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[32px] container ">
        {renderProducts()}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default Properties;
