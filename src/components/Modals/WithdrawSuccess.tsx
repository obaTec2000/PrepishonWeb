
const Success = ({ onSuccess }: any) => {
  const handleSuccess = () => {
    onSuccess();
  };
  return (
    <div className="min-w-[280px] max-w-[400px] w-full font-inter">
      <div className="flex justify-center items-center">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
          <path
            d="M23.5 28L26.5 31L32.5 25M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
            stroke="#039855"
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
            stroke="#ECFDF3"
            stroke-width="8"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-2 font-semibold text-[18px] leading-[28px] text-[#101828]">
          Withdrawal Successful
        </p>
        <p className="mt-2 font-normal text-[14px] leading-[20px] text-[#475467]">
          Your withdrawal was completed successfully.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-2 justify-center pt-[32px]">
        <button
          className="w-full min-w-[311px] max-w-[352px] lg:w-[170px] px-[18px] py-[10px] bg-[#00359E] text-base font-semibold rounded-lg text-white"
          onClick={handleSuccess}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Success;
