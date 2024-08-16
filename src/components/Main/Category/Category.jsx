import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const [cot, setCot] = useState([]);
    
    useEffect(()=>{
        axios("https://fakestoreapi.com/products/categories").
         then(({data})=>setCot(data)
        );
    }, []);


    




  return (
    <section className="category">
        <div className="container">
          <ul className='category__ul'>
            {cot.map((item, idx)=>{
                return(
                    <Link to={`/Sort/${item}`} key={idx}>
                    <button className='btn category__btns'>{item}</button>
                    </Link>
                )
            })}
          </ul>
          
        </div>
      
    </section>
  )
}

export default Category
