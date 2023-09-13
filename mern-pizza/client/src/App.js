import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import OrderSuccess from './screens/OrderSuccess';
import Ordersscreen from './screens/Ordersscreen';
function App() {
  return (
    <>
       <Navbar/>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Homescreen/>}/>
       <Route path="/success" element={<OrderSuccess/>}/>
      <Route path ="/cart" element={<Cartscreen/>}/>
      <Route path="/register" element={<Registerscreen/>}/>
      <Route path="/login" element={<Loginscreen/>}/>
      <Route path="/orders" element={<Ordersscreen/>}/>
      </Routes>
       </BrowserRouter>
      
    </>
  );
}
export default App;
