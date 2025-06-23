import React  , {useEffect, useState} from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from "react-icons/io5";
import {useSelector , useDispatch} from "react-redux" 
import { showMobileSearch } from '../storeSlices/PageSetting';
const MobileSearch = () => {
    const dispatch = useDispatch()
    const [searchValue  , setSearchValue] = useState('')
    const [removeSearchBtn , setRemoveSearchBtn] = useState(false)
    const VshowMobileSearch = useSelector(state => state.pageSetting.VshowMobileSearch)

    useEffect(()=>{
        if (searchValue!='') {
            setSearchValue(searchValue)
            setRemoveSearchBtn(true)
        }    
        else {
            setSearchValue('')
            setRemoveSearchBtn(false)
        }
    } , [searchValue])
  return (
    <div className={`mobileSearch absolute left-0 top-0 w-full h-screen z-[1000] block lg:hidden ${VshowMobileSearch ? "visible" : "invisible"} `}>
         <div className='mobileSearch-container'>
            <div className='overlay bg-[rgba(0,0,0,0.5)]'>
                <div className={`mobileSearch-content-container w-[95%] h-screen bg-white px-[30px] py-[30px] relative transition-regular ${VshowMobileSearch ? "translate-x-0" : "translate-x-[-100%]"}`}>
                    <button onClick={()=>dispatch(showMobileSearch(false))}  className='absolute right-[5%] transition-regular hover:rotate-y-90'>
                        <IoClose size={24}/>
                    </button>
                    <div className='seach-bar'>
                        <div className='search-container border-[.5px] border-gray-200 flex items-center gap-[5px] rounded-full py-[6px] px-[20px] w-[80%] '>
                                <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className='focus:outline-none w-full placeholder:text-[14px]' type='text' placeholder="I'm Looking for..."></input>
                                <button onClick={()=>setSearchValue('')} className={`${removeSearchBtn ? "visible opacity-100" : "invisible opacity-0"}`}>
                                    <i><IoClose size={20}/></i>
                                </button>
                                <button>
                                    <i className='text-[20px]'><IoIosSearch/></i>
                                </button>
                         </div>
                    </div>

                    <div className={`trendingSearch mt-[25px] ${searchValue ? "hidden" : "block"}`}>
                        <h4 className='text-[16px] font-bold mb-[15px] font-roboto'>Trending Search</h4>
                        <div className='trendingSearch-container flex gap-[15px] flex-wrap'>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                                <a href='' className='border-[.2px] border-gray-200 rounded-full text-[13px] py-[8px] px-[15px] hover:bg-gray-100'>Mobile</a>
                        </div>
                    </div>

                    <div className={`popular_products mt-[25px] ${searchValue ? "hidden" : "block"}`}>
                        <h4 className='text-[16px] font-bold mb-[15px] font-roboto'>Popular Products</h4>
                    </div>
                    
                   <div className={`resultsOnSearch mt-[30px] ${searchValue ? "block" : "hidden"}`}>
                        <p className='text-lg'>Search for "{searchValue}"</p>
                        <div className='suggesstion mt-[20px]'>
                            <h3 className='font-bold capitalize'>Suggestions</h3>
                        <div className='suggestions-links flex gap-[10px] text-[14px]  mt-[10px]'>
                            <a className='' href=''>Mobile</a>
                            <a className='' href=''>Mobile</a>
                            <a className='' href=''>Mobile</a>
                        </div>
                        </div>
                   </div>
                </div>
            </div>

         </div>
    </div>
  )
}

export default MobileSearch