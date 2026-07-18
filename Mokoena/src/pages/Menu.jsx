import { cakes } from "../data/cakesData.js";
import { everydayTreats } from "../data/everydayData.js";
import { specialdelights } from "../data/specialdelightsData.js";

// MENU
function Menu() {
  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/*cakes category */}
        <h3 className="text-center text-3xl font-semibold tracking-wide mb-8 text-[#4a2c2a]">CAKES</h3>

        {/* each image card from the array lives here */}
        {/* .map will perform a function in every original array and then return a new array with newly performed function */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {cakes.map((cake) => (
            // key is for react to know which array is which it tracks the id or index of an array
            <div className="bg-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200" key={cake.name}>
              {/* image per Array */}
              <div className="aspect-square overflow-hidden">
                <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
              </div>

              {/* image name and price */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium">{cake.name}</h3>
                <h4 className="text-sm font-semibold text-[#8a5a44] mt-1">{cake.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Treats category */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-center text-3xl font-semibold tracking-wide mb-8 text-[#4a2c2a]">EVERYDAY TREATS</h3>

        {/* each image card from the array lives here */}
        {/* .map will perform a function in every original array and then return a new array with newly performed function */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {everydayTreats.map((treat) => (

            // key is for react to know which array is which it tracks the id or index of an array
            <div className="bg-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200" key={treat.name}>

              {/* image per Array */}
              <div className="aspect-square overflow-hidden">
                <img src={treat.image} alt={treat.name} className="w-full h-full object-cover"/>
              </div>

              {/* image name and price */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium">{treat.name}</h3>
                <h4 className="text-sm font-semibold text-[#8a5a44] mt-1">{treat.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIAL DELIGHTS CATEGORY */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-center text-3xl font-semibold tracking-wide mb-8 text-[#4a2c2a]">SPECIAL DELIGHTS</h3>

        {/* each image card from the array lives here */}
        {/* .map will perform a function in every original array and then return a new array with newly performed function */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {specialdelights.map((delight) => (

            // key is for react to know which array is which it tracks the id or index of an array
            <div className="bg-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200" key={delight.name}>
              
              {/* image per Array */}
              <div className="aspect-square overflow-hidden">
                <img src={delight.image} alt={delight.name} className="w-full h-full object-cover"/>
              </div>

              {/* image name and price */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium">{delight.name}</h3>
                <h4 className="text-sm font-semibold text-[#8a5a44] mt-1">{delight.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Menu;
