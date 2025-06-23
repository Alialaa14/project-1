import React  , {useEffect, useState} from 'react'
import SectionHeading from '../../../Components/SectionHeading'

const OrientationBanner = () => {
    const [closeBanner , setCloseBanner] = useState(false)

    useEffect(()=>{
        const wrapper = document.querySelector(".wrapper")
        console.log(wrapper)
        wrapper.addEventListener("click" , () => console.log("hi"))
       
    }
        ,[]    )
  return (
    <div className='orientation-banner mt-[150px] relative'>
        <SectionHeading h1={"Hello! Everyday for Women's"}/>
        <div className={`wrapper text-center px-[30px]  lg:px-[160px] transition-regular  ${closeBanner ? "h-[280px]" : "h-[90px]"}  overflow-hidden`}>
            <p className='text-[15px] lg:py-[10px]'>Discover a collection of timeless wardrobe essentials, seamlessly transitioning from work to weekend. Inspired by travel, our America-designed pieces prioritize sustainability with natural fibers and mindful practices. Explore a range of
                <span className='font-semibold underline'> tops,</span>  
                <span className='font-semibold underline'> bottoms, </span> 
                <span className='font-semibold underline'> sweaters, </span>
                and accessories in versatile styles, featuring high-quality materials like cotton, linen, tencel, and wool.
                <p className='mt-[30px]'>Each piece is crafted with meticulous attention to detail, ensuring a perfect blend of comfort and elegance. Our designs emphasize clean lines and sophisticated silhouettes, making them suitable for any occasion. Whether you’re dressing up for a night out or keeping it casual, our collection offers endless styling possibilities. Embrace the essence of effortless chic with our thoughtfully designed wardrobe staples, and experience the harmony of style, quality, and sustainability. Join us in redefining modern fashion with a conscience.</p>
            </p>

            {
                closeBanner ? <button onClick={()=>setCloseBanner(false)} className='closeBanner underline absolute bottom-[-50px] left-[50%] translate-x-[-50%] mt-[10px] font-semibold'>Hide less Information</button> : <button onClick={()=>setCloseBanner(true)} className='openBanner underline absolute bottom-[-20px] left-[50%] translate-x-[-50%] font-semibold'>See all Information</button>
            }
        </div>
    </div>
  )
}

export default OrientationBanner