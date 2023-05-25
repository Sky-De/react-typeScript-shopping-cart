import './App.css'
import { Route, Routes } from 'react-router-dom';
import { About, Home, Store } from './pages';
import { useHeaderActions } from './context/HeaderActionsContext';
import SideCart from './layout/sideCart/SideCart';
import Header from './layout/header/Header';

function App() { 
  const { isDark } = useHeaderActions();
  
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
