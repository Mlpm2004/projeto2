import React, { useContext } from 'react';
import { CartContext } from '../../context/cart';
import {Container,Botao} from "../../component/style";
import {Total,TableCart,TableImg,BotaoDesc} from './style.js';
function Cart(){
    const { remItem } = useContext(CartContext)
    const { esvaziaCart } = useContext(CartContext)
    const { cart } = useContext(CartContext)
    let total=0
    if (cart.length===1){
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
        <Container>
            <Total>
                <h1 >Total : {new Intl.NumberFormat(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' }
                    ).format(total)}
                </h1>
            </Total>
            <TableCart>
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
                <TableImg
                  src={item.image}
                  alt="Foto do livro"
                  className="table-image"
                ></TableImg>
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
                    <Botao  onClick={() => {remItem(item.id,item.title)}}>Remover</Botao>
                </td>
           </tr>
          )}
                </tbody>
            </TableCart>
        <BotaoDesc onClick={() => {esvaziaCart()}}>Esvaziar Carrinho</BotaoDesc>
        </Container>
    );
}
export default Cart