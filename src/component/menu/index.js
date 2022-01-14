import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
function Menu(){
    const {cart} = useContext(CartContext)
    return (
        <nav>
            <div className="menu">
                {cart.length} Produtos no carrinho
                <h1>Dev Book Store</h1>
                <ul className='menu-list'>
                    <li><Link to="/" className='menu-list-item'>Home</Link></li>
                    <li><Link to="/cart" className='menu-list-item' >Carrinho</Link></li>
                 </ul>
           </div>
        </nav>
    )
}
export default Menu