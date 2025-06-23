import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
        <div className='product-card-container'>
            <div className='product-card-img overflow-hidden w-[200px] h-[400px] relative rounded-lg'>
                {
                    product.images.map((prod , index)=>{
                        return <div className='product-img absolute top-0 left-0 w-full h-full'>
                                    {
                                        prod.color==="grey" ? prod.urls.map((url , url_index)=>{
                                          
                                          return <img src={url} className='w-full h-full transition-regular hover:zoom-effect' alt={product.name} /> 
                                          
                                        }):1
                                    }
                                </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProductCard