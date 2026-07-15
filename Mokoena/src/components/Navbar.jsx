import { useNavigate } from "react-router-dom";


// navigation bar
function Navbar() {

  const navigate = useNavigate();

  // buttons with onclick event listner for navigating to the correct page via useNavigate
  return (
    <div className="text-right px-7 my-3">
      <nav>
        <button className="px-8  hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        onClick={() => navigate ("/")} 
        >HOME
        </button>

        <button className="px-8 hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        onClick={() => navigate ("/services")} 
        >SERVICES
        </button>

        <button className="px-8 hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        onClick={() => navigate ("/our-products")}
        >OUR-PRODUCTS  
        </button>

        <button className="px-8 hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2" 
        onClick={() => navigate ("/about-us")}
        >ABOUT-US
        </button>

        <button className="px-8  hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2"
        onClick={() => navigate ("/contacts")}
        >CONTACTS
        </button>  

      </nav>
    </div>
  );
}

export default Navbar;
