import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const NavbarBelt = () => {
  return (
    <div className='flex bg-[#131321] w-full h-15 box-border justify-evenly'>
        {/*--------leftNavBelt------ */}
        <div className="flex gap-[5px] p-2.5 justify-center items-center">
          {/* logo */}
          <div className='flex items-center  w-28 h-full max-sm:w-20 cursor-pointer  hover:border border-solid border-white rounded-xs '>
            {/* <img src="A.jpg" alt="" className='h-full hidden  '/> */}
            <img src="amazon.png" alt="" className='h-full w-23.5 '/>
            <span className='text-white mb-2 ml-0.5 font-normal max-sm:hidden '>.in</span>
          </div>
          {/* location */}
          <div className='flex gap-[5px] p-2 h-full cursor-pointer hover:border border-solid border-white rounded-xs' >
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
        <div className="flex justify-center items-center px-2.5 py-1 w-[50%]">
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
        <div className="p-2.5 text-white flex h-full gap-[1px] justify-between">
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

    </div>
  
  )
}


export default NavbarBelt