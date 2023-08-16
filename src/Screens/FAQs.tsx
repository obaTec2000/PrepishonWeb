import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import cta from '../assets/Images/cta.svg';

const FAQs = () => {
  return (
    <div className='font-inter'>
      <TopNav />
      <div className='flex flex-col justify-center items-center py-[64px] md:py-[96px]'>
        <p className='font-semibold text-[14px] leading-[20px] md:text-base text-[#00359E] text-center'>
          FAQs
        </p>
        <h1
          className='mt-[12px] mb-[16px] md:mb-[24px] font-semibold text-[#101828] text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] text-center
]'>
          We’re here to help
        </h1>
        <p className='w-[343px] md:w-[768px] px-[16px] font-normal text-[18px] leading-[28px] text-[#475467] text-center'>
          Have questions? We’re here to help.
        </p>
        <button className='justify-center items-center text-center border-2 w-[343px] md:w-[129px] h-[48px] mt-[32px] mx-[24px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg'>
          Get Started
        </button>
      </div>
      <div className='w-full bg-gray-50 '>
        <div className='flex flex-col justify-center mx-auto pt-[48px] md:pt-[64px] md:px-[112px] '>
          <p className='font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center'>
            Frequently asked questions
          </p>
          <h1
            className='h-[56px] md:h-[30px]  font-normal text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-center mt-[16px] md:mt-[20px]
]'>
            Everything you need to know about Pishon.
          </h1>
          <span className='pt-[48px] md:pt-[64px] md:mx-[224px]'>
            <Accordion title='What am I buying?'>
              <p className='font-regular text-base text-[#475467]'>
                When you purchase shares in a Pishon property, you are directly
                buying ownership in the property which is owned by Pishon LLC
                and you are eligible to receive quarterly payouts derived from
                booking income as well as potential property value appreciation.
              </p>
            </Accordion>
            <Accordion title='Who is Pishon for?'>
              <p className='font-regular text-base text-[#475467]'>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </Accordion>
            <Accordion title='Do I need to be involved in any aspect of property management?'>
              <p className='font-regular text-base text-[#475467]'>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </Accordion>
            <Accordion title='How do I start investing?'>
              <p className='font-regular text-base text-[#475467]'>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </Accordion>
          </span>
          <div className='flex flex-col justify-center items-center my-[64px] py-[32px] px-[20px] bg-[#fff] mx-[16px] rounded-[16px]'>
            <img
              src={cta}
              alt=''
            />
            <h1 className='font-semibold text-[#101828] text-[30px] leading-[38px] md:leading-[30px] text-center pt-[24px] md:pt-[32px]'>
              Still have questions?
            </h1>
            <p
              className='h-[56px] md:h-[30px]  font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-center mt-[16px] md:mt-[20px]
]'>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className='justify-center items-center text-center border-2  w-[129px] h-[48px] mt-[32px] mx-[24px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg'>
              Get in touch
            </button>
          </div>
        </div>
        <div className=' my-[64px] md:my-[96px] flex flex-col justify-center items-center px-[16px]'>
          <h1 className='font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center '>
            Sign up for our newsletter
          </h1>
          <p
            className='h-[56px] md:h-[28px] w-[343px] md:w-full font-normal text-[18px] leading-[28px] text-[#475467] text-center mt-[16px] md:mt-[20px]
]'>
            Be the first to know about releases and industry news and insights.
          </p>
          <div className='flex flex-col md:flex-row justify-center items-start mt-[40px] md:mt-[32px] gap-[16px]'>
            <span className='flex flex-col justify-start'>
              <input
                className='w-[343px] h-[48px] text-[#101828] md:w-[360px]  px-[14px] py-[12px] border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] bg-white rounded-lg border-1'
                placeholder='Enter your email'
                type=''></input>
              <p className='text-[#475467] mt-[6px]'>
                We care about your data in our{' '}
                <a
                  className='border-b-2 border-[#475467] text-[#475467]'
                  href='#'>
                  privacy policy
                </a>
                .
              </p>
            </span>
            <button className='justify-center items-center text-center border-2 w-[343px] md:w-[119px] h-[48px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px] rounded-lg'>
              Subscribe
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FAQs;
