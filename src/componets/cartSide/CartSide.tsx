import { useShoppingCart } from "../../context/shoppingCartContext";
import { CartSideProps } from "../../types/itemType";
import "./style.css";


const CartSide = ({ isActive }:CartSideProps) => {
  const { getCartItems } = useShoppingCart();
  const cartItems = getCartItems();
  
  return (
    <aside className={`Cart ${isActive ? "active" : ""}`}>
        { cartItems?.map(item => <h4>{item.id}</h4>)}
    </aside>
  )
}

export default CartSide