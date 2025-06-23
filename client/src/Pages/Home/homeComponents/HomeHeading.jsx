import React  , {useState}from 'react'
import { pageHeadings } from '../../../assets/dataTest'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const HomeHeading = () => {
    const [indexHeading , setIndexHeading] = useState(0)

    const handelNext = ()=>{
        setIndexHeading((prev)=>prev===pageHeadings.length-1 ? 0 : prev+1)
    }
    const handelPrev = ()=>{
        setIndexHeading((prev)=>prev===0 ? pageHeadings.length-1 : prev-1)
    }

  return (
    <div className='heading h-[86vh] group overflow-hidden '>
        <div className='heading-container h-full relative'>
            {
                pageHeadings.map((heading , index)=>{
                    return <div className={`heading-item h-full`}>
                                <div className={`heading-img transition-regular absolute left-0 top-0 w-full h-full  ${index === indexHeading ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                    <img src={heading.img} alt={heading.h1} className='w-full h-full' />
                                </div>
                          
                                    <div className={`heading-content text-white absolute w-full left-0   ${index===indexHeading ? " bottom-[10%] " : "bottom-[-100%]"}`}>
                                       <div className='wrapper text-center lg:text-left overflow-hidden py-[20px]'>
                                         <h5 className={`mb-[10px] transition-all ease-in-out duration-500 ${index===indexHeading ? "translate-y-0" : "translate-y-[100vh]" }`}>{heading.h5}</h5>
                                        <h1 className={`text-3xl lg:text-5xl mb-[20px] transition-all ease-in-out duration-700 ${index===indexHeading ? "translate-y-0" : "translate-y-[100vh]" } `}>{heading.h1}</h1>
                                        <a href={heading.path} className={`inline-block bg-black rounded-full py-[13px] px-[40px] transition-all ease-in-out duration-[1000ms] ${index===indexHeading ? "translate-y-0" : "translate-y-[100vh]" }`}>{heading.button}</a>
                                       </div>
                                    </div>
                              
                                <div className='btns'>
                                    <button onClick={handelNext} className='h-[40px] w-[40px] bg-white absolute top-[50%] translate-y-[-50%] rounded-full flex-center right-0 opacity-0 transition-regular group-hover:right-[2%] group-hover:opacity-100'>
                                        <IoIosArrowForward/>
                                    </button>
                                    <button onClick={handelPrev} className='h-[40px] w-[40px] bg-white absolute top-[50%] translate-y-[-50%] rounded-full flex-center left-0 opacity-0 transition-regular group-hover:left-[2%] group-hover:opacity-100'>
                                        <IoIosArrowBack/>
                                    </button>
                                </div>
                            </div>
                })
            } 
        </div>
    </div>
  )
}

export default HomeHeading