import './App.css'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About, Home, Store } from './pages';
import { useShoppingCart } from './context/shoppingCartContext';
import { useActions } from './context/ActionsContext';
import SideCart from './layout/sideCart/SideCart';
import Header from './layout/header/Header';

function App() { 
  const { isDark } = useActions();
  
  return (
    <div role='application' className={`App ${isDark ? "dark" : ""}`}>
      <Header/>
      <SideCart/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
