import { useHeaderActions } from "../../context/HeaderActionsContext";
import { useShoppingCart } from "../../context/shoppingCartContext";
import "./style.css";


const SideCart = () => {
  const { isActive, dispatch } = useHeaderActions();
  const { cartItems } = useShoppingCart();
  
  return (
      <aside className={`Cart ${isActive ? "active" : ""}`}>
        { cartItems?.map(item => <h4>{item.id}</h4>)}
      </aside>
  )
}

export default SideCart