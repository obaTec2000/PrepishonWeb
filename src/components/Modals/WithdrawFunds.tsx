import React from "react";

const WithdrawFunds = ({ onSavedPay, onNewPay }: any) => {
  const handleSavedPayment = () => {
    onSavedPay();
  };
  const handleNewPayment = () => {
    onNewPay();
  };
  return (
    <div className="font-inter">
      <div className="flex flex-col justify-center items-center">
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
        <p className="mt-3 text-[18px] leading-[28px] font-semibold text-[#101828]">
          Withdraw Funds
        </p>
      </div>
      <div className="flex flex-col justify-start items-start mt-5 max-w-[432px] lg:w-[486px] sm:w-[311px] w-[230px]">
        <button
          className="flex justify-start items-start flex-row w-full h-[100px] lg:h-[94px] p-4 border-2 rounded-xl"
          onClick={handleSavedPayment}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.3334 27.9997V26.3997C21.3334 24.1595 21.3334 23.0394 20.8974 22.1837C20.5139 21.4311 19.902 20.8191 19.1494 20.4356C18.2937 19.9997 17.1736 19.9997 14.9334 19.9997H9.06675C6.82654 19.9997 5.70643 19.9997 4.85079 20.4356C4.09814 20.8191 3.48622 21.4311 3.10272 22.1837C2.66675 23.0394 2.66675 24.1595 2.66675 26.3997V27.9997M16.6667 9.99967C16.6667 12.577 14.5774 14.6663 12.0001 14.6663C9.42275 14.6663 7.33341 12.577 7.33341 9.99967C7.33341 7.42235 9.42275 5.33301 12.0001 5.33301C14.5774 5.33301 16.6667 7.42235 16.6667 9.99967Z"
              stroke="#00359E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 10.6663C20 12.1391 21.1939 13.333 22.6667 13.333H25.3333C26.8061 13.333 28 12.1391 28 10.6663C28 9.19358 26.8061 7.99967 25.3333 7.99967H22.6667C21.1939 7.99967 20 6.80577 20 5.33301C20 3.86025 21.1939 2.66634 22.6667 2.66634H25.3333C26.8061 2.66634 28 3.86025 28 5.33301M24 1.33301V14.6663"
              stroke="#00359E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex flex-col items-start justify-start max-w-[215px] lg:max-w-[344px] mx-1">
            <p className="flex justify-start items-start w-full lg:w-full h-[20px]">
              Send to Saved Beneficiary
            </p>
            <p className="flex justify-start w-full lg:w-full h-[40px]">
              To make a withdrawal, choose one of your saved beneficiaries
            </p>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12L10 8L6 4"
              stroke="#00359E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          className="flex justify-start items-start flex-row w-full h-[100px] lg:h-[94px] p-4 border-2 mt-[12px] rounded-xl"
          onClick={handleNewPayment}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_108_120475)">
              <path
                d="M16.0001 20.6667H10.0001C8.13933 20.6667 7.20895 20.6667 6.45189 20.8963C4.74735 21.4134 3.41347 22.7473 2.8964 24.4518C2.66675 25.2089 2.66675 26.1393 2.66675 28M25.3334 28V20M21.3334 24H29.3334M19.3334 10C19.3334 13.3137 16.6471 16 13.3334 16C10.0197 16 7.33341 13.3137 7.33341 10C7.33341 6.68629 10.0197 4 13.3334 4C16.6471 4 19.3334 6.68629 19.3334 10Z"
                stroke="#00359E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.6667 10.6663C22.6667 12.1391 23.8607 13.333 25.3334 13.333H28.0001C29.4728 13.333 30.6667 12.1391 30.6667 10.6663C30.6667 9.19358 29.4728 7.99967 28.0001 7.99967H25.3334C23.8607 7.99967 22.6667 6.80577 22.6667 5.33301C22.6667 3.86025 23.8607 2.66634 25.3334 2.66634H28.0001C29.4728 2.66634 30.6667 3.86025 30.6667 5.33301M26.6667 1.33301V14.6663"
                stroke="#00359E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_108_120475">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col items-start justify-start max-w-[215px] lg:max-w-[344px] mx-1">
            <p className="flex justify-start w-full lg:w-full h-[20px]">
              Send to Saved Beneficiary
            </p>
            <p className="flex justify-start w-full lg:w-full h-[40px]">
              To make a withdrawal, choose one of your saved beneficiaries
            </p>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12L10 8L6 4"
              stroke="#00359E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WithdrawFunds;
