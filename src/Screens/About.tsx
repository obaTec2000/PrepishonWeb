import { useState } from 'react';

import image from '../assets/Images/Image (1).svg';
import flutterwave from '../assets/Images/Flutterwave Logo-2 1.svg';
import paystack from '../assets/Images/Group 1.svg';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import arrowdown from '../assets/Icons/arrowdown.svg';

const About = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHiddenContent = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <TopNav />
      <div className='flex flex-col justify-center items-center w-full pt-[64px] md:py-[96px] font-inter px-[16px]'>
        <p className='font-semibold text-[14px] leading-[20px] md:text-base text-[#00359E] text-center'>
          About us
        </p>
        <h1
          className='w-[343px] md:w-[960px] mt-[12px] mb-[16px] md:mb-[24px] font-semibold text-[#101828] text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] text-center
]'>
          We are on a mission to make real estate investing affordable for
          everyone.
        </h1>
        <p className='w-[343px] md:w-[768px] font-normal text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-center'>
          For a long time now only the 1% can invest in prime real estate. Now
          with Pishon everyone can have a piece of the pie. We’re making
          property ownership inclusive for the first time ever. Join us on this
          quest and make your dream come true.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center w-full px-[16px] md:pb-[96px]'>
        <img
          className='h-[240px] md:h-[400px]'
          src={image}
          alt=''
        />
      </div>
      <div className='flex flex-col items-center w-full py-[64px] md:py-[96px] px-[16px] md:px-[112px] h-[344.41px] md:h-[388px] bg-[#F9FAFB] mt-[64px]'>
        <h3
          className='w-[343px] md:w-[960px] mb-[16px] md:mb-[24px] font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center
]'>
          Our Partners
        </h3>
        <p className='w-[343px] md:w-full font-medium text-base text-[#475467] text-center'>
          These are the organisations we’ve worked with to lower the barriers of
          real estate investing for people in Africa
        </p>
        <div className='flex flex-row mt-[32px] md:mt-[38px] gap-[19px] md:gap-[32px]'>
          <img
            className='w-[150px] md:w-[180px]'
            src={flutterwave}
            alt=''
          />
          <img
            className='w-[181px] md:w-[221px]'
            src={paystack}
            alt=''
          />
        </div>
      </div>
      <div className='flex flex-col justify-start w-full my-[64px] md:py-[96px] px-[16px] md:px-[112px] h-[344.41px] md:h-[388px] bg-[#FFF]'>
        <span className=''>
          <p className='font-semibold text-[14px] leading-[20px] md:text-base text-[#00359E]'>
            Our Vision
          </p>
          <h1
            className='w-[343px] md:w-[560px] mt-[12px] font-semibold text-[#101828] text-[30px] md:text-[36px] leading-[38px] md:leading-[44px]
]'>
            We’re just getting started
          </h1>
          <p className='pt-[16px] md:pt-[64px] font-normal text-[18px] leading-[28px]'>
            To greatly improve the quality of life of Pishon investors. We are
            on a mission to help our users achieve financial freedom. With the
            strategy of compound interest, a Pishon user can attain financial
            independence, enjoy a good quality of life, and have control over
            their time.
            <br /> <br /> We <strong>VALUE</strong> transparency, honesty, and
            good work ethic.
          </p>
        </span>
      </div>
      <div className='flex flex-col items-center font-semibold text-[14px] leading-[20px] md:text-base text-[#00359E] text-center h-[462px] md:h-[390px] px-[16px] md:px-[112px]'>
        <h1
          className='font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center
]'>
          Open positions
        </h1>
        <p className='h-[112px] md:h-[60px] md:w-[768px]  font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467]  mt-[16px] md:mt-[20px] text-center'>
          Want to work with some of the best global talent and build software
          used by all the companies you know and love? Join the team — we’re
          hiring!
        </p>
        <div className='flex flex-col md:flex-row py-[48px] md:py-[64px]'>
          <button
            className='flex items-center justify-start md:justify-center font-inter px-[14px] py-[10px] md:px-0 md:py-0 md:bg-[#EFF4FF] border-2 rounded-lg bg-[#FFF] md:text-[#00359E] text-[#101828] w-[343px] h-[44px] md:w-[89px] '
            onClick={toggleHiddenContent}>
            View all
            <img
              className='ml-[240px] md:hidden'
              src={arrowdown}
            />
          </button>
          {!isHidden && (
            <div className='flex flex-col md:flex-row justify-center items-center '>
              <p className='text-center md:ml-[36px] mt-[20px] md:mt-0 text-[#667085] text-[16px] font-semibold leading-[24px]'>
                Design
              </p>
              <p className='text-center md:ml-[36px] mt-[20px] md:mt-0 text-[#667085] text-[16px] font-semibold leading-[24px]'>
                Software Engineering
              </p>
              <p className='text-center md:ml-[36px] mt-[20px] md:mt-0 text-[#667085] text-[16px] font-semibold leading-[24px]'>
                Customer Success
              </p>
              <p className='text-center md:ml-[36px] mt-[20px] md:mt-0 text-[#667085] text-[16px] font-semibold leading-[24px]'>
                Sales
              </p>
              <p className='text-center md:ml-[36px] mt-[20px] md:mt-0 text-[#667085] text-[16px] font-semibold leading-[24px]'>
                Marketing
              </p>
            </div>
          )}
        </div>
      </div>
      <p className='text-center font-normal text-[20px] text-[#667085] leading-[30px]'>
        {' '}
        No open positions for now!!!{' '}
      </p>
      <div className=' flex flex-col justify-center items-center h-[270px] md:w-[1,216px] md:h-[302px]  my-[64px] py-[40px] md:py-[64px] bg-[#F9FAFB] mx-[16px] md:mx-[112px]'>
        <p className='font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center'>
          Start your journey to financial freedom
        </p>
        <h1
          className='h-[56px] md:h-[30px]  font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-center mt-[16px] md:mt-[20px]
]'>
          Join our pool of users building wealth with Pishon.
        </h1>
        <button className='justify-center items-center text-center border-2 w-[295px] md:w-[129px] h-[48px] mt-[32px] mx-[24px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg'>
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
