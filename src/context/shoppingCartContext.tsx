import { createContext, useContext, useState } from "react";
import { CartItem, ProviderProps, ShoppingCartContextType } from "../types/itemType";





const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider({ children } : ProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

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