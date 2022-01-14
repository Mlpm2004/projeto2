import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
function Cart(){
    const { cart } = useContext(CartContext)
    let total=0
    if (cart.length==1){
        total = cart[0].price  
    }else if(cart.length>=2){
    total = cart.reduce((acumulado, valor) => {
                if (acumulado.price) {
                    return acumulado.price + valor.price;
                }
                return acumulado + valor.price;
           
        })
    }

    return (
        <div className='container'>
            <div className='total'>
                <h1 >Total : {new Intl.NumberFormat(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' }
                    ).format(total)}
                </h1>
            </div>
            <table className='table-cart'>
                <thead>
                    <th>#</th>
                    <th>Produtos</th>
                    <th>SubTotal</th>
                    <th></th>
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
                </td>
                <td>
                    <button >Remover</button>
                </td>
           </tr>
          )}
                </tbody>
            </table>
        </div>
    );
}
export default Cart