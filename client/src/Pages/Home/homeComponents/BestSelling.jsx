import React from 'react'
import SectionHeading from '../../../Components/SectionHeading'
import ProductCard from '../../../Components/ProductCard'
import {product} from '../../../assets/dataTest.js'

const BestSelling = () => {
  return (
    <div className='best-selling mt-[80px]'>
        <SectionHeading h1='Best Selling' p='Unmatched design—superior performance and customer satisfaction in one.'/>
        <div className='wrapper grid grid-cols-12 gap-y-[20px] overflow-hidden '>
          
          <div className='col-span-6 lg:col-span-3 '>
            <ProductCard/>
          </div>

            <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>

            <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>

            <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>

            <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>

           <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>

           <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>
           <div className='col-span-6 lg:col-span-3'>
            <ProductCard/>
          </div>

         
          </div>
    </div>
  )
}

export default BestSelling