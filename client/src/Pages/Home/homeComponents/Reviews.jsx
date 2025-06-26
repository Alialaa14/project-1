import React, { useState } from 'react'
import SectionHeading from '../../../Components/SectionHeading'
import { customerReviews } from '../../../assets/dataTest.js'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { BiCheck } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const Reviews = () => {

    const [transform , setTransform] = useState(0)
    const [disable , setDisable] = useState(false)
const handelNext = () => {
  if (transform > -(customerReviews.length - 2) * 100) {
    setTransform(prev => prev - 100);
  }
};

const handelPrev = () => {
  if (transform < 0) {
    setTransform(prev => prev + 100);
  }
};
   
  return (
    <div className='reviews-section mt-[150px]'>
        <div className='wrapper'>
            <div className='reviews-section-container'>
                <SectionHeading h1='Customer Say!' p='Customers love our products and we always strive to please them all.'/>

                <div className='reviews-slider mt-[50px] px-[20px] lg:px-[40px] relative group'>
                    <div className='slider-container flex overflow-hidden  '>
                            <div className='btns'>
                                    <button onClick={handelNext}  className='h-[40px] w-[40px] bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]  absolute top-[50%] translate-y-[-50%] rounded-full flex-center right-0 opacity-0 transition-regular group-hover:right-[2%] group-hover:opacity-100 hover:bgColor-effect z-[1000]'>
                                                <IoIosArrowForward/>
                                   </button>
                                   <button onClick={handelPrev} className='h-[40px] w-[40px] bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] absolute top-[50%] translate-y-[-50%] rounded-full flex-center left-0 opacity-0 transition-regular group-hover:left-[2%] group-hover:opacity-100 hover:bgColor-effect z-[1000]'>
                                                <IoIosArrowBack/>
                                    </button>
                             </div>
                        {
                            customerReviews.map((CustomerReview)=>{
                                return <div className='review h-[330px]  flex overflow-hidden border-[.4px] border-gray-200 rounded-lg flex-grow-0 flex-shrink-0 basis-[100%] lg:basis-[50%] transition-regular ' style={{transform:`translateX(${transform}%)`}}>
                                            <div className='reviewer-image-profile h-full min-w-[30%] overflow-hidden hidden lg:block'>
                                                <img className='h-full w-full transition-regular hover:zoom-effect' src={CustomerReview.imageOfProfile} alt={CustomerReview.name} />
                                            </div>

                                            <div className='review-info py-[30px] mx-[20px]'>
                                                    <div className='review-rating flex'>
                                                        {
                                                        [...Array(CustomerReview.rating)].map((item)=>{
                                                            return <i>
                                                                 <FaStar size={15} color='#FC9E0E' />
                                                               </i>
                                                        })
                                                    }    
                                                    {
                                                        [...Array(5-CustomerReview.rating)].map((item)=>{
                                                            return <i>
                                                                 <CiStar size={15} color='#FC9E0E' />
                                                               </i>
                                                        })
                                                    }
                                                    </div> 

                                                    <div className='reviwer-details flex items-center mt-[10px] gap-[7px]'>
                                                        <h4 className='text-[15px] font-semibold'>{CustomerReview.customerName}</h4>
                                                        {
                                                            CustomerReview.isVerified && <p className='text-[12px] flex items-center text-gray-400'><i><BiCheck size={17}/></i><span>Verified Buyer</span></p>
                                                        }
                                                    </div>

                                                    <div className='review-content overflow-auto'>
                                                        <p className='pt-[15px] h-[140px] text-gray-400 text-[14px]'>{CustomerReview.review}</p>
                                                    </div>

                                                    <span className='gray-underline'></span>

                                                    <div className='product-of-review mt-[30px]  flex gap-[20px] items-center'>
                                                        <div className='product-img h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] overflow-hidden'>
                                                            <img className='w-full h-full rounded-full transition-regular hover:zoom-effect' src={CustomerReview.productOfReview.productimage} alt={CustomerReview.productOfReview.productname} />
                                                        </div>

                                                        <div className='name-price'>
                                                            <a href={`/product/${CustomerReview.productOfReview.productname}`}>
                                                                    <h5 className='text-[11px] lg:text-[13px] font-semibold transition-regular hover:text-red'>{CustomerReview.productOfReview.productname}</h5>
                                                            </a>

                                                            <span>${CustomerReview.productOfReview.price}</span>
                                                        </div>
                                                    </div>
                                            </div>
                                       </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews