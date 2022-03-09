import React from 'react'
import "./product.css"


const Product = ({img,link}) => {
  return (
    <>
    <div className='b'>
      <div className="p-browser">

        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      
    <a href={link} target="_blank">
      <img src={img} alt="Weather" className='p-img'/>
    </a>
    
      </div>
      </>
  )
}

export default Product