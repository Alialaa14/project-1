import React, { useEffect, useState } from 'react'
import Notification from './Notification' 
import { IoIosArrowDown } from "react-icons/io";
import { currencies } from '../assets/dataTest';

const UpPageBar = () => {
    const [curreny , setCurrency] = useState( {
    "flag": "https://flagcdn.com/us.svg",
    "country": "United States",
    "symbol": "$",
    "currency": "US Dollar"
  })
  const [showCurrency , setShowCurrency] = useState(false)
  


  return (
    <div className='up-page-bar bg-black py-[10px]'>
        <div className='up-page-bar-container justify-center  lg:flex-between px-[20px] '>
            <Notification/>

            <div className='up-page-bar-right hidden lg:flex items-center text-[13px] font-bold text-white gap-[20px]'>
                <a href='/help-center' className='capitalize'>help center</a>
                <a href='/AboutUs' className='capitalize'>about us</a>
                <a href='/our-store' className='capitalize'>our store</a>

                <button onClick={() => setShowCurrency(!showCurrency)} className='currency flex gap-[7px] items-center relative '>
                    <div className='currency-country-img h-[24px] w-[24px]'>
                        <img className='h-full w-full object-cover rounded-full' src={curreny.flag} alt={curreny.currency} />
                    </div>

                    <div className='currency-details text-[12px] font-semibold'>
                       <span>{curreny.country} ({curreny.currency+" " + curreny.symbol})</span>
                    </div>

                    <div className='currency-arrow text-[12px] font-semibold'>
                        <span className={`transition-all ease-in-out duration-300 block ${showCurrency ? "rotate-180" : "rotate-0"}`}>
                            <IoIosArrowDown/>
                        </span>
                    </div>

                    <div className={`currency-list absolute z-50 py-[20px] ps-[5px]  right-0 min-w-[250px]   bg-white shadow-lg transition-all ease-in-out duration-300 ${showCurrency ? " visible opacity-100 top-[122%] " : "invisible opacity-0 top-[240%]"}`}>
                        <div className='currency-list-container '>
                            <ul className='flex flex-col gap-[15px]' >
                                {
                                    currencies.map((currency)=>{
                                        return <li className='text-black ' >
                                                    <button className='flex items-center gap-[4px]' onClick={() => setCurrency({ flag: currency.flag, country: currency.country, symbol: currency.symbol, currency: currency.currency})}>
                                                        <div className='currency-country-img h-[22px] w-[22px]'>
                                                            <img className='h-full w-full object-cover rounded-full' src={currency.flag} alt={currency.currency} />
                                                        </div>
                                                        <div className='currency-details text-[12px] font-semibold'>
                                                           <span>{currency.country} ({currency.currency+" " + currency.symbol})</span>
                                                        </div>
                                                    </button>
                                               </li>
                                    })
                                }
                            </ul>
                        </div> 
                    </div>  
                </button>
            </div>
        </div>
    </div>
  )
}

export default UpPageBar