import React, { useState } from 'react'
import Products from './Products/Products';
import Category from './Category/Category';
import "./main.css"

const Main = ({cart, setCart}) => {

    const[product, setProduct] = useState([]);


   

  return (
    <section className='Main'>
        <div className='container'>
          <div className="Main__section">
            <Category/>
           <Products cart={cart} setCart={setCart} product={product} setProduct={setProduct}/>
          </div>
        
        </div>
      
    </section>
  )
}

export default Main
