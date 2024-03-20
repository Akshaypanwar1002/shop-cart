import { createContext, useContext } from 'react';

const cartContext = createContext();
const name = "Akshay Panwar";
const age = 22;


const CartProvider = ({ children }) => {
    return (
        <cartContext.Provider value={{
            name,
            age
        }}>
            {children}

        </cartContext.Provider>
    )


}

const useCart = () => useContext(cartContext)
export { useCart, CartProvider }