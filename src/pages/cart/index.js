import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
function Cart(){
    const { cart } = useContext(CartContext)
    return (
        <div>
            <table className='table-cart'>
                <thead>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>
                <tbody>
           {cart.map(item =>
            <tr>
              <td>
                <img
                  src={item.image}
                  alt="Foto do livro"
                  className="table-image"
                />
              </td>
              <td>{item.title}</td>
              <td>{
                new Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                ).format(item.price)
              }
                </td>           </tr>
          )}
                </tbody>
            </table>
        </div>
    );
}
export default Cart