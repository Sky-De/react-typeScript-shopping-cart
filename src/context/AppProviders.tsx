import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./shoppingCartContext";
import { ProviderProps } from "../types/itemType";
import { ActionsProvider } from "./ActionsContext";

const AppProviders = ({ children }: ProviderProps ) => {
  return (
    <ShoppingCartProvider>
      <ActionsProvider>
       <BrowserRouter>
         { children }
       </BrowserRouter>
      </ActionsProvider>
    </ShoppingCartProvider>
  )
}

export default AppProviders;