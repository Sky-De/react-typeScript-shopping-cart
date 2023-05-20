import { useState } from "react";
import { itemType } from "../../types/itemType"
import "./style.css";
const ItemCard:React.FC<itemType> = ({ name, price, imgUrl }) => {
  const [orderNumber,setOrderNumber] = useState(0);
  const handleMinus = () => {
   if( orderNumber === 1 ) return;
   setOrderNumber(orderNumber - 1);
  } 
  const handlePlus = () => setOrderNumber(orderNumber + 1);
  return (
    <li className="itemCard">
        <img className="itemCard__img" loading="lazy" src={imgUrl} alt={name} />
        <div className="itemCard__info">
            <p>{name}</p>
            <p>$ {price}</p>
        </div>
        <div className="itemCard__actions">
          {orderNumber > 0 ? <div className="itemCard__actions__options">
            <div className="itemCard__actions__options--edit">
              <i onClick={handleMinus} className='bx bx-minus-circle'></i>
              <span>{`${orderNumber} in cart`}</span>
              <i onClick={handlePlus} className='bx bx-plus-circle' ></i>
            </div>
            <button className="itemCard__actions__options--remove" onClick={() => setOrderNumber(0)}>Remove</button>
          </div> 
          : <div onClick={()=> setOrderNumber(1)} className="itemCard__actions--addToCart"><button >+ Add To Cart</button></div>}
        </div>
    </li>
  )
}

export default ItemCard