import React from "react";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className="flex flex-col w-full object-contain bg-no-repeat relative">
      <img
        className=" h-[80vh] w-full [mask-image:linear-gradiant(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] "
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
        alt=""
      />
      <div className="bg-[rgb(238,235,235)] h-[80vh]"></div>

      {/* ------items Card------- */}

    

      <div className="grid grid-cols-[repeat(4,1fr)] gap-5 top-[22%] px-5 py-0 absolute max-sm:grid-cols-[repeat(1,1fr)] max-sm:px-0" >
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div key={ind} className={`flex bg-white flex-col w-[343px] box-border pt-5 pl-0 pb-4 ${ind>1?"hidden sm:block":""}`}>
              <div className="mr-0 ml-5 text-[21px] font-bold">
                {item.itemTitle}
                {/* Revamp your home in style */}
              </div>
              {/* --img homeBanner item div card--- */}
              <div className="grid grid-cols-[repeat(2,1fr)] mx-2.5 my-5 ">
                {item.imgs.map((it, ind) => {
                  return (
                    <div className="h-[144px] w-[144px] flex flex-col">
                      <img src={it} alt="" className="w-full" />
                      <div className="text-[12px] font-medium">
                        Figurines, vases & more
                      </div>
                    </div>
                  );
                })}

               
              </div>
              <div className="mx-5 my-0 text-[13px] text-[#007185] font-semibold">
                See more
              </div>
            </div>
          );
        })}

        
      </div>
    </div>
  );
};

export default HomeBanner;
