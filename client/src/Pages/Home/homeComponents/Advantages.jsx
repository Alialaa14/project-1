import React, { useState } from 'react'
import { PiShippingContainer } from "react-icons/pi";
import { VscVerified } from "react-icons/vsc";
import { FaRocketchat } from "react-icons/fa6";
const Advantages = () => {
    const [showedIndex , setshowedIndex] = useState(0)
    const handelCarousel = (e)=>{
        const index = Number(e.target.dataset.index ); 
        setshowedIndex(index)
    }
  return (
    <div className='advantages mt-[150px] '>
        <div className='wrapper relative h-[200px] '>
            <div className='advantages-container  overflow-hidden '>
                <div className='advantages-lg-screens hidden lg:flex'>
                    <div className={` advantage-item text-center flex  flex-col items-center gap-y-[10px] `}>
                        <i><PiShippingContainer size={40}/></i>
                        <h3 className='font-bold'>Free Shipping</h3>
                        <p className='text-gray-400'>Enjoy free worldwide shipping and returns, with customs and duties taxes included.</p>
                    </div>

                   <div className={` advantage-item text-center flex  flex-col items-center gap-y-[10px]   `}>
                        <i><VscVerified size={40}/></i>
                        <h3 className='font-bold'>Free Shipping</h3>
                        <p className='text-gray-400'>Free returns within 15 days, please make sure the items are in undamaged condition..</p>
                   </div>

                   <div className={`advantage-item text-center flex  flex-col items-center gap-y-[10px]  `}>
                        <i><PiShippingContainer size={40}/></i>
                        <h3 className='font-bold'>Support Online</h3>
                        <p className='text-gray-400'>We support customers 24/7, send questions we will  solve for you immediately.</p>
                   </div>

                </div>

                <div className='advantages-sm-screens block lg:hidden overflow-hidden'>
                        <div className={`absolute left-[50%] translate-x-[-50%]  advantage-item text-center flex  flex-col items-center gap-y-[10px] opacity-0 transition-regular ${showedIndex===0 && "opacity-100"} `}>
                        <i><PiShippingContainer size={40}/></i>
                        <h3 className='font-bold'>Free Shipping</h3>
                        <p className='text-gray-400'>Enjoy free worldwide shipping and returns, with customs and duties taxes included.</p>
                    </div>

                   <div className={` absolute left-[50%] translate-x-[-50%]  advantage-item text-center flex  flex-col items-center gap-y-[10px]  opacity-0 transition-regular ${showedIndex===1 && "opacity-100"} `}>
                        <i><VscVerified size={40}/></i>
                        <h3 className='font-bold'>Free Shipping</h3>
                        <p className='text-gray-400'>Free returns within 15 days, please make sure the items are in undamaged condition..</p>
                   </div>

                   <div className={` absolute  left-[50%] translate-x-[-50%] advantage-item text-center flex  flex-col items-center gap-y-[10px]  opacity-0 transition-regular ${showedIndex===2 && "opacity-100"}`}>
                        <i><PiShippingContainer size={40}/></i>
                        <h3 className='font-bold'>Support Online</h3>
                        <p className='text-gray-400'>We support customers 24/7, send questions we will  solve for you immediately.</p>
                   </div>
                </div>
                 <div className='carousel-mobile absolute flex-center lg:hidden  bottom-0  left-[50%] translate-x-[-50%] '>
                    <div className='carousel-btns flex gap-[6px]'>
                        <button onClick={(e)=>handelCarousel(e)} data-index='0' className={`w-[6px] h-[6px]  transition-regular rounded-full ${showedIndex===0 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                        <button onClick={(e)=>handelCarousel(e)} data-index='1' className={`w-[6px] h-[6px]  transition-regular  rounded-full  ${showedIndex===1 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                        <button onClick={(e)=>handelCarousel(e)} data-index  ='2' className={`w-[6px] h-[6px] transition-regular  rounded-full  ${showedIndex===2 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages