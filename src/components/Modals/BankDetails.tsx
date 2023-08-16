import React from "react";
import FormInput from "../forms/FormInput";
import PiCopySimpleBold from "react-icons/pi";

const BankDetails = ({ onSuccess }: any) => {
  const handleSubmit = () => {
    onSuccess();
  };
  return (
    <div className="max-w-[486px] lg:w-[486px] sm:w-[311px] w-[230px] font-inter">
      <div className=" ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="#667085"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1E0FF" />
          <path
            d="M21 25V33M25.5 25V33M30.5 25V33M35 25V33M19 34.6L19 35.4C19 35.9601 19 36.2401 19.109 36.454C19.2049 36.6422 19.3578 36.7952 19.546 36.891C19.7599 37 20.0399 37 20.6 37H35.4C35.9601 37 36.2401 37 36.454 36.891C36.6422 36.7952 36.7951 36.6422 36.891 36.454C37 36.2401 37 35.9601 37 35.4V34.6C37 34.04 37 33.7599 36.891 33.546C36.7951 33.3579 36.6422 33.2049 36.454 33.109C36.2401 33 35.9601 33 35.4 33H20.6C20.0399 33 19.7599 33 19.546 33.109C19.3578 33.2049 19.2049 33.3579 19.109 33.546C19 33.7599 19 34.04 19 34.6ZM27.6529 19.0772L20.2529 20.7216C19.8059 20.8209 19.5823 20.8706 19.4155 20.9908C19.2683 21.0969 19.1527 21.2409 19.0811 21.4076C19 21.5965 19 21.8255 19 22.2835L19 23.4C19 23.9601 19 24.2401 19.109 24.454C19.2049 24.6422 19.3578 24.7952 19.546 24.891C19.7599 25 20.0399 25 20.6 25H35.4C35.9601 25 36.2401 25 36.454 24.891C36.6422 24.7952 36.7951 24.6422 36.891 24.454C37 24.2401 37 23.9601 37 23.4V22.2835C37 21.8255 37 21.5965 36.9188 21.4076C36.8473 21.2409 36.7317 21.0969 36.5845 20.9908C36.4177 20.8706 36.1942 20.8209 35.7471 20.7216L28.3471 19.0772C28.2176 19.0484 28.1528 19.034 28.0874 19.0282C28.0292 19.0231 27.9708 19.0231 27.9126 19.0282C27.8472 19.034 27.7824 19.0484 27.6529 19.0772Z"
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
        </svg>{" "}
        <p className="text-[#101828] font-semibold text-[18px] leading-[28px]">
          Naira Account Details
        </p>
        <p className="text-[#475467] font-semibold text-[14px] leading-[20px]">
          Fund your Pishon Wallet by making a direct transfer from any bank.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <FormInput
          label="Account Number"
          placeholder="0123456789"
          type="number"
          //   svg={<PiCopySimpleBold /> }
        />{" "}
        <FormInput label="Account Name" placeholder="Pishon Inc" type="text" />
        <FormInput label="Bank Name" placeholder="Bank Name" type="number" />
      </div>
      <div className="flex flex-col-reverse lg:flex-col gap-2 justify-center pt-[32px] w-full">
        <button
          className="min-w-[170px] w-full h-[44px] px-4 py-2 mr-2 bg-[#00359E] text-[#fff] border-[#D0D5DD] border-[1px] rounded-lg  text-base font-semibold"
          onClick={handleSubmit}>
          Payment Made
        </button>
      </div>
    </div>
  );
};

export default BankDetails;
