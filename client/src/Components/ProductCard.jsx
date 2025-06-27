import React, { useEffect , useState } from 'react'
import { product } from '../assets/dataTest.js'
import { FaRegHeart } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import QuickView from './QuickView.jsx';

const ProductCard = () => {
  const [defualtImages , setDefaultImages] = useState({image1:"" , image2:""})
  const [defaultColor , setDefaultColor] = useState("")
  const [onHover , setOnHover] = useState(false)
  const [showQuickView , setShowQuickView] = useState(false)
  
  const handelChooseColor = (e)=>{
    const color = e.currentTarget.dataset.color
    const images = product.images.find((image)=>image.color === color)
    setDefaultImages({image1:images.urls[0] , image2:images.urls[1]})
    setDefaultColor(color)
   
  }

  useEffect(()=>{
    setDefaultImages({image1:product.images[0].urls[0] , image2:product.images[0].urls[1]})
    setDefaultColor(product.images[0].color)
  }, [])
  return (
    <div className='product-card relative mt-[50px]'>
      <div className='wrapper'>
         <div className='product-card-container'>
           <div onMouseEnter={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)}  className=' product-images-container relative '>
            <a className='product' href={'/product/'+product.id}>
                   <div className='product-image h-[250px] lg:h-[400px] '>
                      <img className={`absolute h-full  w-full  rounded-lg transition-regular  ${onHover && "opacity-0"}`} src={defualtImages.image1}/>
                      <img className={`absolute h-full  w-full  rounded-lg transition-regular ${!onHover && "opacity-0"}`} src={defualtImages.image2}/>
                    </div>
            </a>

            <div className={`side-img-controls  absolute top-[10px] right-[10px] hidden lg:flex flex-col gap-[10px]  transition-regular ${onHover ? "opacity-100 translate-x-[0]" :"opacity-0 translate-x-[100%]" }`}>
                <button className='relative add-wishlist h-[35px] w-[35px] flex-center bg-white rounded-full text-black transition-regular hover:bgColor-effect group'>
                  <FaRegHeart size={14} />
                  <span className='absolute min-w-max text-[10px] bg-[rgba(0,0,0,0.7)] rounded-[5px] top-[50%] translate-y-[-50%] right-[130%] px-[10px] py-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white'>Add To Whish List</span>
                </button>
                <button className=' relative compare h-[35px] w-[35px] flex-center bg-white rounded-full text-black transition-regular hover:bgColor-effect group'>
                  <IoLayersOutline size={14} />
                  <span className='absolute min-w-max text-[10px] bg-[rgba(0,0,0,0.7)] rounded-[5px] top-[50%] translate-y-[-50%] right-[130%] px-[10px] py-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white'>Compare</span>
                </button>
                <button className=' relative add-wishlist h-[35px] w-[35px] flex-center bg-white rounded-full text-black transition-regular hover:bgColor-effect group'>
                  <IoEyeOutline size={14} />
                  <span className='absolute min-w-max text-[10px] bg-[rgba(0,0,0,0.7)] rounded-[5px] top-[50%] translate-y-[-50%] right-[130%] px-[10px] py-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white'>Quick View</span>

                </button>
            </div>

            <div className={`side-img-controls-mobile  absolute bottom-[10px] right-[10px] flex lg:hidden flex-col gap-[2px] `}>
                <button className='relative add-wishlist h-[35px] w-[35px] flex-center bg-white rounded-full text-black transition-regular hover:bgColor-effect group'>
                  <FaRegHeart size={14} />
                  <span className='absolute min-w-max text-[10px] bg-[rgba(0,0,0,0.7)] rounded-[5px] top-[50%] translate-y-[-50%] right-[130%] px-[10px] py-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white'>Add To Whish List</span>
                </button>
                <button className=' relative compare h-[35px] w-[35px] flex-center bg-white rounded-full text-black transition-regular hover:bgColor-effect group'>
                  <IoLayersOutline size={14} />
                  <span className='absolute min-w-max text-[10px] bg-[rgba(0,0,0,0.7)] rounded-[5px] top-[50%] translate-y-[-50%] right-[130%] px-[10px] py-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white'>Compare</span>
                </button>
                <button onClick={()=>setShowQuickView(true)} className=' relative add-wishlist h-[35px] w-[35px] flex-center bg-white rounded-full text-black transition-regular hover:bgColor-effect group'>
                  <IoEyeOutline size={14} />
                  <span className='absolute min-w-max text-[10px] bg-[rgba(0,0,0,0.7)] rounded-[5px] top-[50%] translate-y-[-50%] right-[130%] px-[10px] py-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white'>Quick View</span>

                </button>
            </div>

           {
            (product.discount >0 || product.limtedStock ) && 
              <div className='product-PROPS absolute top-[10px] left-[10px]  '>
                  {
                    product.discount>0 &&   <div className='discount inline-block   text-white bg-red-800 text-[12px] text-center px-[14px]  py-[5px] rounded-full ' >-{product.discount}%</div>
                  }
                  {
                    product.limtedStock && <div className='limitedStock  text-white bg-green-800 text-[12px] px-[20px] py-[5px] rounded-full mt-[5px] '>Limited Stock</div>
                  }

              </div>
           
           }

           <button onClick={()=>setShowQuickView(true)} className={`selectOptionsBtn hidden lg:block absolute bottom-[7%] left-[50%] translate-x-[-50%]  bg-white w-[90%] h-[45px] text-[14px] font-semibold rounded-full transition-all ease-in-out  duration-500 hover:bgColor-effect ${onHover ? " opacity-100 translate-y-[0px]" : "translate-y-[30px] opacity-0"}`}>
                Select Options
           </button>
           </div>

           <div  className='product-details flex flex-col items-center mt-[10px]'>
            <a href={`/product/ ${product.id}`} className='font-semibold text-[13px] lg:text-[15px] transition-regular hover:text-red'>{product.productname}</a>
            <div className='rating flex'>
              {
                [...Array(Math.floor(product.rating))].map((_,index)=>(<i key={index} ><FaStar color='#FC9E0E' size={15}/></i>))
              }
              {
                 [...Array(5-Math.floor(product.rating))].map((_,index)=>(<i key={index}><CiStar size={15}/></i>))

              }
            </div>
            <div className='price mt-[5px] font-medium'>
              {
                product.price + ".000$"
              }
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

           </div>


           {showQuickView && <QuickView showQuickView={showQuickView} setShowQuickView={setShowQuickView} product={product}/> }
         </div>
      </div>
    </div>
  )
}

export default ProductCard