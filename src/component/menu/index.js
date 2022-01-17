import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import Menutopo from '../../style/menu/menu'
import MenuList from '../../style/menu-list'
import MenuListItem from '../../style/menu-list-item';
import RemLink from '../../style/remLink';
function Menu(){
    const {cart} = useContext(CartContext)
    return (
        <nav>
            <Menutopo>
                <Link  to={`/cart`}><RemLink>{cart.length} Produtos no carrinho</RemLink></Link>
                <h1>Dev Book Store</h1>
                <MenuList>
                    <li><Link to="/" ><MenuListItem>Home</MenuListItem></Link></li>
                    <li><Link to="/cart" ><MenuListItem>Carrinho</MenuListItem></Link></li>
                 </MenuList>
           </Menutopo>
        </nav>
    )
}
export default Menu