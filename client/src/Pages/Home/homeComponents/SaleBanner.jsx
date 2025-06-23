import React, { useEffect, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { getTimeDiff } from '../../../utils/getTimeDiffernce.js';

const SaleBanner = () => {
    const [day , setDay] = useState("")
    const [hour , setHour] = useState("")
    const [minute , setMinute] = useState("")
    const [second , setSecond] = useState("")

    useEffect(()=>{
       setInterval(()=>{
           const { days , hours , minutes , seconds } = getTimeDiff("June 30, 2025 00:00:00")
           setDay(days)
           setHour(hours)
           setMinute(minutes)
           setSecond(seconds)
       } , 1000)
    })
  return (
    <div className='sale-banner mt-[150px]'>
        <div className='wrapper'>
            <div className='sale-banner-container flex flex-col lg:flex-row  gap-y-[20px] lg:gap-x-[20px]'>
                <div className='best-sale-left  relative'>
                    <div className='img h-[600px] '>
                        <img className='h-full w-full lg:w-auto rounded-lg' src={"https://glozin-demo.myshopify.com/cdn/shop/files/main-images-outfit-1-min.jpg?v=1730859153&width=480"} alt=''/>
                        <div className='absolute bottom-[10%] left-[10%]'>
                            <button className='flex gap-[10px] bg-white py-[12px] px-[20px] rounded-lg items-center transition-regular hover:bgColor-effect'>
                                <i><CiShoppingCart size={20}/></i>
                                <p className='text-[15px]'>View Products</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='sale-time'>
                    <div className='img h-[600px] relative'>
                        <img className='h-full rounded-lg w-full lg:w-auto ' src='https://glozin-demo.myshopify.com/cdn/shop/files/banner-xmani.jpg?v=1739503996&width=480' alt=''/>
                        <div className='absolute texte-center top-[40%]   text-white w-full text-center '>
                            <h5 className='uppercase text-[12px] text-center font-semibold'>DON'T MISS OUT...</h5>
                            <h2 className='mt-[20px] text-[40px] font-semibold '>Today's Big Deals</h2>
                            <p className='text-[14px] mt-[15px]'>Sale up to 75% all items. Hurry Up!</p>

                            <div className='sale-timer mt-[20px]  flex-center gap-[12px]'>
                                <div className='days flex flex-col h-[90px] w-[80px] bg-[rgba(255,255,255,.2)] border-[.5px] border-[rgba(255,255,255,.5)] rounded-[5px] flex-center '>
                                    <span className='text-[22px] font-semibold'>{day}</span>
                                    <span className='text-[15px]'>Days</span>
                                </div>

                                 <div className='hours h-[90px] flex flex-col w-[80px] bg-[rgba(255,255,255,.2)] border-[.5px] border-[rgba(255,255,255,.5)] rounded-[5px] flex-center '>
                                    <span className='text-[22px]'>{hour}</span>
                                    <span className='text-[15px]'>Hours</span>
                                </div>

                                 <div className='minutes flex flex-col h-[90px] w-[80px] bg-[rgba(255,255,255,.2)] border-[.5px] border-[rgba(255,255,255,.5)] rounded-[5px] flex-center '>
                                    <span className='text-[22px]'>{minute}</span>
                                    <span className='text-[15px]'>Minutes</span>
                                </div>

                                 <div className=' second h-[90px] flex-col w-[80px] bg-[rgba(255,255,255,.2)] border-[.5px] border-[rgba(255,255,255,.5)] rounded-[5px] flex-center '>
                                    <span className='text-[22px]'>{second}</span>
                                    <span className='text-[15px]'>Seconds</span>
                                </div>
                            </div>

                            <div className='btn mt-[50px]'>
                                <a href='collections/sale' className=' bg-white py-[13px] px-[60px] rounded-full text-black transition-regular hover:bgColor-effect'>
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='best-sale-right '>
                    <div className='img h-[600px] relative '>
                        <img className='h-full rounded-lg w-full lg:w-auto ' src={"https://glozin-demo.myshopify.com/cdn/shop/files/main-images-outfit-4-min.jpg?v=1730859154&width=480"} alt=''/>
                        <div className='absolute bottom-[10%] left-[10%]'>
                            <button className='flex gap-[10px] bg-white py-[12px] px-[20px] rounded-lg items-center transition-regular hover:bgColor-effect'>
                                <i><CiShoppingCart size={20}/></i>
                                <p className='text-[15px]'>View Products</p>
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default SaleBanner