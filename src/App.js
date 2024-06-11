import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Pages/Home";
import Depot from "./Pages/Depot";
import Listregister from "./Pages/Listregister";
import Register from "./Pages/Register";
import Signin from './Pages/SignIn'
import Signup from "./Pages/SignUp";

function App() {
  return (
    <div className="page">
      <div className="header">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Depot" element={<Depot />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Listregister" element={<Listregister />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App;
