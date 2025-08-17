import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SideNavbar from "../../../../../../youtube/V-tube/src/component/SideNavbar/SideNavbar";
import Sidebar from "../../SideNavbar/Sidebar";

const NavbarBanner = () => {
  const [isOpen ,setIsOpen] = useState();
  const options = [
    { name: "Fresh" },
    { name: "Amazon mini" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "Customer Services" },
    { name: "New Releases" },
  ];

  return (
    
    <div className="flex bg-[#232f3e] w-full h-[36px] pl-3 justify-space-between text-white">
      <div className="flex">
        <div className="flex justify-center items-center px-2 py-2 no-underline text-white cursor-pointer hover:border border-solid border-white rounded-[3px]" onClick={()=>setIsOpen(true)}>
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="text-[14px] pl-1 font-normal">All</div>
          <ArrowDropDownOutlinedIcon sx={{ fontSize: "24px" }} />
        </div>
        <Sidebar isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
        {options.map((item, ind) => {
          return (
            <div className="flex justify-center items-center px-2 py-2 no-underline text-white cursor-pointer hover:border border-solid border-white rounded-[3px]" key={ind}>
              <div className="text-[14px] pl-1 font-normal">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarBanner;
