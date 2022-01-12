import './App.css';
import { Routes,Route } from 'react-router-dom';
import Cart from './pages/cart'
import Home from './pages/home'
import Details from './pages/details'
import Menu from './component/menu'
function App() {
    return (
        <>
          <Menu/>
          <Routes> 
              <Route path="/" element={<Home/>}/>
              <Route path="/details/:id " element={<Details/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </>
    )

}
export default App;
