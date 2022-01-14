import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);
    function handleAddCart(livro) {
        alert("Adicionando "+livro.title+" ao carrinho")
        setCart([...cart, livro]);
    }    
    return (
        <CartContext.Provider
            value={{
                cart: cart,
                addItem: handleAddCart
            }}>
            {children}
        </CartContext.Provider>
    )

}