import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {

  const [products, setProducts] = useState(initialProducts);

  const handleRating=(productId,newRating)=>{
    setProducts(prevProducts=>
      prevProducts.map(product=>
        product.id===productId ?{
          ...product, avgRating: ((product.avgRating * product.totalRatings) + newRating) / (product.totalRatings + 1),
          totalRatings:product.totalRatings+1
        }:product
      )
    )
  }

  return (
    <div
      className="App"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}
    >
     {/* code here */}
     {
      products.map(product=>{
        return(
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            avgRating={product.avgRating.toFixed(1)}
            totalRatings={product.totalRatings}
            onRating={handleRating}
          />
        )
        
      })
     }
    </div>
  );
}

export default App;