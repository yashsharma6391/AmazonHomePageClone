import React from 'react'
import NavbarBelt from './NavbarBelt/NavbarBelt'
import NavbarBanner from './NavbarBanner/NavbarBanner'

const Navbar = () => {
  return (
    <div className='flex flex-col border border-solid  w-full  z-10'>
       <NavbarBelt className=''/>
       <NavbarBanner/>
    </div>
  )
}

export default Navbar