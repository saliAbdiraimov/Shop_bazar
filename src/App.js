import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Category from './components/Main/Category/Category';
import About from './components/Main/About/About';
import Sort from './components/Main/Sort/Sort';
import Cart from './components/Main/Cart/Cart';
import { useState } from 'react';





function App() {

  const [cart,setCart]=useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <Header cart={cart} setCart={setCart}/>
      <Routes>
      <Route path='/' element={<Main cart={cart} setCart={setCart}/>}/>
      <Route path='/Cotegory' element={<Category/>}/>
      <Route path='/About/:id' element={<About cart={cart} setCart={setCart}/>}/>
      <Route path='/Sort/:name' element={<Sort cart={cart} setCart={setCart}/>}/> 
      <Route path='Cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>

     
      </BrowserRouter>
    </div>
  );
}

export default App;
