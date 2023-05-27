import CartItemCard from "../../componets/cartCard/CartItemCard";
import { useHeaderActions } from "../../context/HeaderActionsContext";
import { useShoppingCart } from "../../context/shoppingCartContext";
import "./style.css";


const SideCart = () => {
  const { isActive, dispatch } = useHeaderActions();
  const { cartItems } = useShoppingCart();
  const handleToggleCart = () => dispatch({type: "TOGGLE_SIDE_CART"});
  
  return (
      <aside className={`Cart ${isActive ? "active" : ""}`}>
        {cartItems?.length < 1 && <h4>Cart is empty</h4>}
        <i onClick={handleToggleCart} className='bx bxs-chevrons-right' ></i>
        <ul className="Cart__list">
          {cartItems?.map(item => <CartItemCard key={item.id} {...item}/>)}
        </ul>
      </aside>
  )
}

export default SideCart