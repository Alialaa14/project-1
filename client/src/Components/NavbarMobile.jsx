import React from 'react'
import { CiHome } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiShop } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const NavbarMobile = () => {
  return (
    <div className='navbar-mobile block lg:hidden'>
        <div className='navbar-mobile-container bg-white shadow-inner fixed left-0 bottom-0 w-full px-[30px] py-[14px] z-[1000]'>
            <div className='flex justify-between items-center'>
                <a href='/' className='flex flex-col items-center'>
                    <i className='transition-regular hover:text-red'><CiHome size={20}/></i>
                    <span className='text-[12px] font-medium'>Home</span>
                </a>
                <a href='/Account' className='flex flex-col items-center '>
                    <i className='transition-regular hover:text-red'><VscAccount size={20}/></i>
                    <span>Account</span>
                </a>

                <a href='/collections' className='flex flex-col items-center'>
                    <i className='transition-regular hover:text-red'><CiShop size={20}/></i>
                    <span className='text-[12px] font-medium'>Shop</span>
                </a>
                <a href='/whishlist' className='flex flex-col items-center relative'>
                    <i className='transition-regular hover:text-red'><FaRegHeart size={20}/></i>
                    <span className='text-[12px] font-medium'>Whish List</span>
                    <span className='h-[20px] w-[20px] absolute text-white bg-red-400 rounded-full flex-center text-[10px] top-[-20%] right-[20%] '>5</span>
                </a>

                 <a href='/cart' className='flex flex-col items-center relative'>
                    <i className='transition-regular hover:text-red'><CiShoppingCart size={20}/></i>
                    <span className='text-[12px] font-medium'>Cart</span>
                    <span className='h-[20px] w-[20px] absolute text-white bg-red-400 rounded-full flex-center text-[10px] top-[-20%] right-[-40%] '>5</span>

                </a>

                 

                
            </div>
        </div>
    </div>
  )
}

export default NavbarMobile