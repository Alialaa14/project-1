import React from 'react'
import UpPageBar from '../../Components/UpPageBar'
import Navbar from '../../Components/Navbar'
import HomeHeading from './homeComponents/HomeHeading'
import MobileSearch from '../../Components/MobileSearch'
import MobileNavbar from '../../Components/MobileNavbar'
import { TopCollections } from './homeComponents/TopCollections'
import BestSelling from './homeComponents/BestSelling'
import SaleBanner from './homeComponents/SaleBanner'
import MovingAnimation from '../../Components/MovingAnimation'
import Reviews from './homeComponents/Reviews'
import OrientationBanner from './homeComponents/OrientationBanner'

const Home = () => {
  return (
    <div >
      <UpPageBar/>
      <Navbar/>
      <MobileSearch/>
      <MobileNavbar/>
      <HomeHeading/>
      <TopCollections/>
      <SaleBanner/>
      <MovingAnimation/>
     <Reviews/>
     <OrientationBanner/>

    </div>
  )
}

export default Home