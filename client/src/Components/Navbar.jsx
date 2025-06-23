import React , {useState} from 'react'
import logo from "../assets/logo.svg"
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import {useDispatch } from "react-redux"
import {showMobileSearch , showMobileNavbar} from "../storeSlices/PageSetting.js"


const Navbar = () => {
    const [showSearchView , setShowSearchView] = useState(false)
    const dispatch = useDispatch()
  return (
    <div className='navbar'>
        <div className='navbar-container bg-white shadow-xl relative'>
            <div className='wrapper py-[20px] flex items-center justify-between lg:justify-start'>
                <button onClick={()=>dispatch(showMobileNavbar(true))} className='list-mobile block lg:hidden'>
                    <BsList size={30}/>
                </button>
                <div className='navbar-logo lg:min-w-[250px] '>
                    <img src={logo} alt='logo'></img>
                </div>

                <div className='navbar-links hidden lg:block'>
                    <ul className='flex gap-[20px]'>
                        <li>
                            <a href='/' className='flex items-center gap-1 text-[17px] font-medium transition-regular hover:underline hover:text-red'>
                                <span>Home</span>
                                <i className='text-[12px]'><IoIosArrowDown/></i>
                            </a>
                            
                        </li>

                        <li>
                            <a href='/collections' className='flex items-center gap-1 text-[17px] font-medium transition-regular hover:underline hover:text-red'>
                                <span>Shop</span>
                                <i className='text-[12px]'><IoIosArrowDown/></i>
                            </a>
                            
                        </li>

                         <li>
                            <a href='/products' className='flex items-center gap-1 text-[17px] font-medium transition-regular hover:underline hover:text-red'>
                                <span>Products</span>
                                <i className='text-[12px]'><IoIosArrowDown/></i>
                            </a>
                            
                        </li>

                         <li>
                            <a   className='flex items-center cursor-pointer gap-1 text-[17px] font-medium transition-regular hover:underline hover:text-red'>
                                <span>Pages</span>
                                <i className='text-[12px]'><IoIosArrowDown/></i>
                            </a>
                            
                        </li>
                         <li>
                            <a href='/blogs' className='flex items-center gap-1 text-[17px] font-medium transition-regular hover:underline hover:text-red'>
                                <span>Blogs</span>
                                <i className='text-[12px]'><IoIosArrowDown/></i>
                            </a>
                            
                        </li>


                         <li>
                            <a href='/sale' className='flex items-center gap-1 text-[17px] font-medium transition-regular hover:underline hover:text-red'>
                                <span>Sale</span>
                                <i className='text-[12px]'><IoIosArrowDown/></i>
                            </a>
                            
                        </li>
                        
                    </ul>
                </div>

                <div className='navbar-search ms-[50px] me-[20px] hidden lg:block'>
                    <div className='navbar-search-container border-[.5px] border-gray-200 flex items-center gap-[5px] rounded-full py-[6px] ps-[10px]'>
                        <button onClick={()=> setShowSearchView(true)}>
                            <i className='text-[20px]'><IoIosSearch/></i>
                        </button>

                        <input onFocus={()=> setShowSearchView(true)} className='focus:outline-none' type='text' placeholder="I'm Looking for..."></input>
                    </div>

                    <div className={`navbar-search-overlay absolute w-full z-[1000] left-0 h-screen bg-[rgba(0,0,0,0.5)] mt-[20px] ${showSearchView ? "visible" : "invisible" }`}>
                        <div className={`bg-white transition-all ease-in-out duration-300 shadow-lg border-t-[.5px] overflow-hidden border-t-gray-300  ${showSearchView ? "h-[70vh]" : "h-[0]" }`}>

                    </div>
                    </div>
                </div>

                <div className='navbar-controls lg:ms-[20px]'>
                    <div className='navbar-controls-container flex items-center gap-[16px] lg:gap-[24px]'>
                            <button className='transition-regular hover:text-red hidden lg:block'>
                                <IoPersonOutline size={20}/>

                            </button>

                             <a href='/wishlist' className='transition-regular hover:text-red relative hidden lg:block'>
                                <FaRegHeart size={20}/>
                                <span className='absolute rounded-full h-[18px] w-[18px] bg-red text-white text-[11px] flex items-center justify-center top-[-9px] right-[-9px]  '>2</span>
                            </a>

                            <button onClick={()=>dispatch(showMobileSearch(true))} className='transition-regular hover:text-red lg:hidden block'>
                                <IoIosSearch size={24}/>
                            </button>

                             <button className='transition-regular hover:text-red relative'>
                                <CiShoppingCart size={23}/>
                                <span className='absolute rounded-full h-[18px] w-[18px] bg-red text-white text-[11px] flex items-center justify-center top-[-9px] right-[-9px]  '>2</span>

                            </button>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar