import { useState } from "react";

type props = {
  children: JSX.Element;
  title?: string;
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
};
const Modals = ({ children, title, isOpen, closeModal, openModal }: props) => {
  return (
    <>
      {/* Button to open the modal */}
      <button onClick={openModal}>{title}</button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-screen px-2">
          <div
            className="absolute inset-0 bg-[#00359e2f] bg-opacity-[100] backdrop:blur-[8px]"
            onClick={closeModal}></div>
          <div className="bg-white p-4 lg:p-6 rounded-[12px] font-inter shadow-lg z-10 max-w-2xl  relative max-h-[90vh] overflow-y-auto long-modal ">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-3"
              onClick={closeModal}>
              <path
                d="M28 16L16 28M16 16L28 28"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
