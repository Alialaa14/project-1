import React , {useState} from 'react'
import SectionHeading from '../../../Components/SectionHeading'
import { topCollections } from '../../../assets/dataTest.js'
export const TopCollections = () => {
    const [activeBtn , setActiveBtn] = useState(0)
    const [transform , setTransform] = useState(0)


    const handelCarouselBtn = (e)=>{
        const index = Number(e.target.dataset.index)
        setActiveBtn(index)
        setTransform(index*-100 - index*2)
        
    }
  return (
    <div className='top-collections mt-[100px]'>
            <div className='wrapper'>
                <SectionHeading h1='Top Collections' p='Express your style with our standout collection—fashion meets sophistication.'/>
               
                 <div className={`top-collections-container-large hidden lg:flex  mt-[50px] justify-start lg:justify-center gap-[1%]  lg:gap-[30px] overflow-hidden `}>
                    {
                        topCollections.map((collection , index) => {
                            return <div className={`collection-card overflow-hidden text-center flex-grow-0 flex-shrink-0 basis-[32.333%] lg:basis-auto ` } >
                                        <a href={`collections/${collection.name} `}  className='w-full overflow-hidden'>
                                            <div className='collection-rounded-card bg-primary rounded-full flex-center overflow-hidden '>
                                            <img src={collection.image} className=' lg:w-[150px] lg:h-[150px] transition-regular hover:zoom-effect' alt={collection.title} />
                                        </div>
                                        <p className='mt-[13px] font-semibold text-[15px]'>{collection.name}</p>
                                        </a>
                                   </div>
                        })
                    }
                </div>

                <div className={`top-collections-container-mobile flex lg:hidden  mt-[50px] justify-start lg:justify-center gap-[1%]  lg:gap-[30px] overflow-hidden `}>
                    {
                        topCollections.map((collection , index) => {
                            return <div className={`collection-card overflow-hidden text-center flex-grow-0 flex-shrink-0 basis-[32.333%] lg:basis-auto ` } style={{transform:`translateX(${transform}%)` , transition:"transform 0.4s ease-in-out" }}>
                                        <a href={`collections/${collection.name} `}  className='w-full overflow-hidden'>
                                            <div className='collection-rounded-card bg-primary rounded-full flex-center overflow-hidden '>
                                            <img src={collection.image} className=' lg:w-[150px] lg:h-[150px] transition-regular hover:zoom-effect' alt={collection.title} />
                                        </div>
                                        <p className='mt-[13px] font-semibold text-[15px]'>{collection.name}</p>
                                        </a>
                                   </div>
                        })
                    }
                </div>

                 <div className='carousel-mobile flex-center lg:hidden mt-[30px] '>
                    <div className='carousel-btns flex gap-[6px]'>
                        <button onClick={(e)=>handelCarouselBtn(e)} data-index='0' className={`w-[6px] h-[6px]  transition-regular rounded-full ${activeBtn===0 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                        <button onClick={(e)=>handelCarouselBtn(e)} data-index='1' className={`w-[6px] h-[6px]  transition-regular  rounded-full  ${activeBtn===1 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                        <button onClick={(e)=>handelCarouselBtn(e)} data-index  ='2' className={`w-[6px] h-[6px] transition-regular  rounded-full  ${activeBtn===2 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                        <button onClick={(e)=>handelCarouselBtn(e)} data-index='3' className={`w-[6px] h-[6px]   transition-regular  rounded-full  ${activeBtn===3 ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}></button>
                    </div>                    
                </div>
            </div>
    </div>
  )
}
