import React from "react";
import FormInput from "../forms/FormInput";

const SendToNewRecipient = ({ onLogout, onCancel }: any) => {
  const handleLogout = () => {
    onLogout();
  };

  const handleCancel = () => {
    onCancel();
  };

  type options = {
    text: string;
    label: string;
  };

  const options = [
    { value: "Jane", label: "Jane" },
    { value: "Jane", label: "Jane" },
    { value: "Jane", label: "Jane" },
    { value: "Jane", label: "Jane" },
  ];
  return (
    <div className="max-w-[486px] lg:w-[486px] sm:w-[311px] w-[230px]">
      <div className="flex flex-col justify-center items-center mb-[16px]">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1E0FF" />
          <path
            d="M20 36V34.6C20 31.2397 20 29.5595 20.654 28.2761C21.2292 27.1471 22.1471 26.2292 23.2761 25.654C24.5595 25 26.2397 25 29.6 25H36M36 25L31 30M36 25L31 20"
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
        <p className="text-[#101828] font-semibold text-[18px] leading-[28px]">
          Send to Saved Beneficiary
        </p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <FormInput
          label="Amount to Withdraw"
          placeholder="₦0.00"
          type="number"
        />
        <span className="flex flex-col justify-start items-start w-full">
          <FormInput
            label="Amount you’ll Receive"
            placeholder="₦0.00"
            type="number"
          />
          <p className="hidden">Fee: ₦35.00</p>
        </span>
        <FormInput
          label="Account Number"
          placeholder="Enter bank account number"
          type="number"
        />
        <p className="mt-4">Bank</p>
        <select
          placeholder="Select bank to transfer to"
          className="w-full lg:h-[44px] px-[16px] py-[10px] rounded-lg border-[1px] border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] mt-2 cursor-pointer"
          //   options={options}
          //   defaultValue={value}
          //   isSearchable
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <FormInput
          label="Description (Optional)"
          placeholder="Enter your text here"
          type="number"
        />
        <div className="flex flex-col mt-4">
          <div className="flex">
            <input className=" h-[16px] w-[16px]" type="checkbox" name="" />
            <p className="ml-2 font-inter font-medium text-[14px] leading-[20px] text-[#344054]">
              Save as new recipient
            </p>
          </div>
          <div className="flex">
            <input className="h-[16px] w-[16px]" type="checkbox" name="" />
            <p className="ml-2 font-inter font-medium text-[14px] leading-[20px] text-[#344054]">
              I confirm to be debited ₦0.00 to send
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-col gap-2 justify-center pt-[32px] w-full">
        <button
          className="min-w-[170px] w-full px-4 py-2 mr-2 bg-[#fff] border-[#D0D5DD] border-[1px] rounded-lg text-[#344054] text-base font-semibold "
          onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="min-w-[170px] w-full px-4 py-2 mr-2 bg-[#00359E] text-[#fff] border-[#D0D5DD] border-[1px] rounded-lg  text-base font-semibold"
          onClick={handleLogout}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SendToNewRecipient;
