import { CartCardPropsType } from "../../types/itemType";
import "./style.css";
import storeItems from "../../data/items.json";
import { useShoppingCart } from "../../context/shoppingCartContext";

const CartItemCard = ({ id, quantity }: CartCardPropsType ) => {

  const item = storeItems.find(item => item.id === id);
  if(item === undefined) return null;
  const { removeFromCart } = useShoppingCart();

  const handleRemoveItem = () => removeFromCart(id); 
  const totalPrice = (item.price * quantity).toLocaleString();


  return (
    <li className="CartitemCard">
        <img className="CartitemCard__img" loading="lazy" src={item.imgUrl} alt={item.name} />
        <div className="CartitemCard__info">
            <h4>{item.name} <span>x{quantity}</span></h4>
            <p>${item.price}</p>
        </div>
        <div className="CartitemCard__action">
            <h4>${totalPrice}</h4>
            <button onClick={handleRemoveItem}>x</button>
        </div>
        
        
    </li>
  )
}

export default CartItemCard;