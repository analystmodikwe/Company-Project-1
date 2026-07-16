import Navbar from "./components/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>     
        <Navbar />       
          <section id="home"><Home /></section>
          <section id="services"><Services /></section>
          <section id="menu"><Menu /></section>
          <section id="about-us"><AboutUs /></section>
          <section id="contacts"><Contact /></section>
        
        <Footer />    
    </div>
  );
}

export default App;
