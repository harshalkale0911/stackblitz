import React from 'react'
import RatingWidget from './RatingWidget'

function ProductCard({id,name,description,image,avgRating,totalRatings,onRating}) {
  return (
    <div
        style={{ border: '1px solid gray', borderRadius: '10px', padding: '50px', maxWidth: '250px', textAlign: 'center', backgroundColor:'aliceblue' }}
    >
          <img src={image} alt={name} style={{ width: '100%', borderRadius: '10px' }} />
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Average Rating: {avgRating} ({totalRatings} ratings)</p>
          <RatingWidget productId={id} onRating={onRating}/>
    </div>
  )
}

export default ProductCard