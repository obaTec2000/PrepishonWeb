import play from "../assets/Icons/play.svg";
import home_img_2 from "../assets/Images/home_img_2.png";
import home_img_3 from "../assets/Images/home_img_3.png";
import home_img_4 from "../assets/Images/home_img_4.png";
import home_img_5 from "../assets/Images/home_img_5.png";
import home_img_6 from "../assets/Images/home_img_6.svg";
import home_img_7 from "../assets/Images/home_img_7.png";
import paystack from "../assets/Images/Group 1.svg";
import flutterwave from "../assets/Images/Flutterwave Logo-2 1.svg";
import TopNav from "../components/TopNav";
import home_icon_1 from "../assets/Icons/home_icon_1.svg";
import home_icon_2 from "../assets/Icons/home_icon_2.svg";
import home_icon_3 from "../assets/Icons/home_icon_3.svg";
import home_icon_4 from "../assets/Icons/home_icon_4.svg";
import home_icon_5 from "../assets/Icons/home_icon_5.svg";
import home_icon_6 from "../assets/Icons/home_icon_6.svg";
import home_icon_7 from "../assets/Icons/home_icon_7.svg";
import home_icon_8 from "../assets/Icons/home_icon_8.svg";
import home_icon_9 from "../assets/Icons/home_icon_9.svg";
import home_icon_10 from "../assets/Icons/home_icon_10.svg";
import checked from "../assets/Icons/checked.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

type SvgObject = {
  icon: string;
  header: string;
  txt: string;
  btn: string;
};

type imgObject = {
  icon: string;
  header: string;
  txt: string;
};

const items: SvgObject[] = [
  {
    icon: home_icon_1,
    header: "Browse Homes",
    txt: "Browse Pishon’s marketplace, each thoroughly vetted for their investment potential.",
    btn: "Learn more",
  },
  {
    icon: home_icon_2,
    header: "Buy Shares",
    txt: "Determine how much you’d like to invest, review the terms, sign electronically and fund your wallet.",
    btn: "Learn more",
  },
  {
    icon: home_icon_3,
    header: "Earn Income and Appreciation",
    txt: "We will cater to the maintenance of the property. All you have to do is sit back and earn.",
    btn: "Learn more",
  },
];

const units: imgObject[] = [
  {
    icon: home_icon_4,
    header: "Affordable and Accessible",
    txt: "Our investment model creates opportunities for more people to participate in real estate investing, thereby lowering the barrier for investing.",
  },
  {
    icon: home_icon_6,
    header: "High Yields",
    txt: "Our properties are located in high-brow areas with huge growth potential which makes it a huge investment in the long term.",
  },
  {
    icon: home_icon_7,
    header: "Passive Income",
    txt: "Every property is located in an area that has a high influx of short-stay customers, so all you have to do is relax and watch your money grow.",
  },
  {
    icon: home_icon_8,
    header: "Build Wealth",
    txt: "Use your rental income to buy more and more real estate shares. This sets you up on the path of financial freedom. Create the future you deserve.",
  },
  {
    icon: home_icon_9,
    header: "Track Investment",
    txt: "Track your portfolio performance and get regular updates on your investment.",
  },
  {
    icon: home_icon_10,
    header: "Quality Insurance",
    txt: "Each property is held in an LLC and covered with property insurance that shields you from personal liability.",
  },
];

