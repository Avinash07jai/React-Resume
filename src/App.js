import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from './Component/Skill';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar sticky="top" />
   <Routes>
   
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/skill" element={<Skill />} />

   </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
