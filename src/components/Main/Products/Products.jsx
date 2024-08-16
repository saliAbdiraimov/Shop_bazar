import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ cart, setCart, product, setProduct }) => {
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then(({ data }) =>
      setProduct(data)
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
    <section className="products">
      <div className="row">
        {product.map((item, idx) => {
          return (
            <div className="col s12 m4 products__col" key={item.id}>
              <div className="card products__card">
                <div className="products__images">
                  <img className="products__img" src={item.image} />
                  <div className="products__text">
                    <span className="card-title products__title">
                      {item.title.length > 31
                        ? `${item.title.substr(0, 32)}... `
                        : item.title}
                    </span>
                  </div>

                  <button className="waves-effect waves-light btn-small">
                    <Link to={`/About/${item.id}`} className="products__link">
                      Подробнее
                    </Link>
                  </button>
                  <button
                    onClick={() => buyCart(item)}
                    className="btn-floating halfway-fab waves-effect waves-light red"
                  >
                    <i className="material-icons">🛒</i>
                  </button>
                </div>
                <div className="card-content"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
