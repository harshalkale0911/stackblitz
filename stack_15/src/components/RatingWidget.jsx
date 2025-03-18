import React, { useState } from 'react'

function RatingWidget({productId,onRating}) {
    const [rating,setRating]=useState(0)
    const [hoveredRating,setHoveredRating]=useState(0)

    const handleClick = (star) => {
        setRating(star);
    };

    const handleSubmit=()=>{
        if(rating>0){
            onRating(productId,rating)
            setRating(0)
        }
    }
  return (
    <div>
          <div>
              {[1, 2, 3, 4, 5].map(star => (
                  <span
                      key={star}
                      style={{
                          fontSize: '20px',
                          cursor: 'pointer',
                          color: star <= rating ? 'gold' : 'gray'
                      }}
                      onClick={() => handleClick(star)}
                  >
                      ★
                  </span>
              ))}
          </div>
          <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '5px 10px',borderRadius:'5px',border:'1px solid grey',backgroundColor:'cornsilk' }}>
              Submit Rating
          </button>
    </div>
  )
}

export default RatingWidget