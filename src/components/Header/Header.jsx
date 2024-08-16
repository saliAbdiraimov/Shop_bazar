import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart, setCart }) => {
  
  const burg = ()=>{
    document.querySelector(".header__ul").classList.toggle("header__ul_active")
  }


  
  return (
    <header className="header">
      <nav>
        <div className="nav-wrapper container header__container">
          <button onClick={()=>burg()} className="header__burger_btn">
            <div className="header__burger_btns"></div>
            <div className="header__burger_btns"></div>
            <div className="header__burger_btns"></div>
          </button>
          <Link to="/" className="brand-logo">
            Shop KG
          </Link>
          <ul id="nav-mobile" className="right header__ul">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/Cotegory">Категория</Link>
            </li>
            <li>
              <Link to="/Cart">
                Корзина{" "}
                <span className="price">
                  {cart.length === 0 ? "" : cart.reduce((acc, rec) => {
                    return acc + rec.caunt;
                  }, 0)}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
