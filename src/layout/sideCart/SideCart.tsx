import { useActions } from "../../context/ActionsContext";
import { useShoppingCart } from "../../context/shoppingCartContext";
import "./style.css";


const SideCart = () => {
  const { isActive } = useActions();
  const { getCartItems } = useShoppingCart();
  const cartItems = getCartItems();
  
  return (
    <aside className={`Cart ${isActive ? "active" : ""}`}>
        { cartItems?.map(item => <h4>{item.id}</h4>)}
    </aside>
  )
}

export default SideCart