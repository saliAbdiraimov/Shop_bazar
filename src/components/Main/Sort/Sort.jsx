import React, {useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom';
import axios from 'axios';




const Sort = ({cart, setCart}) => {

    const sort = useParams()

    const [sor, setSor] = useState([]);

    useEffect(()=>{
    axios(`https://fakestoreapi.com/products/category/${sort.name}`).
     
    then(({data})=>setSor(data)
    );

}, []);

const buyCart = (obj) => {
  const idx = cart.findIndex((item) => item.id === obj.id);

  if (idx === -1) {
    setCart([
      ...cart,
      {
        ...obj,
        caunt: 1,
      },
    ]);
  }else{
    cart[idx].caunt++
    setCart([...cart]);
  }
};




  return (
    
       <section className='Sort'>
       <div className="container">
       <div class="row">
    <div class="col s12 m7">
      {sor.map((item,idx)=>{
        return(
            <div className="card products__card">
                <div className="products__images">
                  <img className="products__img" src={item.image} />
                  <div className="products__text">
                    <span className="card-title products__title">
                      {item.title.length > 31
                        ? `${item.title.substr(0,32)}... `
                        : item.title}
                    </span>
                  </div>

                  <button className="waves-effect waves-light btn-small">
                    <Link to={`/About/${item.id}`} className="products__link">Подробнее</Link>
                  </button>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i onClick={()=>buyCart(item)} className="material-icons">🛒</i>
                  </a>
                </div>
                <div className="card-content"></div>
              </div>
        )
      })}
    </div>
  </div>
       </div>
  
       </section>
    )
}



export default Sort
