import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}){
    
    const [cart, setCart] = useState([]);
    function handleAddCart(livro) {
        alert("Adicionando "+livro.title+" ao carrinho")
        setCart([...cart, livro]);
    }    
    function handleRemCart(id,name) {
        alert("Removendo "+name+" do carrinho")
        setCart(cart.filter(item => item.id!=id ))
    }    
    return (
        <CartContext.Provider
            value={{
                cart: cart,
                addItem: handleAddCart,
                remItem: handleRemCart
            }}>
            {children}
        </CartContext.Provider>
    )

}