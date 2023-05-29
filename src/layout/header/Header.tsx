import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { useHeaderActions } from "../../context/HeaderActionsContext";
import { useShoppingCart } from "../../context/shoppingCartContext";

const Header = () => {
  const { isDark, dispatch } = useHeaderActions();
  const handleToggleMode = () => dispatch({type:'TOGGLE_MODE'});
  const handleToggleSideCart = () => dispatch({type: "TOGGLE_SIDE_CART"});
  const { cartQuantity } = useShoppingCart();
  return (
    <header className="header">
        <div className="header__content">
            <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} onClick={handleToggleMode}></i>
            <nav className='header__nav'>
              <NavLink to="/" className='header__nav--link'>Store</NavLink>
              <NavLink to="/about" className='header__nav--link'>About</NavLink>
            </nav>
            <div onClick={() => handleToggleSideCart()} className="header__content--cart">
              <i className='bx bxs-cart-add' ></i>
              <span>{cartQuantity}</span>
            </div>
        </div>
      </header>
  )
}

export default Header;