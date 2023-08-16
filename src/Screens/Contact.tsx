import email from '../assets/Icons/email.svg'
import phone from '../assets/Icons/phone.svg';
import image from '../assets/Images/Image.svg';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='flex flex-col'>
      <TopNav />
      <div className='flex flex-col justify-center items-center w-full py-[64px] md:py-[96px] font-inter'>
        <p className='font-semibold text-[14px] leading-[20px] md:text-base text-[#00359E] text-center'>
          Contact us
        </p>
        <h1
          className='mt-[12px] mb-[16px] md:mb-[24px] font-semibold text-[#101828] text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] text-center
]'>
          Get in touch
        </h1>
        <p className='w-[343px] md:w-[768px] px-[16px] font-normal text-[18px] leading-[28px] text-[#475467] break-all text-center'>
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center w-full font-inter mx-[16px]'>
">
        <div className='flex flex-col md:flex-row pt-3 justify-between'>
          <div>
            <p className='font-medium text-[14px] leading-[20px] text-[#344054]'>
              First name
            </p>
            <input
              placeholder='First name'
              className='w-[343px] h-[44px] text-[#101828] md:w-[224px]  px-[14px] py-[10px] border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] mt-[6px]  bg-white rounded-lg border-1'></input>
          </div>
          <div className='md:ml-[32px]'>
            <p className='font-medium text-[14px] leading-[20px] text-[#344054] mt-6 md:mt-0'>
              Last name
            </p>
            <input
              placeholder='Last name'
              className='w-[343px] h-[44px] text-[#101828] md:w-[224px] border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583]   mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          </div>
        </div>
        <div className='grid grid-flow-row'>
          <span>
            <p className='pt-5 text-[#344054] font-inter font-medium text-[14px] leading-[20px]'>
              Email
            </p>
            <input
              placeholder='you@company.com'
              className='border-2 text-[#101828] border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[343px] md:w-[480px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          </span>
          <span>
            <p className='pt-5  text-[#344054] font-medium text-[14px] leading-[20px]'>
              Phone number
            </p>
            <input
              placeholder='Enter your phone number'
              className='border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[343px] md:w-[480px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          </span>
          <div className='font-inter'>
            <label
              htmlFor='message'
              className='flex flex-col pt-5 text-[#344054] font-medium text-[14px] leading-[20px]'>
              Message
            </label>
            <textarea
              placeholder='Please leave us a message'
              id='message'
              //   value={message}
              //   onChange={(e) => setMessage(e.target.value)}
              className='border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[343px] md:w-[480px] h-[114px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg'
              required
            />
          </div>
        </div>
        <div className='flex flex-row flex-start items-center font-inter font-normal w-[343px] md:w-[480px] mt-[24px] '>
          <input
            className='flex flex-start h-[20px] w-[20px] pt-[2px]'
            type='checkbox'
            name=''
          />
          <p className='h-[24px] text-base text-[#344054] ml-[12px]'>
            You agree to our friendly <a href=''>privacy policy.</a>
          </p>
        </div>
        <div className='grid grid-flow-row mt-[32px]'>
          <a href=''>
            <button className='border-2 w-[343px] md:w-[480px] h-[48px] py-[12px] bg-[#00359E] font-semibold text-base text-[#FFFFFF]  rounded-lg  '>
              Send message
            </button>
          </a>
        </div>
        <div className='w-full py-[64px] md:py-[96px]   md:h-[480px] bg-[#F9FAFB] mt-[64px]'>
          <div className='container flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col md:flex-[0.56] items-start w-full font-inter'>
              <p className='font-semibold text-[16px] leading-[24px] text-[#00359E]'>
                Contact us
              </p>
              <h1
                className='w-[343px] md:w-[560px] mt-[12px] font-semibold text-[#101828] text-[30px] md:text-[36px] leading-[38px] md:leading-[44px]
]'>
                Chat to our friendly team
              </h1>
              <p className='w-[343px] md:w-[560px] mt-[16px] md:mt-[20px] font-normal text-[18px] md:text-[20px] md:leading-[30px] leading-[28px] text-[#475467]'>
                We’d love to hear from you! Please get in touch.
              </p>
            </div>
            <div className='flex flex-col lg:flex-row py-[48px] md:py-0'>
              <span className='flex flex-row'>
                <img
                  className='w-[22px] h-[17.6px] mt-1 mr-[17px]'
                  src={email}
                  alt='email'></img>
                <span className='flex flex-col'>
                  <p>Email</p>
                  <p>contact@pishon.org</p>
                </span>
              </span>
              <span className='flex flex-row mt-[48px]'>
                <img
                  className='w-[22px] h-[17.6px] mt-1 mr-[17px]'
                  src={phone}
                  alt='phone'></img>
                <span className='flex flex-col'>
                  <p>Phone</p>
                  <p>09064937783</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-[-48px] md:mt-[-64px]'>
        <img
          className='w-full'
          src={image}
          alt=''
        />
      </div>
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
      <Footer />{' '}
    </div>
  );
};

export default Contact;
