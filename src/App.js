import "./App.css";
import { useEffect, useState } from "react";
import Signup from "./components/Signup/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

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
    <>
      <Signup />
      {/* <h1>My First React App</h1> */}
    </>
  );
}

export default App;
