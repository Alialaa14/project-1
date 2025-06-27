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
import ShopByGram from './homeComponents/ShopByGram'
import Advantages from './homeComponents/Advantages'
import Footer from '../../Components/Footer'
import NavbarMobile from '../../Components/NavbarMobile'

const Home = () => {
  return (
    <div >
      <UpPageBar/>
      <Navbar/>
      <NavbarMobile/>
      <MobileSearch/>
      <MobileNavbar/>
      <HomeHeading/>
      <TopCollections/>
      <BestSelling/>
      <SaleBanner/>
      <MovingAnimation/>
     <Reviews/>
     <OrientationBanner/>
     <ShopByGram/>
     <Advantages/>
     <Footer/>

    </div>
  )
}

export default Home