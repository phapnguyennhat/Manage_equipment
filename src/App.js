import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from "./Pages/Home";
import Depot from "./Pages/Depot";
import Listregister from "./Pages/Listregister";
import Register from "./Pages/Register";

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
      </Routes>
    </div>
  )
}

export default App;
