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
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartItems: CartItem[];
    cartQuantity: number;
}


// ---HeaderActionsTypes
export interface State {
    isDark: boolean;
    isActive: boolean;
}

export type Actions = 
 | {type: "TOGGLE_MODE"}
 | {type: "TOGGLE_SIDE_CART"}

export interface HeaderActionsContextType {
    state: State;
    dispatch: React.Dispatch<Actions>;
}



export interface CartCardPropsType {
    id: number;
    quantity: number;
}