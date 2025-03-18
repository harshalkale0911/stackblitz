import React from 'react'
function DestinationCard({name,location,image,description,price}) {
  return (
    <div style={{background:"white"}}>
        <img style={{height:300,width:300}} src={image} alt="" />
        <h1>{name}</h1>
        <h1>{location}</h1>
        <h1>{description}</h1>
        <h1>{price}</h1>
    </div>
  )
}

export default DestinationCard