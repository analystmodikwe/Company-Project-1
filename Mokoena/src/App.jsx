import Navbar from "./components/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
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
          <Route path="/our-products" element= {<OurProducts />} />
          <Route path="/about-us" element= {<AboutUs />} />         
          <Route path="/contacts" element= {<Contacts />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
