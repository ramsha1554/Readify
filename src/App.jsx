import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
     

     
      <Navbar />

   
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

 
    </Fragment>
  );
}

export default App;
