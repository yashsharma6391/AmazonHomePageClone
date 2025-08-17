import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'
import Footer from '../../Components/Footer/Footer'

const HomeScreen = () => {
  return (
    <div className='text-black w-full border border-solid '>
        <HomeBanner/>
        <HomeDetails/>
        <Footer/>
    </div>
  )
}

export default HomeScreen