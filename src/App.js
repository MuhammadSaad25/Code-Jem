import "./App.css";
import { useEffect, useState } from "react";
import Signup from "./components/Signup/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("auth change: login", user);
        setIsLogin(true);

        console.log("auth.currentUser: ", auth.currentUser.displayName);
        setFullName(auth.currentUser.displayName);
      } else {
        console.log("auth change: logout");
        // User is signed out
        setIsLogin(false);
      }
    });

    return () => {
      console.log("Cleanup function called");
      unSubscribe();
    };
  }, []);

  const logoutHandler = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("signout successful");
    }).catch((error) => {
      // An error happened.
      console.log("signout failed");
    });

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup/login" element={<Login />} /> */}
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/sellproduct" element={<Addproduct />} />
        <Route path="/sellproduct" element={<Addproduct />} /> */}
        {/* <Route
          path="/product-types/mobiles"
          element={<Allproductpage type={"Mobile"} />}
        /> */}
        {/* <Route
          path="/product-types/laptops"
          element={<Allproductpage type={"Laptop"} />}
        /> */}
        {/* <Route
          path="/product-types/cameras"
          element={<Allproductpage type={"Camera"} />}
        /> */}
        {/* <Route
          path="/product-types/shoes"
          element={<Allproductpage type={"Shoes"} />}
        /> */}
        {/* <Route
          path="/product/:productType/:id"
          element={<SpecificProductpage />}
        /> */}

        {/* {`/product/${p.id}/${p.productTitle}/${p.brand}/${p.customersupport}/ ${p.description}/${p.price}/${p.productType}/${p.productimage}/${p.warranty}`} */}

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
