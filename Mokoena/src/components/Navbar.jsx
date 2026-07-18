// navigation bar
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ?. optional chain operator, it will only run if the value befor it exist else it will throw error
  // scrollIntoveiw will ensure that you dont navigate, the page scroll when veiwing,by its navbar
  //  window.history.pushState(null, "", `/#${id}`);  updates URL, no reload
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `/#${id}`);

    // close the menu after clicking a link on mobile
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "services", label: "SERVICES" },
    { id: "menu", label: "MENU" },
    { id: "about-us", label: "ABOUT-US" },
    { id: "contacts", label: "CONTACTS" },
  ];

  // buttons with onclick event listner for navigating to the correct page
  // type = "button" to ensure that it doesn't default to type = "submit"
  return (
    <nav className="sticky top-0 bg-white/90 z-50 px-7 py-3">
      <div className="flex items-center justify-end">
        {/* hamburger toggle - only visible on mobile */}
        <button
          type="button"
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* desktop nav - always visible from md up */}
        <div className="hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="cursor-pointer hover:bg-blue-700 text-black font-bold px-4 mx-1 rounded"
              type="button"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* mobile dropdown - only shows when isOpen is true */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-end mt-3 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="cursor-pointer hover:bg-blue-700 text-black font-bold px-4 rounded"
              type="button"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
