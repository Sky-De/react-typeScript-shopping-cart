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


export interface CartSideProps {
    isActive: boolean,
}