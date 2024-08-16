import React from 'react'

const Cart = ({ cart, setCart }) => {
  return (
    <div className='container'>
        <table>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
           {cart.map((item,idx)=>{
                return(
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.caunt}</td>
                        <td>{item.price*item.caunt}$</td>
                        
                    </tr>
                );
            })}
        </tbody>
        </table>
        <div className='itog'>
            <p><b>Итог:</b></p>
            {cart.reduce((acc,rec)=> acc + rec.price * rec.caunt ,0).toFixed(1)}$
            <button className='btn'>Оформить заказ</button>
        </div>
        


    </div>
  )
}

export default Cart

