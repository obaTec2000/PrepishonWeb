import React, { useState } from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b-[1px] border-gray-200 mb-4'>
      <div
        className='flex items-center justify-between p-4 cursor-pointer bg-gray-50  '
        onClick={toggleAccordion}>
        <h3 className='md:text-[18px] md:leading-[28px] font-medium text-[#101828]'>
          {title}
        </h3>
        <span className='transform transition-transform duration-200 '>
          {isOpen ? (
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
                stroke='#98A2B3'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          ) : (
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
                stroke='#98A2B3'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && <div className='p-4 bg-gray-50'>{children}</div>}
    </div>
  );
};

export default Accordion;
