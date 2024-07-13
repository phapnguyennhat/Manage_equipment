import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Depot from "./Pages/Depot";
import Listregister from "./Pages/Listregister";
import Register from "./Pages/Register";
import Signin from "./Pages/SignIn";
import Signup from "./Pages/SignUp";
import Product from "./Pages/Product";
import InforUser from "./Pages/InforUser";
import Infor from "./Pages/Infor";

function App() {
  return (
    <div className="page">
      <div className="header">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Depot" element={<Depot />} />
        <Route
          path="/Register"
          element={
            localStorage.getItem("token") ? (
              <Register />
            ) : (
              <Navigate to={"/signin"} />
            )
          }
        />
        <Route
          path="/Listregister"
          element={
            localStorage.getItem("token") ? (
              <Listregister />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signup/inforuser" element={<InforUser />} />
        <Route path="/Depot/Product/:id" element={<Product />} />
        <Route
          path="/info"
          element={
            localStorage.getItem("token") ? (
              <Infor />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
