import Navbar from "./components/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx"
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <div>
      {/* browser router for linking the navbar components and pages */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/services" element= {<Services />} />
          <Route path="/menu" element= {<Menu />} />
          <Route path="/about-us" element= {<AboutUs />} />         
          <Route path="/contacts" element= {<Contact />} />         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
