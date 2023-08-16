import { useState } from 'react';
import Pishon from '../assets/Images/Pishon (1).svg';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Marketplace', link: '#' },
  { name: 'About Us', link: '#' },
  { name: 'Contact Us', link: '#' },
  { name: 'Blog', link: '#' },
];

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div
        className={` bg-[#ffffff] w-full h-screen fixed inset-0 lg:relative lg:h-[80px] border-b border-b-[#F2F4F7] shadow-sm md:py-[21px] duration-300 ${
          openNav ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
        <div className='container flex flex-col lg:flex-row lg:justify-between gap-6 lg:items-center my-24 lg:my-0'>
          <div
            className='absolute right-4 top-4 lg:hidden'
            onClick={() => setOpenNav(false)}>
            X
          </div>
          <div className='flex flex-col gap-6 lg:flex-row  lg:items-center lg:justify-center'>
            <span className='lg:w-[102px] h-[38px] flex justify-center items-center  cursor-pointer  '>
              <img
                src={Pishon}
                alt=''
              />
            </span>
            <div className='flex flex-col lg:flex-row items-center '>
              <ul className='flex lg:items-center flex-col lg:flex-row gap-8 w-full relative  bg-white '>
                {links.map((link) => (
                  <li
                    key={link.name}
                    className='   font-inter font-semibold text-base  text-[#475467] '>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> 
          <div className=' lg:flex lg:items-center justify-center relative md:static bg-white md:z-auto w-full lg:w-auto '>
            <span className='flex flex-col-reverse gap-6 lg:flex-row items-start lg:items-center justify-start lg:justify-center '>
              <Link to='/loginpage'>
                <button className=' font-inter font-semibold  text-[#475467] lg:w-[95px] px-4 py-2 bg-[#FFFFFF]  border lg:border-none border-[#00359E] rounded-lg  w-full'>
                  Log in
                </button>
              </Link>
              <Link to='/signup'>
                <button className=' font-inter font-semibold text-base text-white w-full lg:w-[95px]  px-4 py-2 bg-[#00359E] border rounded-lg shadow-sm'>
                  Sign up
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className='flex justify-between lg:hidden container'>
        <span className='w-[102px] h-[38px] justify-center items-center cursor-pointer  '>
          <img
            src={Pishon}
            alt=''
          />
        </span>
        <p onClick={() => setOpenNav(true)}>Test</p>
      </div>
    </>
  );
};

export default TopNav;
