import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Sidebar = ({isOpen, onClose}) => {
  return (
    
     <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed  inset-0 bg-[rgba(0,0,0,0.7)] bg-opacity-50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
     
      




        <div className="p-4 flex gap-1 bg-[#232f3e]">
            <AccountCircleIcon sx={{fontSize:'30px', color:'white'}}/>
          <h2 className="font-bold text-lg max-sm:text-white">Hello, Sign in</h2>
        </div>
        <hr />

        {/* Sidebar sections */}
        <div className="p-4 text-black  border-b border-gray-300">
          <h3 className="font-semibold mb-2">Trending</h3>
          <ul className="space-y-2 text-black">
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              Best Sellers
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              New Releases
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              Movers & Shakers
            </li>
          
          </ul>
        </div>

         <div className="p-4 text-black  border-b border-gray-300">
          <h3 className="font-semibold mb-2">Digital Content and Devices
</h3>
          <ul className="space-y-2 flex flex-col  text-black">
            <li className="hover:bg-gray-100 flex justify-between p-2 rounded cursor-pointer">
              Echo & Alexa <ChevronRightIcon sx={{color:'gray'}}/>
            </li>
            <li className="flex justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              Fire TV   <ChevronRightIcon sx={{color:'gray'}}/>
            </li>
            <li className="flex justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              Kindle E-Renders & eBooks  <ChevronRightIcon sx={{color:'gray'}}/>
            </li>
             < li className="flex justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              Audible Audiobooks <ChevronRightIcon sx={{color:'gray'}}/>
            </li>
            <li className=" flex justify-between hover:bg-gray-100 p-2 rounded cursor-pointer">
              Amazon Prime Video <ChevronRightIcon sx={{color:'gray'}}/>
            </li>
          </ul>
        </div>
      </div>

      {/* Floating Close Button OUTSIDE sidebar */}
      
      {isOpen && (
        <button
          onClick={onClose}
          className=" fixed text-white bg-[rgba(0,0,0,0.7)] top-4 left-73  z-50 p-3 rounded-[4px] border border-solid shadow-lg"
        >
          ✕
        </button>
      )}
      
    </>
  )
}

export default Sidebar