
import './App.css';
import Cart from './components/firist-project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from "./pages/about";
import Login from './pages/login'; // Ensure the correct relative path
import Register from './pages/register';
import ContactUs from './pages/contactus';
import Services from './pages/services';
import SingleProduct from './pages/single-products';
import Dashboard from './pages/dashboard';
import Carts from './pages/carts';
import Paystack from './pages/paystack';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/carts' element={<Carts/>}></Route>
        


        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<SingleProduct/>} />
        <Route path="/paystack" element={<Paystack />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
