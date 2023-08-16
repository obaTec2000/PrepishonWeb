// App.tsx

import React, { useState } from "react";
import Grid from "../components/DashboardGrid";
import Transactions from "../components/Transactions";
import flag from "../assets/Icons/Group.svg";
import arrowUp from "../assets/Icons/arrowUp.svg";
import Modals from "../components/Modals";

const amounts = [
  {
    currency: flag,
    price: 40 + `,` + 206.2,
    icon: arrowUp,
    increase: 12,
    txt: "last month",
  },
];

const Dashboard: React.FC = () => {
  // const [filter, setFilter] = useState("all");

  // const filteredGrid =
  //   filter === "all"
  //     ? Grid
  //     : Grid.filter(
  //         (grid) =>
  //           grid.status.toLowerCase() === filter.toLowerCase()
  //       );

  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled(!enabled);
  };
  const [open, setOpen]=useState(false);

  return (
    <>
      {/* <Sidebar /> */}
      <div className="font-inter bg-[#FCFCFD] p-4 md:p-8 lg:p-12 ">
        <div className="flex flex-col  ">
          <div className=" font-inter p-4 lg:p-8">
            <h1 className="text-[24px] md:text-[30px] text-[#101828] font-semibold leading-[32px] md:leading-[38px]">
              Home
            </h1>
            <p className="font-normal text-base text-[#475467]">
              Keep track of your investments and portfolio.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-8">
            {" "}
            <div className="">
              <p className="font-normal text-base text-[#475467]">
                Your balance
              </p>
              <div className="mt-1">
                {amounts.map((amount, index) => (
                  <div key={index} className="flex justify-start items-center">
                    <div className="">
                      <img src={amount.currency} alt="" />
                    </div>
                    <p className="font-inter font-semibold leading-[44px] text-[24px] md:text-[36px] mx-[12px] text-[#101828]">
                      ${amount.price}
                    </p>
                    <img className="w-5 h-5" src={amount.icon} alt="" />
                    <p className="font-medium text-[14px] leading-5 mr-2 text-[#027A48] ">
                      {amount.increase}%
                    </p>
                    <p className="font-medium text-[14px] leading-5 text-[#475467]">
                      vs {amount.txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex mb-4 font-semibold text-[14px] leading-5 text-[#1D2939]">
              <button
                className="px-4 py-[10px] border-y-2 border-l-2 border-[#D0D5DD] rounded-l-lg bg-[#F9FAFB]  "
                // className={`mr-4 ${filter === "all" ? "font-semibold" : ""}`}
                // onClick={() => setFilter("all")}
              >
                Personal
              </button>
              <button
                className="px-4 py-[10px] border-2 border-[#D0D5DD] rounded-r-lg"
                // className={`mr-4 ${
                //   filter === "deposit" ? "font-semibold" : ""
                // }`}
                // onClick={() => setFilter("deposit")}
              >
                Institution
              </button>
            </div>
            <div className="flex lg:hidden mt-6 mb-8 font-semibold text-[14px] leading-5 text-[#1D2939]">
              <button
                className="px-4 py-[10px] border-y-2 border-l-2 border-[#D0D5DD] rounded-l-lg bg-[#F9FAFB]"
                // className={`mr-4 ${filter === "all" ? "font-semibold" : ""}`}
                // onClick={() => setFilter("all")}
              >
                Personal
              </button>
              <button
                className="px-4 py-[10px] border-2 border-[#D0D5DD]"
                // className={`mr-4 ${
                //   filter === "deposit" ? "font-semibold" : ""
                // }`}
                // onClick={() => setFilter("deposit")}
              >
                Business
              </button>
              <button
                className="px-4 py-[10px] border-y-2 border-r-2 border-[#D0D5DD] rounded-r-lg"
                // className={`mr-4 ${
                //   filter === "purchased" ? "font-semibold" : ""
                // }`}
                // onClick={() => setFilter("purchased")}
              >
                Credit
              </button>
            </div>
          </div>
          <Grid />
          <div className="flex px-4 lg:px-8 mt-6 lg:mt-4 mb-4">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={enabled}
                  onChange={handleToggle}
                />
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner "></div>
                <div
                  className={`toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0 ${
                    enabled ? "translate-x-6" : "translate-x-0"
                  } transition-transform duration-300`}
                ></div>
              </div>
              <span className="ml-3 text-gray-700">
                {enabled ? "Enabled" : "Disabled"}
              </span>
            </label>
          </div>
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
