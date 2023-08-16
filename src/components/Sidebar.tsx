import { useState } from "react";
import Pishon from "../assets/Images/Pishon (1).svg";
import { Link } from "react-router-dom";
import home from "../assets/Images/home-line.svg";
import bar from "../assets/Images/bar-chart-square-02.svg";
import listing from "../assets/Images/building-07.svg";
import wallet from "../assets/Images/wallet-03.svg";
import menu from "../assets/Images/menu-03.svg";
import refer from "../assets/Images/users-01.svg";
import profile from "../assets/Images/user-circle.svg";
import logout from "../assets/Images/log-out-01.svg";
import avater from "../assets/Images/Avatar.svg";
import { RiHome6Line } from "react-icons/ri";
// import LogoutModal from "./Modals/LogoutModal";
import LogoutModal from "./Modals/logoutModal";
import Modals from "./Modals";

const links = [
  {
    name: "Home",
    link: "/Dashboard",
    img: home,
    svg: <RiHome6Line size={"24px"} />,
  },
  { name: "Portfolio", link: "#", img: bar },
  { name: "Listing", link: "#", img: listing },
  { name: "Wallet", link: "/wallet", img: wallet },
  { name: "Beneficiaries", link: "/Beneficiaries", img: menu },
  { name: "Referrals", link: "#", img: refer },
];



const profiles = [
  {
    ProfileName: "John Doe",
    profileEmail: "johndoe@gmail.com",
    ProfileImage: avater,
  },
];

const Sidebar = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] =useState(false)
  //     const handleLogout = () => {
  //   // Perform logout logic here
  //   console.log('Logging out...');
  // };
  

  // const handleCancel = () => {
  //   // Handle cancel logic here
  //   console.log('Cancel logout');
  // };

  const [openNav, setOpenNav] = useState(false);
    const logouts = [
      {
        name: "Profile",
        link: "#",
        img: profile,
      },
      { name: <Modals isOpen={isLogoutModalOpen} closeModal={()=>setIsLogoutModalOpen(false)} openModal={()=>setIsLogoutModalOpen(true)} title="Logout"><LogoutModal onCancel={ ()=>null} /></Modals>, link: "#", img: logout,},
    ];

  return (
    <>
      <div
        className={` bg-[#ffffff] lg:max-w-[280px] lg:border-r-2 lg:border-[#EAECF0] h-full fixed inset-0  md:py-[32px] duration-300 z-10 ${
          openNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="container flex flex-row lg:flex-col lg:justify-between gap-6 lg:items-center  lg:my-0">
          <div
            className="absolute right-4 top-4 lg:hidden"
            onClick={() => setOpenNav(false)}
          >
            X
          </div>
          <div className="flex flex-col">
            <span className="hidden lg:w-[102px] h-[38px] lg:flex justify-center items-center  cursor-pointer  ">
              <img src={Pishon} alt="" />
            </span>
            <div className="">
              <div className="flex flex-col justify-between items-start mt-[92px] lg:mt-[32px] ">
                <ul className="flex lg:items-start flex-col gap-4 relative  bg-white w-full ">
                  {links.map((link) => (
                    <li
                      key={link.name}
                      // className=" flex font-inter font-semibold text-base  text-[#475467] gap-3 px-[12px] py-[8px] hover:bg-[#EFF4FF] hover:text-[#00359E] w-[320px] lg:w-[248px]"
                    >
                      <Link
                        to={link.link}
                        className=" flex font-inter font-semibold text-base  text-[#475467] gap-3 px-[12px] py-[8px] hover:bg-[#EFF4FF] hover:text-[#00359E]  lg:w-[248px]"
                      >
                        {link.svg ? (
                          link.svg
                        ) : (
                          <img
                            className="hover:text-[#00359E]"
                            src={link.img}
                            alt=""
                          />
                        )}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start mt-[92px] lg:mt-[64px] ">
                <ul className="flex  lg:items-start flex-col gap-1 relative  bg-white text-[#00359E] w-full">
                  {logouts.map((logout, index) => (
                    <li
                      key={index}
                      className=" flex  font-inter font-semibold text-base  text-[#475467] gap-3 px-[12px] py-[8px] hover:bg-[#EFF4FF] hover:text-[#00359E] w-full "
                    >
                      <img src={logout.img} className="" alt="" />
                      <Link to={logout.link}>
                        {logout.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start mt-[92px] lg:mt-[64px]">
                <div className="flex lg:items-start flex-col relative  bg-white ">
                  {profiles.map((profile, index) => (
                    <div
                      key={index}
                      className=" flex font-inter font-semibold text-base  text-[#475467] gap-4 p-[8px] w-[248px]"
                    >
                      <div className="flex justify-center items-center">
                        <img src={profile.ProfileImage} alt="" />
                      </div>
                      <span>
                        <div className="">
                          <Link to={profile.ProfileName}>
                            {profile.ProfileName}
                          </Link>
                        </div>
                        <div className="">
                          <Link to={profile.profileEmail}>
                            {profile.profileEmail}
                          </Link>
                        </div>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:hidden container">
        <span className="w-[102px] h-[38px] justify-center items-center cursor-pointer  ">
          <img src={Pishon} alt="" />
        </span>
        <p onClick={() => setOpenNav(true)}>Test</p>
      </div>
    </>
  );
};

export default Sidebar;
