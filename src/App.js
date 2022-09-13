import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage/HomePage";
import Navbar from "./Pages/Home/Navbar/Navbar";
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {

  return <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/sign-in" element={<SignInPage/>}></Route>
    </Routes>
    

  </div>


}

export default App;