const HomePage = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <TopNav />
      <div className="flex flex-col md:flex-row py-[64px] md:py-[96px] container md:justify-between">
        <div className="flex flex-col justify-start items-start  md:mt-[97px] md:flex-[0.40]">
          <h1
            className="mb-[16px] font-semibold text-[#101828] text-[36px] leading-[44px] md:text-[60px] md:leading-[72px] text-start md:w-[560px] md:h-[160px]
]"
          >
            The Easiest Way to Invest in Real Estate
          </h1>
          <p className="w-[343px] font-normal text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-start md:w-[560px] md:h-[90px]">
            Buy shares of rental properties in under 5 minutes starting from
            $10. Earn monthly income and grow your real estate portfolio. Let
            Pishon take care of the rest.
          </p>
          <span className="flex flex-col md:flex-row mt-[48px]">
            <button className="flex justify-center items-center gap-[14px] text-center border-2 w-[343px] md:w-[207px] h-[60px]  bg-[#FFF] font-inter font-semibold text-[16px] text-[#344054] leading-[24px]  rounded-lg">
              <img className="w-[20px] h-[20px]" src={play} alt="" />
              How it Works
            </button>
            <button className="justify-center items-center text-center border-2 w-[343px] md:w-[207px] h-[60px] mt-[20px] md:mt-0 py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg">
              View Properties
            </button>
          </span>
        </div>
        <div className="md:max-w-[560px] md:max-h-[640px] md:flex-[0.60]">
          <img
            className="hidden md:flex md:h-full md:w-full "
            src={home_img_2}
            alt=""
          />
          <img
            className="flex md:hidden h-full w-full my-[64px]"
            src={home_img_3}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center container py-[64px] md:py-[96px] md:max-w-full bg-[#FFF]">
        <h1
          className="hidden md:flex md:mb-[20px] md:font-semibold md:text-[#101828] md:text-[36px] md:leading-[44px] text-center md:w-[768px] md:h-[44px]
]"
        >
          Build your real estate portfolio all in one place
        </h1>
        <p className="hidden md:flex font-normal md:text-[20px] md:leading-[30px] text-[#475467] text-center md:w-[1003px] md:h-[60px]">
          Buy shares of carefully vetted properties across best-in-class
          residential markets in top-notch locations. Rental income on these
          properties will be sent directly to your wallet at the end of each
          month.
        </p>
        <img
          className="hidden md:flex md:mt-[64px] md:max-h-[558px] md:max-w-[875px]"
          src={home_img_4}
          alt=""
        />
        <h1
          className="md:hidden flex font-semibold text-[#101828] text-[30px] leading-[38px] text-center w-[343px] h-[76px]
]"
        >
          Financial software to fuel your growth
        </h1>
        <p className="md:hidden flex font-normal text-[18px] leading-[28px] text-[#475467] text-center md:w-[343px] md:h-[112px] mt-[16px]">
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
        <img className="md:hidden flex mt-[49px]" src={home_img_5} alt="" />
      </div>
      <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 place-items-center py-[64px] md:py-[96px] md:w-full bg-[#FFF]">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[343px] md:w-[384px] flex flex-col md:container justify-center items-center text-center font-inter font-semibold text-base  text-[#475467]"
          >
            {
              <img
                className="flex justify-center items-center"
                src={item.icon}
                alt=""
              />
            }
            <span className="py-[20px]">
              <h1 className="mb-[8px] font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#101828]">
                {item.header}
              </h1>
              <p className="font-normal text-base">{item.txt}</p>
            </span>
            <Link to="">
              <span className="flex mb-[40px]">
                <p className="font-semibold text-base text-[#00359E]  md:mb-0">
                  {item.btn}
                </p>
                <img
                  className="flex justify-center items-center ml-[12.17px]"
                  src={home_icon_5}
                  alt=""
                />
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center container py-[64px] md:py-[96px] md:max-w-full bg-[#FFF]">
        <h1
          className="flex justify-center items-center font-semibold text-[#101828] text-[30px] leading-[38px] text-center w-[343px] md:w-full
]"
        >
          Why Invest with Pishon?
        </h1>
        <p className="flex justify-center items-center font-normal text-[18px] leading-[28px] text-[#475467] text-center md:w-full w-[343px] mt-[16px] md:mt-[20px]">
          Open a full-featured account in with virtual cards in less than 5
          minutes.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 place-items-center py-[64px] md:py-[96px md:w-full bg-[#FFF]">
        {units.map((unit, index) => (
          <div
            key={index}
            className="w-[343px] md:w-[384px] flex flex-col md:container justify-center items-center text-center font-inter font-semibold text-base  text-[#475467]"
          >
            {
              <img
                className="flex justify-center items-center"
                src={unit.icon}
                alt=""
              />
            }
            <span className="py-[20px]">
              <h1 className="mb-[8px] font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#101828]">
                {unit.header}
              </h1>
              <p className="font-normal text-base">{unit.txt}</p>
            </span>
          </div>
        ))}
      </div>
      <div className="flex container py-[64px] md:py-[96px]">
        <span className="flex flex-col-reverse md:flex-row md:items-center">
          <img src={home_img_6} alt="" />
          <span className="flex flex-col justify-start items-start text-start md:ml-[64px] ml-0 mb-[48px] md:mb-0 w-full md:w-[576px]">
            {" "}
            <p className="font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-start w-[343px] md:w-full">
              Start your journey to financial freedom
            </p>
            <h1
              className="h-[56px] md:h-[30px]  font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-start  mt-[16px] md:mt-[20px] w-[343px] md:w-full 
]"
            >
              Join our pool of users building wealth with Pishon.
            </h1>
            <button className=" border-2 w-full md:w-[129px] h-[48px] mt-[32px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg">
              Get Started
            </button>
          </span>
        </span>
      </div>
      <div className="flex flex-col items-center w-full py-[64px] md:py-[96px] px-[16px] md:px-[112px] h-[344.41px] md:h-[388px] mt-[64px]">
        <h3
          className="w-[343px] md:w-[960px] mb-[16px] md:mb-[24px] font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center
]"
        >
          Our Partners
        </h3>
        <p className="w-[343px] md:w-full font-medium text-base text-[#475467] text-center">
          These are the organisations we’ve worked with to lower the barriers of
          real estate investing for people in Africa
        </p>
        <div className="flex flex-row mt-[32px] md:mt-[38px] gap-[19px] md:gap-[32px]">
          <img className="w-[150px] md:w-[180px]" src={flutterwave} alt="" />
          <img className="w-[181px] md:w-[221px]" src={paystack} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:max-w-full container py-[64px] md:pt-[96px]">
        <div className="flex flex-col md:justify-center mb-[48px] md:mb-0 w-full md:text-center md:pl-[112px]">
          {" "}
          <p className="font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-start w-[343px] md:w-full">
            Get started in 5 minutes
          </p>
          <p
            className="flex font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-start  mt-[16px] md:mt-[20px] w-[343px] md:w-full 
]"
          >
            <img className="mr-[14px]" src={checked} alt="" />
            Browse Homes
          </p>
          <p
            className="flex font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-start  mt-[16px] md:mt-[20px] w-[343px] md:w-full 
]"
          >
            <img className="mr-[14px]" src={checked} alt="" />
            Buy Shares
          </p>
          <p
            className="flex font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-start  mt-[16px] md:mt-[20px] w-[343px] md:w-full 
]"
          >
            <img className="mr-[14px]" src={checked} alt="" />
            Earn Income & Appreciation
          </p>
          <button className=" border-2 w-full md:w-[129px] h-[48px] mt-[32px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg">
            Get Started
          </button>
        </div>
        <img src={home_img_7} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
