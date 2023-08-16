import pishon from "../assets/Icons/Pishon (4).svg";
import twitter from "../assets/Icons/twitter.svg";
import instagram from "../assets/Icons/instagram.svg";
import facebook from "../assets/Icons/facebook.svg";
import youtube from "../assets/Icons/youtube.svg";
import linkedin from "../assets/Icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="w-full h-full  bg-[#00359E] px-[16px] pt-[48px] md:px-[40px] font-inter text-[#ffffff]">
      <div className="flex flex-col md:flex md:flex-row md:gap-12 border-b-[1px] border-[#ffffff] ">
        <div className="bg-[#00359E] md:flex-[0.40]">
          <img src={pishon} alt="Pishon logo" />
          <p className=" h-[48px] mt-[24px] md:mt-[32px] font-normal text-base ">
            Buy shares of rental properties in under 5 minutes starting from
            $10.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:flex-[0.60] my-[48px] font-semibold text-base">
          <span className="w-[140.8px] ">
            <ul>
              <li className="pb-[16px]">Product</li>
              <li className="pb-[12px]">Overview</li>
              <li className="pb-[10px]">Features</li>
            </ul>
          </span>
          <span className="w-[140.8px] md:w-[100px]">
            <ul>
              <li className="pb-[16px]">Company</li>
              <li className="pb-[12px]">About Us</li>
              <li className="pb-[12px]">careers</li>
              <li className="pb-[12px]">Contact</li>
            </ul>
          </span>
          <span className="w-[140.8px] md:w-[100px]">
            <ul>
              <li className="pb-[16px]">Resources</li>
              <li className="pb-[12px]">Blog</li>
              <li className="pb-[12px]">Newsletter</li>
              <li className="pb-[12px]">Help Center</li>
              <li className="pb-[12px]">Support</li>
            </ul>
          </span>
          <span className="w-[140.8px] md:w-[100px]">
            <ul>
              <li className="pb-[16px]">Social</li>
              <li className="pb-[12px]">Twitter</li>
              <li className="pb-[12px]">LinkedIn</li>
              <li className="pb-[12px]">Facebook</li>
              <li className="pb-[12px]">Youtube</li>
              <li className="pb-[12px]">Instagram</li>
            </ul>
          </span>
          <span className="w-[140.8px] md:w-[80px]">
            <ul>
              <li className="pb-[16px]">Legal</li>
              <li className="pb-[12px]">Terms</li>
              <li className="pb-[12px]">Privacy</li>
              <li className="pb-[12px]">Cookies</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <p className=" mt-[24px] md:mt-[48px] font-normal text-base">
          © 2023 Pishon Inc. All rights reserved.
        </p>
        <span className="flex flex-row mt-[24px] md:mt-[48px]">
          <img
            className="w-[24px] h-[24px] md:ml-[24px]"
            src={twitter}
            alt=""
          />
          <img className="w-[24px] h-[24px] ml-[24px]" src={linkedin} alt="" />
          <img className="w-[24px] h-[24px] ml-[24px]" src={facebook} alt="" />
          <img className="w-[24px] h-[24px] ml-[24px]" src={youtube} alt="" />
          <img className="w-[24px] h-[24px] ml-[24px]" src={instagram} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
