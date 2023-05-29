import './App.css'
import { Route, Routes } from 'react-router-dom';
import { About, Store } from './pages';
import { useHeaderActions } from './context/HeaderActionsContext';
import SideCart from './layout/sideCart/SideCart';
import Header from './layout/header/Header';
import ErrorPage from './pages/ErrorPage';

function App() { 
  const { isDark } = useHeaderActions();
  
  return (
    <div role='application' className={`App ${isDark ? "dark" : ""}`}>
      <Header/>
      <SideCart/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
