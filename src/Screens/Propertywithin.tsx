import TopNav from "../components/TopNav";
import house from "../assets/Icons/_Breadcrumb button base.svg";
import arrowRightIcon from "../assets/Icons/chevron-right.svg";
import arrowLeftIcon from "../assets/Icons/arrow-left.svg";
import product_image_1 from "../assets/Images/Rectangle 1 (1).png";
import product_image_2 from "../assets/Images/Rectangle 2.svg";
import product_image_3 from "../assets/Images/Rectangle 3.svg";
import product_image_4 from "../assets/Images/Rectangle 4.svg";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

type SvgObject = {
  txt: string;
  num: number;
};

type NumObject = {
  txt: string;
  num: number;
};

type PerObject = {
  txt: string;
  num: number;
};

type LocObject = {
  txt: string;
  num: string;
};

const items: SvgObject[] = [
  {
    txt: "Minimum Investment",
    num: 100,
  },
];

const years: NumObject[] = [
  {
    txt: "Holding Period",
    num: 5,
  },
];

const percents: PerObject[] = [
  {
    txt: "Estimated ROI",
    num: 12,
  },
];

const locations: LocObject[] = [
  {
    txt: "Location",
    num: "Lagos, Nigeria",
  },
];

const Propertywithin = () => {
  return (
    <div className="font-inter">
      <TopNav />
      <div className="container mt-[32px] md:mt-[40px]">
        <section className="">
          <div className="hidden md:flex gap-2">
            <img src={house} alt="" />
            <img src={arrowRightIcon} alt="" />
            <p>Properties</p>
          </div>
          <div className="flex md:hidden">
            <img className="" src={arrowLeftIcon} alt="" />
            <p>Back</p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row mt-[32px] md:mt-[64px] w-full justify-between">
          <div className="flex flex-col md:flex-row gap-4 flex-[0.6]">
            <div className="">
              <img
                src={product_image_1}
                alt="Image 1"
                className="h-[164px] w-[343px] md:h-full md:w-[800px] rounded-tl-[16px] rounded-tr-[16px] md:rounded-tr-none md:rounded-l-[12px] object-cover md:object-fill"
              />
            </div>
            <div className="flex flex-row md:flex-col gap-4 w-[343px] md:w-full">
              <div>
                <img
                  src={product_image_2}
                  alt="Image 2"
                  className="h-[67px] w-full md:w-[276px] md:h-full object-cover rounded-bl-[16px] md:rounded-bl-none md:rounded-tr-[12px]"
                />
              </div>
              <div>
                <img
                  src={product_image_3}
                  alt="Image 3"
                  className="h-[67px] w-full md:w-[276px]  md:h-full object-cover"
                />
              </div>
              <div>
                <img
                  src={product_image_4}
                  alt="Image 4"
                  className="h-[67px] w-full md:w-[276px]  md:h-full object-cover rounded-br-[16px] md:rounded-br-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="flex-[0.4] mt-[56px] md:mt-0">
            <div className="flex justify-between">
              <div className="">
                {items.map((item, index) => (
                  <div key={index} className="">
                    <span className="">
                      <h1 className="font-normal text-[16px] md:text-[18px] md:leading-[28px]">
                        {item.txt}
                      </h1>
                      <p className="font-semibold text-[18px] md:text-[24px] md:leading-[38px] mt-[12px]">
                        ${item.num}
                      </p>
                    </span>
                  </div>
                ))}
              </div>
              <div className="">
                {years.map((year, index) => (
                  <div key={index} className="">
                    <span className="">
                      <h1 className="font-normal text-[16px] md:text-[18px] md:leading-[28px]">
                        {year.txt}
                      </h1>
                      <p className="font-semibold text-[18px] md:text-[24px] md:leading-[38px] mt-[12px]">
                        {year.num} Years
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-[40px]">
              <div className="">
                {percents.map((percent, index) => (
                  <div key={index} className="">
                    <span className="">
                      <h1 className="font-normal text-[16px] md:text-[18px] md:leading-[28px]">
                        {percent.txt}
                      </h1>
                      <p className="font-semibold text-[18px] md:text-[24px] md:leading-[38px] mt-[12px]">
                        {percent.num}%
                      </p>
                    </span>
                  </div>
                ))}
              </div>
              <div className="">
                {locations.map((location, index) => (
                  <div key={index} className="">
                    <span className="">
                      <h1 className="font-normal text-[16px] md:text-[18px] md:leading-[28px]">
                        {location.txt}
                      </h1>
                      <p className="font-semibold text-[18px] md:text-[24px] md:leading-[38px] mt-[12px]">
                        {location.num}
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <span className="flex flex-col md:justify-center md:items-center justify-start items-start">
              <button className="w-[343px] md:w-[352px] md:h-[48px] font-bold py-2 px-4 mt-4 rounded-lg cursor-pointer bg-[#00359E] text-white">
                Invest Now
              </button>
              <button className="w-[343px] md:w-[352px] md:h-[48px] font-bold py-2 px-4 mt-4 rounded-lg cursor-pointer bg-white text-[#00359E] border-2 border-[#00359E]">
                Sell
              </button>
            </span>
          </div>
        </section>
        <div className="flex flex-col md:items-center my-[96px] border">
          <section className="border">
            <div className="grid grid-cols-2 md:grid-cols-3 place-items-between md:w-[730px]">
              <div className="">
                <p>Bedroom</p>
                <p>4</p>
              </div>
              <div className="">
                <p>Bathroom</p>
                <p>3</p>
              </div>
              <div className="">
                <p>Beds</p>
                <p>5</p>
              </div>
              <div className="">
                <p>Property Type</p>
                <p>Vaccation Rental</p>
              </div>
              <div className="">
                <p>Year Built</p>
                <p>2012</p>
              </div>
              <div className="">
                <p>Location</p>
                <p>Lagos, Nigeria</p>
              </div>
              <div className="">
                <p>Price per share</p>
                <p>$1</p>
              </div>
              <div className="">
                <p>Min. investment</p>
                <p>$100</p>
              </div>
              <div className="">
                <p>Average Revenue/mo</p>
                <p>$1200</p>
              </div>
            </div>
          </section>
          <section className="border my-[96px] md:w-[730px]">
            <p className="">Amenities</p>
            <div className="flex flex-row gap-[16px] md:gap-0">
              <div className="">
                <span className="">
                  <img src="" alt="" />
                  <p className="">Wireless Internet</p>
                </span>
                <span className="">
                  <img src="" alt="" />
                  <p className="">Smart TV</p>
                </span>
                <span className="">
                  <img src="" alt="" />
                  <p className="">Hot Tub</p>
                </span>
                <span className="">
                  <img src="" alt="" />
                  <p className="">Air Conditioner</p>
                </span>
              </div>
              <div className="">
                <div className="">
                  <span className="">
                    <img src="" alt="" />
                    <p className="">Air Conditioner</p>
                  </span>
                  <span className="">
                    <img src="" alt="" />
                    <p className="">Essentials</p>
                  </span>
                  <span className="">
                    <img src="" alt="" />
                    <p className="">Washing Machine</p>
                  </span>
                  <span className="">
                    <img src="" alt="" />
                    <p className="">Swimming Pool</p>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="border">
            <div className="flex flex-col justify-center items-center w-full h-auto break-words md:w-[730px]">
              <h2 className=""></h2>
              <span className="">
                <p className="text">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                  <br />
                  <br />
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </p>
                <p className="text">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                  <br />
                  <br />
                  Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                  imperdiet commodo consectetur convallis risus. Sed condimentum
                  enim dignissim adipiscing faucibus consequat, urna. Viverra
                  purus et erat auctor aliquam. Risus, volutpat vulputate
                  posuere purus sit congue convallis aliquet. Arcu id augue ut
                  feugiat donec porttitor neque. Mauris, neque ultricies eu
                  vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
                  lectus in tellus, pharetra, porttitor.
                  <br />
                  <br />
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                  congue felis elit erat nam nibh orci.
                </p>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-auto break-words md:w-[730px]">
              <h2 className=""></h2>
              <span className="">
                <p className="text">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                  <br />
                  <br />
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </p>
              </span>
            </div>
            <button className="w-full md:h-[48px] font-bold py-2 px-4 mt-4 rounded-lg cursor-pointer bg-[#00359E] text-white">
              Invest Now
            </button>
            <div className="border">
              <span>
                <p></p>
              </span>
              <span className="flex justify-between">
                <img src="" alt="" />
                <p>Legal Document.pdf</p>
                <button className="w-full md:h-[48px] font-bold py-2 px-4 mt-4 rounded-lg cursor-pointer bg-[#00359E] text-white">
                  Invest Now
                </button>
              </span>
              <span className="flex justify-between">
                <img src="" alt="" />
                <p>Investment Agreement.pdf</p>
                <button className="w-full md:h-[48px] font-bold py-2 px-4 mt-4 rounded-lg cursor-pointer bg-[#00359E] text-white">
                  Invest Now
                </button>
              </span>
            </div>
          </section>
        </div>
        <section className="w-full bg-gray-50 ">
          <div className="flex flex-col justify-center mx-auto pt-[48px] md:pt-[64px]">
            <p className="font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center">
              Frequently asked questions
            </p>
            <h1
              className="h-[56px] md:h-[30px]  font-normal text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-center mt-[16px] md:mt-[20px]
]"
            >
              Everything you need to know about Pishon.
            </h1>
            <span className="pt-[48px] md:pt-[64px] md:mx-[224px]">
              <Accordion title="What am I buying?">
                <p className="font-regular text-base text-[#475467]">
                  When you purchase shares in a Pishon property, you are
                  directly buying ownership in the property which is owned by
                  Pishon LLC and you are eligible to receive quarterly payouts
                  derived from booking income as well as potential property
                  value appreciation.
                </p>
              </Accordion>
              <Accordion title="Who is Pishon for?">
                <p className="font-regular text-base text-[#475467]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </Accordion>
              <Accordion title="Do I need to be involved in any aspect of property management?">
                <p className="font-regular text-base text-[#475467]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </Accordion>
              <Accordion title="How do I start investing?">
                <p className="font-regular text-base text-[#475467]">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </Accordion>
            </span>
          </div>
        </section>
        <section>
          <div className=" flex flex-col justify-center items-center h-[270px] w-full md:h-[302px]  my-[64px] py-[40px] md:py-[64px] bg-[#F9FAFB]">
            <p className="font-semibold text-[#101828] text-[30px] leading-[38px] md:text-[36px] md:leading-[44px] text-center">
              Start your journey to financial freedom
            </p>
            <h1
              className="h-[56px] md:h-[30px]  font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-center mt-[16px] md:mt-[20px]
]"
            >
              Join our pool of users building wealth with Pishon.
            </h1>
            <button className="justify-center items-center text-center border-2 w-[295px] md:w-[129px] h-[48px] mt-[32px] mx-[24px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg">
              Get Started
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Propertywithin;
