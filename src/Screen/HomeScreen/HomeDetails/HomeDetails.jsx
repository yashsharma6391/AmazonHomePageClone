import React from "react";
import './homeDetails.css'

const HomeDetails = () => {
  return (
    <div className="flex flex-col box-border bg-[rgb(238,235,235)] w-full p-5 gap-5">
      {/* --home details long card title--- */}
      <div className={`w-full box-border p-[15px] bg-white `}>
        <div className="text-[21px] font-semibold">Today's Deals</div>
        {/* items */}
        <div className={`flex mt-2.5 gap-2.5 w-full h-full box-border px-2 py-0 overflow-hidden  `}>
          {/* scrooll div */}
          <div className={`flex  w-full gap-[15px] overflow-x-auto  scrollDiv  `}>

            {/* single item div */}
            <div className={`flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden`}>
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

            <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>


            <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-full">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="w-full box-border p-[15px] bg-white">
        <div className="text-[21px] font-semibold">Today's Offers</div>
        {/* items */}
        <div className="flex mt-2.5 gap-2.5 w-full h-full box-border px-2 py-0 overflow-hidden">
          {/* scrooll div */}
          <div className="flex  w-full gap-[15px] overflow-x-auto scrollDiv">

            {/* single item div */}
            <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>
             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

           <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%] max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)] max-sm:w-[10%]  max-sm:hidden">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>



             <div className="flex flex-col shrink-0 cursor-pointer w-[17%] items-center box-border p-2 bg-[rgb(247,247,247)]  max-sm:w-full">
              <img
                className="w-3/5"
                src="https://m.media-amazon.com/images/I/81cqbgwaadL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
                alt=""
              />
              {/*  detail of product */}
              <div className="flex flex-col w-full">
                {/* Top detail of product */}
                <div className="flex gap-[5px]">
                  <div className="px-1 py-1.5 bg-[#CC0C39] text-[12px] font-medium rounded-[2px] text-white max-sm:text-[9px]">
                    Up to 20% off
                  </div>
                  <div className="flex items-center text-[12px] max-sm:text-[9px]">
                    Limited Time Deal
                  </div>
                </div>
                {/* botom detail */}
                <div className="text-[12px] px-[2px] py-0 max-sm:text-[9px]">
                  ₹2,998.00 M.R.P: ₹4,499.00 Get it by Tuesday, August 19 FREE
                  Delivery by Amazon
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
