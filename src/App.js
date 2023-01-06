import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import Baryani from "./components/Baryani/Baryani";
import Burgar from "./components/Buger/Burgar";
import Pizza from "./components/Pizza/Pizza";
import FavouriteData from "./components/favouriteData/FavouriteData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/baryani" element={<Baryani />} />
        <Route path="/burger" element={<Burgar />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/favouritedata" element={<FavouriteData/>} />
        {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
