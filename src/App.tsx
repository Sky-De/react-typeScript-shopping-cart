import './App.css'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About, Home, Store } from './pages';

function App() { 
  const [isDark, setIsDark] = useState<boolean>(true);
  const handleToggleMode = () => setIsDark(!isDark);
  // temperary
  const cartItemsNumber = 0;

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>

      <header className="header">
        <div className="header__content">
            <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} onClick={handleToggleMode}></i>
            <nav className='header__nav'>
              <Link to="/" className='header__nav--link'>Home</Link>
              <Link to="/store" className='header__nav--link'>Store</Link>
              <Link to="/about" className='header__nav--link'>About</Link>
            </nav>
            <div className="header__content--cart">
              <i className='bx bxs-cart-add' ></i>
              <span>{cartItemsNumber}</span>
            </div>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
