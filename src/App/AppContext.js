import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const UpdateCartContext = createContext();

export function useCartContext() {
    const context =  useContext(CartContext);

    if(!context) {
        throw new Error("useCartContext must be used inside CartProvider");
    }

    return context;
  }

  export function useUpdateCartContext() {
    const context = useContext(UpdateCartContext);

    if(!context) {
        throw new Error("useCartContext must be used inside CartProvider");
    }

    return context;
  }

function GlobalContext({children}) {
    const [cart,setCart] = useState([]);  

    return(
        <CartContext.Provider value={cart}>
            <UpdateCartContext.Provider value={setCart}>
            {children}
            </UpdateCartContext.Provider>
        </CartContext.Provider>
    )
}

export default GlobalContext;