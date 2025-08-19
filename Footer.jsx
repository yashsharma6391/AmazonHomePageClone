import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-[#232F3E] px-12.5 py-5 flex-col items-center text-white'>
        {/* footer content  */}
        <div className='flex justify-between w-[70%] max-sm:justify-center'>
            {/* footer cont 1 */}

            <div className=''> 
              <div className='font-semibold max-sm:text-[14px]'>Get To Know Us</div>
              <div className='mt-2.5 text-[14px] max-sm:text-[10px]'>
                
                <div className='mb-2.5'>About Us</div>
                <div className='mb-2.5'>Careers</div>
                <div className='mb-2.5'>Press Releases</div>
                <div className='mb-2.5'>Amazon Science</div>
                
              </div>
            </div>

            <div> 
              <div className='font-semibold'>Contact with Us</div>
              <div className='mt-2.5 text-[14px]'>
                
                <div className='mb-2.5'>Instagram</div>
                <div className='mb-2.5'>Twitter</div>
                <div className='mb-2.5'>Facebook</div>
                {/* <div className='mb-2.5'>Amazon Science</div> */}
                
              </div>
            </div>

            <div> 
              <div className='font-semibold'>Make Money with Us</div>
              <div className='mt-2.5 text-[14px]'>
                
                <div className='mb-2.5'>Sell on Amazon</div>
                <div className='mb-2.5'>Sell under Amazon Accelerator</div>
                <div className='mb-2.5'>Protect and Build Your Brand</div>
                <div className='mb-2.5'>Amazon Global Selling</div>
                <div className='mb-2.5'>Supply to Amazon</div>
                <div className='mb-2.5'>Become an Affiliate</div>


                
              </div>
            </div>

            <div> 
              <div className='font-semibold'>Let Us Help You</div>
              <div className='mt-2.5 text-[14px]'>
                
                <div className='mb-2.5'>Your Account</div>
                <div className='mb-2.5'>Returns Centre</div>
                <div className='mb-2.5'>Recalls and Product Safety Alerts</div>
                <div className='mb-2.5'>100% Purchase Protection</div>
                
              </div>
            </div>

        </div>
        {/* footer iimg */}
        <div className='mt-10'>
            <img className='w-27.5' src="amazon.png" alt="" />
        </div>

    </div>
  )
}

export default Footer