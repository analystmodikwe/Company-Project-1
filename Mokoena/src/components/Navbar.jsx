// navigation bar
function Navbar() {
  return (
    <div className="text-right px-7 my-3">
      <nav>
        <button className="px-8  hover:bg-blue-900 text-black font-bold px-2 mx-1 rounded mb-2" >HOME</button>

        <button className="px-8 hover:bg-blue-900 text-black font-bold px-2 mx-1 rounded mb-2" >SERVICES</button>

        <button className="px-8 hover:bg-blue-900 text-black font-bold px-2 mx-1 rounded mb-2" >ABOUT-US</button>

        <button className="px-8  hover:bg-blue-900 text-black font-bold px-2 mx-1 rounded mb-2" >CONTACTS</button>

        <button className="px-8 hover:bg-blue-900 text-black font-bold px-2 mx-1 rounded mb-2" >OUR-PRODUCTS</button>
      </nav>
    </div>
  );
}

export default Navbar;
