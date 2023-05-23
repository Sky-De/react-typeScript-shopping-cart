import { createContext, useContext, useState } from "react";
import { ProviderProps } from "../types/itemType";

interface CartItem {
    id: number
    quantity: number
}

interface ShoppingCartContext {
    getCartItems: () => CartItem[]
    getItemQuantity: (id: number) => number
    getItemsCount: () => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider({ children } : ProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    console.log(cartItems);
    

    const getCartItems = () => cartItems;

    const getItemQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0;

    // const getItemsCount = () => cartItems.length;
    const getItemsCount = () => {
        let count = 0;
        cartItems.forEach(item => count += item.quantity);
        return count;
    };

    const increaseCartQuantity = (id: number) => {
        const itemExist = cartItems.find(item => item.id === id);
        itemExist === undefined 
        ? setCartItems([...cartItems,{ id, quantity: 1 }]) 
        : setCartItems(currItems => currItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
    }

    const decreaseCartQuantity = (id: number) => {
        const itemQuantity = cartItems.find(item => item.id === id)?.quantity;
        itemQuantity === 1
        ? null
        : setCartItems(currItems => currItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item));
    }

    const removeFromCart = (id: number) => setCartItems(currItems => currItems.filter(item => item.id !== id));
        
    return (
        <ShoppingCartContext.Provider
         value={{ 
            getCartItems, 
            getItemQuantity, 
            getItemsCount, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart}}>{children}      
        </ShoppingCartContext.Provider>
    )
}