import { itemType } from "../../types/itemType"
import "./style.css";
const ItemCard:React.FC<itemType> = ({ name, price, imgUrl }) => {
  return (
    <li className="itemCard">
        <img className="itemCard__img" src={imgUrl} alt={name} />
        <div className="itemCard__info">
            <p>{name}</p>
            <p>$ {price}</p>
        </div>
        <div className="itemCard__actions">acions</div>
    </li>
  )
}

export default ItemCard