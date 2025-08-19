import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from '../../SideNavbar/Sidebar';
const NavbarBelt = () => {
  const [isOpen ,setIsOpen] = useState();
  return (
    <>
    <div className='max-sm:hidden flex  bg-[#131321] w-full  h-15 box-border justify-evenly'>
        {/*--------leftNavBelt------ */}
        <div className="max-sm:hidden flex gap-[5px] p-2.5 justify-center items-center">
          {/* logo */}
          <div className='flex items-center  w-28 h-full cursor-pointer  hover:border border-solid border-white rounded-xs '>
            {/* <img src="A.jpg" alt="" className='h-full hidden  '/> */}
            <img src="amazon.png" alt="" className='h-full w-23.5 '/>
            <span className='text-white mb-2 ml-0.5 font-normal max-sm:hidden '>.in</span>
          </div>
          {/* location */}
          <div className='flex gap-[5px] p-2 h-full cursor-pointer hover:border border-solid border-white rounded-xs max-sm:hidden' >
            <div className='w-4 pt-[7px]'>
              <LocationOnOutlinedIcon className='mt-[3px]' sx={{fontSize:'22px', color:'white'}}/>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='text-[12px] max-sm:text-[8px] text-[#ccc] tracking-[0.5px] font-medium'>Delivery to Aligarh 202138</div>
              <div className='text-[14px] max-sm:text-[8px] text-white font-semibold leading-[10px]'>Update location</div>
            </div>
          </div>



        </div>

        {/*---search Box-----  */}
        <div className="max-sm:hidden flex justify-center items-center px-2.5 py-1 w-[50%]">
          <div className='flex w-full h-10 rounded-[5px] border border-solid border-[#131921]'>
            <div className='flex bg-[#cdcdcd] gap-[5px] rounded-l-[5px] justify-center items-center p-1 cursor-pointer text-[#565959]'>
              <div className='text-[12px] font-semibold'>All</div>
              <ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>
            </div>
            <input type="text" placeholder='Search Amazon.in' className='p-[5px] w-[84%] border border-solid border-white placeholder-gray-400 text-[15px] font-medium focus:outline-none bg-white' />
            <div className='bg-[#ffce12] text-[10px] flex justify-center items-center rounded-r-[5px] p-2.5 cursor-pointer hover:bg-[#ffa41c]'>
              <SearchOutlinedIcon sx={{fontSize:'26px', color:'black'}}/>
            </div>
          </div>

        </div>

        {/* ----rightNavBelt----- */}
        <div className="max-sm:hidden p-2.5 text-white flex h-full gap-[1px] justify-between">
          <div className='flex justify-center items-center pt-2.5 p-2 gap-[5px] cursor-pointer h-7.5 mt-1.5 hover:border border-solid rounded-[3px]  '>
            <img src="Flag-India.webp" alt="" className='w-5 h-4'/>
            <div className='text-[14px] flex leading-2.5 items-center font-bold '>EN <ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:0.4}} className='text-[#ccc]'/></div>
          </div>
          {/* user field */}
          <div className='flex relative no-underline flex-col h-full p-2 justify-center cursor-pointer hover:border  border-solid rounded-[3px] '>
            <div className='text-[12px] font-medium text-[#ccc]'>Hello, User</div>
            <div className='text-[12px] font-bold text-white' >Accounts & Lists</div>
          </div>
          {/* return & order */}
           <div className='flex relative justify-center text-white no-underline flex-col h-full p-2 cursor-pointer hover:border  border-solid rounded-[3px] '>
            <div className='text-[12px] font-normal'>Return</div>
            <div className='text-[12px] font-bold' >&Order</div>
          </div>
          <div className='flex relative justify-center text-white no-underline flex-col h-full p-2  cursor-pointer hover:border  border-solid rounded-[3px]'>
            <span className='absolute bottom-[70%] left-[22%] text-[16px] font-semibold text-[#ffce12]'>2</span>
            <div className='text-[12px] font-medium'>
              <ShoppingCartOutlinedIcon/><span className='text-[14px] font-medium'>Cart</span>
            </div>
            
          </div>


        </div>

         {/* // NavbarBelt for mobile view */}
        

    </div>
      <div className='hidden max-sm:flex flex-col bg-[#131321] w-full gap-0 h-full box-border '>
         {/* logo */}
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center justify-center ml-5 p-2.5 w-28 h-full max-sm:w-20 cursor-pointer  '>
            <div className="flex px-2 py-2 no-underline text-white cursor-pointer " onClick={()=>setIsOpen(true)}><MenuIcon/></div>
            {/* <img src="A.jpg" alt="" className='h-full hidden  '/> */}
            
            <img src="amazon.png" alt="" className='h-[40px] w-23.5 '/>
            <span className='text-white mb-2 ml-0.5 font-normal  '>.in</span>
          </div>
          <Sidebar isOpen={isOpen} onClose={()=>setIsOpen(false)}/>

          <div className='flex relative mr-1.5 justify-center text-white no-underline flex-col h-full p-2  cursor-pointer '>
            <span className='absolute bottom-[70%] left-[22%] text-[16px] font-semibold text-[#ffce12]'>2</span>
            <div className='text-[12px] font-medium'>
              <ShoppingCartOutlinedIcon/><span className='text-[14px] font-medium'>Cart</span>
            </div>
            
          </div>
        </div>
        <div className='w-full h-full flex justify-center '>
          <div className="max-sm:flex justify-center items-center px-2.5 py-1 w-[100%]">
          <div className='flex w-full h-10 rounded-[5px] border border-solid border-[#131921]'>
            
            <input type="text" placeholder='Search Amazon.in' className='p-[5px] rounded-l-[5px] w-[94%] border border-solid border-white placeholder-gray-400 text-[15px] font-medium focus:outline-none bg-white' />
            <div className='bg-[#ffce12] text-[10px] flex justify-center items-center rounded-r-[5px] p-2.5 cursor-pointer hover:bg-[#ffa41c]'>
              <SearchOutlinedIcon sx={{fontSize:'26px', color:'black'}}/>
            </div>
          </div>

        </div>

        </div>
      </div>

    
    
  </>
  )
}


export default NavbarBelt