import Navbar from "./components/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Services from "./pages/Services.jsx";
import Whatsapp from "./components/Whatsapp.jsx";
import Footer from "./components/Footer.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="min-h-screen py-10 px-7 border-t border-gray-200"
      >
        <Home />
      </section>

      <section
        id="services"
        className="min-h-screen py-10 px-7 border-t border-gray-200"
      >
        <Services />
      </section>

      <section
        id="menu"
        className="min-h-screen py-10 px-7 border-t border-gray-200"
      >
        <Menu />
      </section>

      <section
        id="about-us"
        className="min-h-screen py-10 px-7 border-t border-gray-200"
      >
        <AboutUs />
      </section>

      <section
        id="contacts"
        className="min-h-screen py-10 px-7 border-t border-gray-200"
      >
        <Contact />
      </section>

      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
