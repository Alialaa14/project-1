import React, { useEffect, useState } from 'react'

const MovingAnimation = () => {
    const [pause , setPause] = useState(false)
    useEffect(() => { 
        const MovingAnimationDivs = document.querySelectorAll('.moving-animation-container')
        MovingAnimationDivs.forEach((MovingAnimationDiv , index) => {
            MovingAnimationDiv.addEventListener('mouseover' , () => setPause(true) )
            MovingAnimationDiv.addEventListener('mouseout' , () => setPause(false) )
        })
    }, [])
  return (
    <div className=' moving-animation-wrapper mt-[50px] overflow-hidden  flex  py-[40px] border-b-[.5px] border-t-[0.5px] border-gray-200'>
        <div className={`moving-animation-container hidden lg:flex  flex-grow-0 flex-shrink-0 basis-[100%]   justify-between w-full px-[20px] moving-animation ${pause && 'pause'}`}>
            <div className='moving-item flex gap-[20px] items-center   '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-12.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
            </div>

            <div className='moving-item flex gap-[20px] items-center '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-13.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Exclusive Seasonal Picks</p>
            </div>

            <div className='moving-item flex gap-[20px] items-center '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-1.jpg?v=1730861647&width=185' alt=''/>
                <p className='text-[25px]'>Exclusive Seasonal Picks</p>
            </div>
        </div>

       <div className={`moving-animation-container  hidden lg:flex flex-grow-0 flex-shrink-0 basis-[100%]   justify-between w-full px-[20px] moving-animation ${pause && 'pause'}`}>
            <div className='moving-item flex gap-[20px] items-center  '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-12.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
            </div>

            <div className='moving-item flex gap-[20px] items-center '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-13.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Exclusive Seasonal Picks</p>
            </div>

            <div className='moving-item flex gap-[20px] items-center '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-1.jpg?v=1730861647&width=185' alt=''/>
                <p className='text-[25px]'>Exclusive Seasonal Picks</p>
            </div>
        </div>

         <div className={`moving-animation-container  hidden lg:flex flex-grow-0 flex-shrink-0 basis-[100%]   justify-between w-full px-[20px] moving-animation ${pause && 'pause'}`}>
            <div className='moving-item flex gap-[20px] items-center  '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-12.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
            </div>

            <div className='moving-item flex gap-[20px] items-center '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-13.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Exclusive Seasonal Picks</p>
            </div>

            <div className='moving-item flex gap-[20px] items-center '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-1.jpg?v=1730861647&width=185' alt=''/>
                <p className='text-[25px]'>Exclusive Seasonal Picks</p>
            </div>
        </div>

        <div className='animation-mobile min-w-max overflow-hidden  flex '>
              <div className={`moving-animation-container flex moving-animation gap-[20px]  ${pause && 'pause'}`}>
                <div className='moving-item flex gap-[20px] items-center flex-grow-0 flex-shrink-0 '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-12.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
               </div>
               <div className='moving-item flex gap-[20px] items-center flex-grow-0 flex-shrink-0'>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-13.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
               </div>

               <div className='moving-item flex gap-[20px] items-center flex-grow-0 flex-shrink-0'>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-1.jpg?v=1730861647&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
               </div>
              </div>

           <div className={`moving-animation-container flex moving-animation gap-[20px] ${pause && 'pause'}`}>
                <div className='moving-item flex gap-[20px] items-center flex-grow-0 flex-shrink-0 '>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-12.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
               </div>
               <div className='moving-item flex gap-[20px] items-center flex-grow-0 flex-shrink-0'>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-13.jpg?v=1730861651&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
               </div>

               <div className='moving-item flex gap-[20px] items-center flex-grow-0 flex-shrink-0'>
                <img className='w-[70px] h-[70px] rounded-full' src='https://glozin-demo.myshopify.com/cdn/shop/files/scrolling-img-1.jpg?v=1730861647&width=185' alt=''/>
                <p className='text-[25px]'>Express Your True Self</p>
               </div>
           </div>
          
        </div>


    </div>
  )
}

export default MovingAnimation