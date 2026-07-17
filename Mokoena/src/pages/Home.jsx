import WelcomePic from "../images/WelcomePic.png"

function Home() {
    
    
  return (
    <div>

      {/* hero section */}
      <div className="relative w-full h-[80vh] overflow-hidden ">
        <img src={WelcomePic} alt="Freshly baked bread and pastries at Mokoena TT Holdings" className="w-full h-full object-cover" />

        {/* dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"> Welcome to Mokoena TT Holdings </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">Freshly Baked Goods, Locally Made</p>
        </div>



      </div>
      
     
    </div>
  )
}

export default Home