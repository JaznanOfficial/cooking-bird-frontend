import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage/HomePage";
import Navbar from "./Pages/Home/Navbar/Navbar";
import MenuPage from "./Pages/MenuPage/MenuPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import Footer from "./Pages/Home/Footer/Footer";
import UserOrderPage from "./Pages/UserProfilePage/UserOrderPage";
import VoucherPage from "./Pages/VoucherPage/VoucherPage";
import AddressPage from "./Pages/AddressPage/AddressPage";

function App() {

  return <div className="App">
    <Navbar />
    <SimpleBar style={{ height: '85vh' }}>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
      
        <Route path="/user-profile/*" element={<UserProfilePage />}>
        <Route path="user-orders" element={<UserOrderPage/>} ></Route>
        <Route path="user-vouchers" element={<VoucherPage/>} ></Route>
        <Route path="user-addresses" element={<AddressPage/>} ></Route>
        </Route>
    <Route path="/sign-in" element={<SignInPage/>}></Route>
    <Route path="/sign-up" element={<SignUpPage/>}></Route>
    </Routes>
    <Footer/>
    </SimpleBar>

  </div>


}

export default App;
