import { ReactNode } from "react";

export interface itemType {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}


export interface ProviderProps  {
    children: ReactNode;
}


export interface SideCartProps {
    isActive: boolean,
}


export interface CartItem {
    id: number
    quantity: number
}


export interface ShoppingCartContextType {
    getCartItems: () => CartItem[]
    getItemQuantity: (id: number) => number
    getItemsCount: () => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}