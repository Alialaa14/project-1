import React  , {useState}from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { showMobileNavbar } from '../storeSlices/PageSetting';

const MobileNavbar = () => {
    const dispatch = useDispatch()
    const [activeBtn , setActiveBtn] = useState("menu") 
    const [showSidebar , setShowSidebar] = useState(false)
    const VshowMobileNavbar = useSelector(state => state.pageSetting.VshowMobileNavbar)
    

    const handleNavbar = (e)=>{
        setActiveBtn(e.target.dataset.name) 
    }
  return (
    <div className={`navbar-mobile block lg:hidden `}>
        <div className={` overlay fixed top-0 left-0 w-full h-screen z-[1000] bg-[rgba(0,0,0,0.5)]  transition-regular ${VshowMobileNavbar ? "translate-x-0" : "translate-x-[-100%]"}`}>
            <div className='navbar-mobile-container w-[90%] h-full bg-white overflow-y-auto overflow-x-hidden relative'>
                <div className='navbar-header text-white bg-red-500 px-[30px] py-[15px] flex gap-[34px] relative'>
                    <button onClick={handleNavbar} data-name = "menu" className={`font-semibold  transition-regular ${activeBtn == "menu" ? "text-white" : "text-[rgba(255,255,255,0.6)]"  }`}>Menu</button>
                    <button onClick={handleNavbar} data-name="categories" className={`font-semibold transition-regular ${activeBtn == "categories" ? "text-white" : "text-[rgba(255,255,255,0.6)]"  }`}>Categories</button> 
                    <button>
                        <IoClose size={24} className='text-white absolute right-[5%] top-[50%] translate-y-[-50%]' onClick={()=>dispatch(showMobileNavbar(false))}/></button>   
                </div>
                <div className='navbar-content'>
                     <div className='menu-content px-[30px] py-[15px] flex flex-col gap-[25px] '>
                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Home</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>
                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>About</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>

                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Contact</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>  

                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Blog</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>  

                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Shop</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>

                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Login</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>

                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Register</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>

                         <button onClick={()=>setShowSidebar(true)} className='font-semibold text-[15px] relative w-full text-left'>
                            <span className='block pb-[15px]'>Cart</span>
                            <span className='gray-underline'></span>
                            <i className='text-gray-400 absolute right-0 top-[50%] translate-y-[-50%] pb-[15px]'><IoIosArrowForward/></i>
                         </button>
                     </div>   
                </div>

                <div className={`navbar-content-sideBar-menu absolute top-0 right-0 w-[100%] h-full bg-white transition-regular ${showSidebar ? "translate-x-0" : "translate-x-[100%]"} `}>
                    <div className='navbar-content-sidebar-header bg-gray-100 border-b-[.5px] border-b-gray-200 px-[30px] py-[15px] flex gap-[20px] relative'>
                            <button onClick={()=>setShowSidebar(false)} className='move-to-navbar text-gray-500'>
                                <IoIosArrowBack size={17}/>
                            </button>
                            <p className='font-semibold'>Home</p>
                            <button onClick={()=>{dispatch(showMobileNavbar(false)) ; setShowSidebar(false)}}  className='close-navbar absolute right-[5%]  top-[50%] translate-y-[-50%]'>
                                <IoClose size={20}/>
                            </button>
                    </div>
                </div> 
            </div>
        </div>    
    </div>
  )
}

export default MobileNavbar