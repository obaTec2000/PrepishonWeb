import React from "react";

const FundWllet = ({ onProceed, onCancel }: any) => {
  const handleProceed = () => {
    onProceed();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-[16px]">
        <svg
          className=""
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1E0FF" />
          <path
            d="M32.5 30H32.51M19 21V35C19 36.1046 19.8954 37 21 37H35C36.1046 37 37 36.1046 37 35V25C37 23.8954 36.1046 23 35 23L21 23C19.8954 23 19 22.1046 19 21ZM19 21C19 19.8954 19.8954 19 21 19H33M33 30C33 30.2761 32.7761 30.5 32.5 30.5C32.2239 30.5 32 30.2761 32 30C32 29.7239 32.2239 29.5 32.5 29.5C32.7761 29.5 33 29.7239 33 30Z"
            stroke="#00359E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="4"
            y="4"
            width="48"
            height="48"
            rx="24"
            stroke="#EFF4FF"
            stroke-width="8"
          />
        </svg>
      </div>
      <p className="text-[#101828] font-semibold text-[18px] leading-[28px]">
        Fund Wallet
      </p>
      <div className="flex flex-col justify-start items-start">
        <p className="mt-5">Enter amount</p>
        <input
          placeholder="Enter amount"
          className="lg:w-[352px] lg:h-[44] px-[14px] py-[10px] rounded-lg border-[1px] border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] mt-2 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="number"
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-2 justify-center pt-[32px]">
        <button
          className="min-w-[170px] w-[311px] lg:w-[170px] px-4 py-2 mr-2 bg-[#fff] border-[#D0D5DD] border-[1px] rounded-lg text-[#344054] text-base font-semibold "
          onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="w-full min-w-[170px] max-w-[311px] lg:w-[170px] px-[18px] py-[10px] bg-[#00359E] rounded-lg text-white text-base font-semibold"
          onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default FundWllet;
