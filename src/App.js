import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage/HomePage";
import Navbar from "./Pages/Home/Navbar/Navbar";
import MenuPage from "./Pages/MenuPage/MenuPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

function App() {

  return <div className="App">
    <Navbar />
    <SimpleBar style={{ height: '83vh' }}>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
    <Route path="/sign-in" element={<SignInPage/>}></Route>
    <Route path="/sign-up" element={<SignUpPage/>}></Route>
    </Routes>
    </SimpleBar>
    

  </div>


}

export default App;
