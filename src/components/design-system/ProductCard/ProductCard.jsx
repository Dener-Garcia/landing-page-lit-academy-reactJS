import React from "react";
import './module.css'

const ProductCard = (props) => {

  const {imgCard, titleCard, descriptionCard} = props

  return(
    <div className="productCard">
        <img src={imgCard} alt={titleCard}/>
        <h3>{titleCard}</h3>
        <p>{descriptionCard}</p>
      </div>
  )
}

export default ProductCard