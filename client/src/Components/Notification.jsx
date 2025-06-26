import React , {useRef, useState} from 'react'
import { notifications } from '../assets/dataTest'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const Notification = () => {
    const [activeIndex , setActiveIndex] = useState(0)
    const directionRef = useRef(null)

    const handlePrev = ()=>{
        directionRef.current="left"
        setActiveIndex(activeIndex === 0 ? notifications.length - 1 : activeIndex - 1)
    }

    const handleNext = ()=>{
        directionRef.current="right"
        setActiveIndex(activeIndex === notifications.length - 1 ? 0 : activeIndex + 1)
    }
  return (
    <div className='notification flex  '>
        <div className='notification-container flex gap-[10px]  '>
              <div className='notification-controls flex'>
                <button onClickCapture={handlePrev} className='prev text-white'>
                    <IoIosArrowBack/>
                </button>
                <button onClick={handleNext} className='next text-white'>
                    <IoIosArrowForward/>
                </button>
            </div>
            <div className='notification-slider flex min-w-[350px]  overflow-hidden items-center  relative'>
                {
                    notifications.map((item , index)=>{
                        return <div className={`notification-item text-white flex  absolute text-[10px] lg:text-[12px] transition-regular-transform  ${index === activeIndex ? "translate-x-[0%] visible" :  `invisible ${directionRef.current==="right" ? "translate-x-[100%]" : "translate-x-[-100%]"}` } `} key={item.id}>
                            <p>{item.message}</p>
                            <a className='font-bold' href={item.link}>{item.buttonName}</a>
                         </div>   
                    })
                }
            </div>
          
        </div>
    </div>
  )
   
}

export default Notification