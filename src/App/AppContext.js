import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
  }

function GlobalContext({children}) {
    const [cart,setCart] = useState([]);  
    const contextValue = {
        cart,
        setCart
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default GlobalContext;