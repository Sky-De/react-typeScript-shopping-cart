import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./shoppingCartContext";
import { ProviderProps } from "../types/itemType";

const AppProviders = ({ children }: ProviderProps ) => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default AppProviders;