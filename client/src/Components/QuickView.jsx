import React, { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const QuickView = ({product , showQuickView , setShowQuickView}) => {
    const [images , setImages] = useState([])
    const [Index , setIndex] = useState(0)
    const [defaultColor , setDefaultColor] = useState("")
    const [defaultSize , setDefaultSize] = useState("")

     const handelChooseColor = (e)=>{
        const color = e.currentTarget.dataset.color
        // const images = product.images.find((image)=>image.color === color)
        setDefaultColor(color)
        const imageUrl = product.images.find((image)=>image.color === color).urls[0]
        const imageIndex = images.indexOf(imageUrl)
        setIndex(imageIndex)
      }

    useEffect(()=>{
        product.images.map((image)=>{
            image.urls.map((url)=>{
                setImages((prev)=>[...prev , url])
            })
        })

        setDefaultColor(product.images[0].color)
        setDefaultSize(product.sizes[0])
        console.log(showQuickView)
    } , [])
  return (
    <div className={`quickView `}>
        <div className={`overlay bg-[rgba(0,0,0,0.2)] fixed left-0 top-0 w-full h-full flex-center z-[1002] `}>
            <div className='quickView-container relative bg-white shadow-xl w-[95%] h-[95%] md:h-[80%] rounded-[20px] grid grid-cols-12 overflow-hidden'>
                <button onClick={()=>setShowQuickView(false)} className='close absolute top-[30px] right-[20px] text-gray-400 transition-regular hover:rotate-180 z-[1000]'><IoClose size={22}/></button>
                <div className='image-container  h-[350px] md:h-[100%] min-w-[50%] relative overflow-hidden col-span-12 md:col-span-6'>
                    {
                     images.map((img , index)=>{
                        return <img  src={img} alt='' className={`w-full h-full absolute translate-x-[-100%] transition-regular duration-500 ${index===Index && "translate-x-[0%]"}`}/>
                     })
                    }

                    <button disabled={Index===0 ? true : false} onClick={()=>setIndex((prev)=>prev-1)} className={`prev absolute top-[50%] translate-y-[-50%] left-[10px] h-[40px] w-[40px]  shadow-xl flex-center rounded-full ${Index===0 ? "bg-[rgba(0,0,0,0.3)] text-white" : "text-black bg-white"}`}>
                        <IoIosArrowBack size={20}/>
                    </button>
                    <button disabled={Index===images.length-1 ? true : false} className={`next absolute top-[50%] translate-y-[-50%] right-[10px] h-[40px] w-[40px]  shadow-xl flex-center rounded-full ${Index===images.length-1 ? "bg-[rgba(0,0,0,0.3)] text-white" : "text-black bg-white"}`}>
                        <IoIosArrowForward size={20} onClick={()=>setIndex((prev)=>prev+1)}/>    
                    </button>  
                </div>

                <div className='product-details py-[20px] px-[20px] overflow-auto col-span-12 md:col-span-6'>
                    {
                        (product.discount || product.limtedStock) && <div className='discount-limitedStock flex gap-[10px]'>
                            {
                                product.discount && <span className='discount bg-red-500 py-[5px] px-[20px] text-[14px] text-white rounded-full'>-{product.discount}%</span>
                            }
                            {
                                product.limtedStock && <span className='limtedStock bg-green-500 py-[5px] px-[20px] text-[14px] text-white rounded-full'>Limted Stock</span>
                            }
                        </div>
                    }

                    <p className='mt-[10px] text-[22px] font-semibold'>{product.productname}</p>
                    <div className='rating flex mt-[10px] items-center gap-[10px] '>
                               <div className='rating-stars flex'>
                                       {
                                    [...Array(Math.floor(product.rating))].map((_,index)=>(<i key={index} ><FaStar color='#FC9E0E' size={10}/></i>))
                                  }
                                  {
                                     [...Array(5-Math.floor(product.rating))].map((_,index)=>(<i key={index}><CiStar size={10}/></i>))
                    
                                  }
                               </div>

                        <div className='review-num text-gray-500 text-[14px]'>{product.reviews} Reviews</div>
                    </div>

                    <div className='price flex items-center mt-[15px] gap-[5px]'>
                        <span className='text-[30px] text-red-600 font-semibold'>${product.finalPrice}.00</span>
                        {
                            product.discount && <span className='line-through text-gray-500 text-[17px]'>${product.price}.00</span>
                        }
                    </div>

                    <div className='desc mt-[20px]'>
                        <p className='text-gray-400'>{product.describition}</p>
                    </div>

                    <div className='color mt-[20px] text-gray-400'>
                        <span>Color : <span className='text-black font-medium'>{defaultColor}</span> </span>
                    </div>

                     <div className='colors-styles flex mt-[10px] gap-x-[10px]'>
                                  {
                                    product.images.map((image , index)=>{
                                      return <button onClick={(e)=>handelChooseColor(e)} data-color={image.color} className={`relative color-circle h-[30px] w-[30px] rounded-full group ${image.color===defaultColor && "border-[1px] border-black"}`}>
                                                <img className='rounded-full h-full w-full object-cover' src={image.urls[0]} alt="" />
                                                <span className='absolute top-[-100%] left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.7)] px-[10px] py-[2px] text-white text-[10px] invisible opacity-0 group-hover:visible group-hover:opacity-100'>{image.color}</span>
                                              </button>
                                    })
                                  }
                    </div>

                    <div className='sizes mt-[20px]'>
                        <div className=''>Size : <span className='text-black font-medium'>{defaultSize}</span></div>
                        <div className='flex mt-[10px] gap-[10px]'>
                            {
                            product.sizes.map((size)=>{
                                return <button data-size={size} onClick={(e=>setDefaultSize(e.currentTarget.dataset.size))} className={`inline-block h-[40px] w-[40px] border-[.1px] rounded-[3px] border-[rgba(255.255.255..5)] transition-regular hover:bg-[#222] hover:text-white ${size==defaultSize ? "bg-[#222] text-white" : "bg-transparent"}`}>{size}</button>
                            })
                        }
                        </div>
                    </div>

                    <div className='product-controls mt-[20px] grid grid-cols-12 '>
                        <div className='counter col-span-6 md:col-span-4'>
                            <div className='counter-input bg-gray-100 rounded-full px-[10px] w-[140px] border-[.5px] border-gray-200 font-light py-[5px] text-[25px] inline-flex items-center justify-center '>
                                <button className='decrease-btn text-gray-500'>-</button>
                                <input type='text' className='bg-transparent w-[50px] focus:outline-none text-gray-600 text-center text-[15px]'  />
                                <button className='increase-btn text-gray-500'>+</button>
                            </div>
                        </div>

                        <div className='add-cart col-span-6 md:col-span-4 '>
                            <button className='add-to-cart py-[17px] w-full bg-black text-white rounded-full text-[14px] font-medium '>Add To Cart</button>
                        </div>

                        <div className='whishlist-compare flex gap-[5px] md:gap-3 max-md:mt-[15px] col-span-4 justify-center'>
                            <button className='whishlist relative group text-gray-400 border-[.5px] border-gray-300 rounded-full w-[45px] h-[45px] flex-center transition-regular hover:bgColor-effect'>
                                <FaRegHeart size={15}/>
                                <span className='absolute  invisbile opacity-0 transition-regular group-hover:visible group-hover:opacity-100 top-[-60%] z-[9999] right-[-50%] bg-[rgba(0,0,0,.7)] text-white px-[10px] py-[2px] text-[11px] rounded-[4px]'>Whishlist</span>
                            </button>

                            <button className='compare relative group text-gray-400 border-[.5px] border-gray-300 rounded-full w-[45px] h-[45px] flex-center transition-regular hover:bgColor-effect'>
                                <IoLayersOutline size={15}/>
                            <span className='absolute invisbile opacity-0 transition-regular group-hover:visible group-hover:opacity-100 top-[-60%] z-[9999] right-[-50%] bg-[rgba(0,0,0,.7)] text-white px-[10px] py-[2px] text-[11px] rounded-[4px]'>Compare</span>

                            </button>
                        </div>

                    </div>
                        <div className='buyit mt-[40px]'>
                            <button className='buy-btn w-full rounded-full py-[15px] font-semibold bg-red-400 text-white'>Buy It Now</button>
                        </div>

                        <a href={`/product/${product.id}`} className="flex items-center gap-[1px] mt-[15px] transition-regular hover:text-red hover:underline">
                            View Full Details <span><HiOutlineChevronDoubleRight></HiOutlineChevronDoubleRight></span>
                        </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default QuickView