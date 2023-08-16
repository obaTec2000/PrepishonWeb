import mail from '../assets/Icons/mail.svg';

const CheckMail = () => {
  return (
    <div className='grid grid-flow-col w-full h-screen py-24 bg-white justify-center font-inter text-sm'>
      <div>
        <span className='flex justify-center text-center '>
          <img
            className='w-[56px] h-[56px]'
            src={mail}
            alt='Pishon logo'
          />
        </span>
        <div className='flex  flex-col justify-center text-center pt-6'>
          <h1
            className='w-[343px] md:w-[360] h-[32px] font-inter font-semibold text-[#101828] text-[24px] leading-[32px] md:h-[38px] md:text-[30px] md:leading-[38px];
]'>
            Check your email
          </h1>
          <span className='mt-[8px]'>
            <p className='w-[343px] md:w-[360] h-[48px] font-medium font-inter text-base text-[#475467]'>
              We sent a password reset link to johndoe@gmail.com
            </p>
          </span>
        </div>
        <span></span>
        <div className='grid grid-flow-row'>
          <a href=''>
            <button className='justify-center border-2 w-full h-[44px] mt-[32px] px-[118px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg  '>
              <p className='w-[121px] h-[24px]'>Open email app</p>
            </button>
          </a>
        </div>
        <span className='flex justify-center mt-[32px]'>
          <p className='font-inter font-normal text-[14px] text-[#475467] leading-[20px]'>
            Didn’t receive the email?
          </p>
          <a
            href=''
            className='ml-[4px] text-[#00359E] font-inter font-semibold text-[14px] leading-[20px]'>
            Click to resend
          </a>
        </span>
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

export default CheckMail;
