import React from 'react'
import { socialMedia } from '../assets/dataTest'

const Footer = () => {
  return (
    <footer className='py-[80px] border-y-[.5px] border-gray-200 mt-[40px]'>
        <div className='wrapper'>
            <div className='footer-container text-gray-500 text-[15px] grid grid-cols-12 gap-[30px] lg:gap-x-[20px] '>
                <div className='help-customer col-span-6 lg:col-span-4'>
                    <h3 className='font-bold text-[16px] lg:text-[18px] text-black mb-[20px]'>Help Customer</h3>
                    <p>Find a location nearest you to reduce shipping costs and make</p>
                    <p>shopping easier. <a href='/' className='underline text-black font-semibold hover:text-red'>Show on google maps.</a></p>
                  <p className='mt-[20px]'> <a href='tel:01006610650' className='phone transition-regular hover:text-red text-black'>01006610650</a></p>
                  <p> <a href='alifouda1474@gmail.com' className='phone transition-regular hover:text-red text-black'>info@fashionwomen.com</a></p>

                    <div className='social-media mt-[20px] flex gap-[15px]'>
                        {
                            socialMedia.map((item)=>{
                                return <a href='/' className='inline-flex items-center justify-center '>{item.svg}</a>
                            })
                        }
                    </div>
                </div>

                <div className='our-company flex flex-col gap-y-[10px] col-span-6 lg:col-span-2'>
                    <h3 className='font-bold text-[16px] lg:text-[18px] text-black mb-[10px]'>Our Company</h3>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>About Us</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Contact Us</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Sale</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Our Store</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>FAQ</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Store Location</a></p>
                </div>
                <div className='shop-categories flex flex-col gap-y-[10px] col-span-6 lg:col-span-2'>
                    <h3 className='font-bold text-[16px] lg:text-[18px] text-black mb-[10px]'>Shop Categories</h3>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Best Seller</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Hot Deals</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Sale & Special Offers</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Activewear</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Popular Trends</a></p>
                    <p><a href='/' className='transition-regular hover:text-red text-black'>Croptop</a></p>
                </div>
                
                <div className='signup-newsletter col-span-6 lg:col-span-4 '>
                    <h3 className='font-bold text-[16px] lg:text-[18px] text-black mb-[10px]'>Sign Up For Our Newsletter</h3>
                    <p className='mb-[20px]'>Sign up for 10% off your first purchase and free shipping. Updates information on Sales and Offers</p>
                    <div className='signup-newsletter-form flex flex-col lg:flex-row gap-y-[10px] gap-x-[10px]'>
                        <input type='text' placeholder='Enter your email ' className='border-[.5px] border-gray-300 py-[10px] ps-[10px] rounded-full focus:outline-none'></input>
                        <button className='bg-black text-white py-[10px] px-[50px] rounded-full'>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer