import React, { useState } from 'react'
import SectionHeading from '../../../Components/SectionHeading'
import { shopByGram } from '../../../assets/dataTest.js'
import { CiShoppingCart } from "react-icons/ci";

const ShopByGram = () => {
    const [showPopup , setShowPopup] = useState(false)
  return (
    <div className='shop-by-gram mt-[150px]'>
        <SectionHeading h1='Shop By Gram' p='Unmatched design—superior performance and customer satisfaction in one.'/>
        <div className='wrapper'>
            <div className='shop-by-gram-container grid grid-cols-12 mt-[50px] justify-items-center  gap-y-[20px]  lg:gap-x-[10px] '>
                {
                    shopByGram.map((item)=>{
                        return <div className='item h-[200px] w-[190px]  col-span-12 lg:col-span-2  relative'>
                                    <div className='image h-full'>
                                        <img className='h-full w-full rounded-lg' src={item} alt=''/>
                                    </div>
                                    <button onClick={()=>setShowPopup(true)} className='absolute top-[10px] right-[10px] shop text-white bg-black w-[30px]  h-[30px] flex-center rounded-full'>
                                        <CiShoppingCart size={17}/>
                                    </button>
                                </div>
                    })
                }
            </div>
        </div>

        <div className={`popup-product transition-regular ${showPopup ? "visible opacity-100 " : "invisible opacity-0"}`}>
            <div className='overlay bg-[rgba(0,0,0,0.5)] fixed left-0 top-0 w-full h-full flex-center  z-[100]'>
                    <div className={`gram-product bg-white w-[80%] h-[90%] lg:w-[80%] lg:h-[60%] rounded-lg transition-regular duration-500 }`}>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default ShopByGram