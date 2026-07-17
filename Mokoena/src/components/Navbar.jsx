// navigation bar
// ?. optional chain operator, it will only run if the value befor it exist else it will throw error
// scrollIntoveiw will ensure that you dont navigate, the page scroll when veiwing,by its navbar
//  window.history.pushState(null, "", `/#${id}`);  updates URL, no reload

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behaviour: "smooth" });
    window.history.pushState(null, "", `/#${id}`);
  };

  // buttons with onclick event listner for navigating to the correct page
  // type = "button" to ensure that it doesn't default to type = "submit"
  return (
    <nav className="sticky top-0  backdrop-blur-md bg-white/30 z-50 text-right px-7 my-3">
      <button
        className="px-8 cursor-pointer  hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        type="button"
        onClick={() => scrollToSection("home")}
      >
        HOME
      </button>

      <button
        className="px-8 cursor-pointer hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        type="button"
        onClick={() => scrollToSection("services")}
      >
        SERVICES
      </button>

      <button
        className="px-8 cursor-pointer hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        type="button"
        onClick={() => scrollToSection("menu")}
      >
        MENU
      </button>

      <button
        className="px-8 cursor-pointer hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        type="button"
        onClick={() => scrollToSection("about-us")}
      >
        ABOUT-US
      </button>

      <button
        className="px-8 cursor-pointer  hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        type="button"
        onClick={() => scrollToSection("contacts")}
      >
        CONTACTS
      </button>
    </nav>
  );
}

export default Navbar;
