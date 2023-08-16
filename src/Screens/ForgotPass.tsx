import Featured from '../assets/Icons/Featured.svg';

const ForgotPass = () => {
  return (
    <div className='grid grid-flow-col w-full h-screen py-24 bg-white justify-center font-inter text-sm '>
      <div>
        <span className='flex justify-center text-center '>
          <img
            className='w-[56px] h-[56px]'
            src={Featured}
            alt='Pishon logo'
          />
        </span>
        <div className='flex  flex-col justify-center text-center pt-6'>
          <h1
            className='w-[360px] h-[32px] font-inter font-semibold text-[#101828] text-[24px] leading-[32px] md:h-[38px] md:text-[30px] md:leading-[38px];
]'>
            Forgot password?
          </h1>
          <span className='my-3'>
            <p className='w-[360px] h-[24px] font-normal font-inter text-base text-[#475467] '>
              No worries, we’ll send you reset instructions.
            </p>
          </span>
        </div>
        <span>
          <p className='flex flex-start pt-5 text-[#344054] font-inter font-medium text-[14px] leading-[20px]'>
            Email
          </p>
          <input
            placeholder='Enter your email'
            className='border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] invalid:border-pink-500 invalid:text-pink-600 w-[360px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          <p className=''></p>
        </span>
        <div className='grid grid-flow-row'>
          <a href='CheckMail'>
            <button className='justify-center border-2 w-full h-[44px] mt-[24px] px-[118px] py-[10px] bg-[#00359E] font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg  '>
              <p className='w-[124px] h-[24px]'>Reset password</p>
            </button>
          </a>
        </div>
        <span className='flex justify-center'>
          <a
            href='LoginPage'
            className='flex justify-center mt-[32px]'>
            <svg
              className='mt-[3px] mr-[12.17px]'
              width='11.67'
              height='11.67'
              viewBox='0 0 15 11.67'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M13.3334 7H1.66675M1.66675 7L7.50008 12.8333M1.66675 7L7.50008 1.16667'
                stroke='#475467'
                stroke-width='1.66667'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p className='font-inter font-semibold text-[14px] leading-[20px] text-[#475467]'>
              Back to log in
            </p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ForgotPass;
