import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'
import Footer from '../../Components/Footer/Footer'

const HomeScreen = () => {
  return (
    <div className='flex flex-col text-black w-full border border-solid  gap-10'>
        <HomeBanner/>
        <HomeDetails/>
        <Footer/>
    </div>
  )
}

export default HomeScreen