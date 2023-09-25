import { itemType } from "../../types/itemType";
import "./style.css";
import { useShoppingCart } from "../../context/shoppingCartContext";
const ItemCard: React.FC<itemType> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <li className="itemCard">
      <img className="itemCard__img" loading="lazy" src={imgUrl} alt={name} />
      <div className="itemCard__info">
        <p>{name}</p>
        <p>$ {price.toLocaleString()}</p>
      </div>
      <div className="itemCard__actions">
        {quantity > 0 ? (
          <div className="itemCard__actions__options">
            <div className="itemCard__actions__options--edit">
              <i
                onClick={() => decreaseCartQuantity(id)}
                className="bx bx-minus-circle"
              ></i>
              <span>{`${quantity} in cart`}</span>
              <i
                onClick={() => increaseCartQuantity(id)}
                className="bx bx-plus-circle"
              ></i>
            </div>
            <button
              className="itemCard__actions__options--remove"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        ) : (
          <div
            onClick={() => increaseCartQuantity(id)}
            className="itemCard__actions--addToCart"
          >
            <button>+ Add To Cart</button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ItemCard;
