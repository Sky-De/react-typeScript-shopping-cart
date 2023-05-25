import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./shoppingCartContext";
import { ProviderProps } from "../types/itemType";
import { HeaderActionsProvider } from "./HeaderActionsContext";

const AppProviders = ({ children }: ProviderProps ) => {
  return (
    <ShoppingCartProvider>
      <HeaderActionsProvider>
       <BrowserRouter>
         { children }
       </BrowserRouter>
      </HeaderActionsProvider>
    </ShoppingCartProvider>
  )
}

export default AppProviders;