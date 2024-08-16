import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const About = ({cart,setCart}) => {
  const link = useParams();

  const [tovar, setTovar] = useState([]);
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${link.id}`).then(({ data }) =>
      setTovar(data)
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
    <div className="Tovar">
      <div className="container">
        <div className="row">
          <div className="col s12 m12" key={tovar.id}>
            <div className="card Tovar__card">
              <div className="card-image Tovar__img">
                <img src={tovar.image} />
              </div>
              <div className="card-content Tovar__content">
                <p><b>Название:</b>{tovar.title}</p>
                <p><b>Описание:</b>{tovar.description}</p>
                {/* <p><b>Рейтинг товар:</b>{tovar.rating.rate}</p> */}
                {/* <p><b>Количество товара:</b>{tovar.rating.count}</p> */}
                <div className="card-action">
                <button onClick={()=>buyCart(tovar)} className="btn">Купить🛒</button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
