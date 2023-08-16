  
const LogoutModal = ({onLogout, onCancel}:any) => {

    const handleLogout = () => {
    onLogout();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="flex flex-col items-center w-[343px] h-[272px] lg:w-[400px] lg:h-[240px] font-inter">
      <div className="flex justify-center items-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex justify-center">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEE4E2"/>
          <path d="M32 33L37 28M37 28L32 23M37 28H25M25 19H23.8C22.1198 19 21.2798 19 20.638 19.327C20.0735 19.6146 19.6146 20.0735 19.327 20.638C19 21.2798 19 22.1198 19 23.8V32.2C19 33.8802 19 34.7202 19.327 35.362C19.6146 35.9265 20.0735 36.3854 20.638 36.673C21.2798 37 22.1198 37 23.8 37H25" stroke="#F04438" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" stroke-width="8"/>
        </svg>
      </div>
            <div className="flex flex-col justify-center items-center mb-4 mt-[16px] min-w-[170px] w-full break-words ">
              <p className="text-[#101828] font-semibold text-[18px] leading-[28px]">Logout</p>
              <p className="font-normal text-[14px] text-[#475467] leading-[20px]">Are you sure you want to log out from Pishon?</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-2 justify-center pt-[32px]">
              <button
                className="min-w-[170px] w-[311px] lg:w-[170px] px-4 py-2 mr-2 bg-[#fff] border-[#D0D5DD] border-[1px] rounded-lg text-[#344054] "
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="w-full min-w-[170px] max-w-[311px] lg:w-[170px] px-[18px] py-[10px] bg-[#F04438] rounded-lg text-white"
                onClick={handleLogout}
                >
                Logout
              </button>
            </div> 
    </div>
  )
}

export default LogoutModal