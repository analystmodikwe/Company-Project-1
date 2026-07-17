import ArtisanBread1 from "../images/services-images/ArtisanBread1.jpg";
import CustomCupCakes from "../images/services-images/CustomCupCakes.jpg";
import DelectableCakes from "../images/services-images/DelectableCakes.jpg";
import MeltingMoments from "../images/services-images/MeltingMoments.jpg";
import SeasonalSpecials from "../images/services-images/SeasonalSpecials.jpg";
import SpecialOccasionTreats from "../images/services-images/SpecialOccasionTreats.jpg";

import Background from "../images/services-images/Background.png";


//  an array to hold parts/images that differ
const services = [
  { name: "Artisan Breads", image: ArtisanBread1 },
  { name: "Custom Cup Cakes", image: CustomCupCakes },
  { name: "Delectable Cakes", image: DelectableCakes },
  { name: "Melting Moments", image: MeltingMoments },
  { name: "Seasonal Specials", image: SeasonalSpecials },
  { name: "Special Occasion Treats", image: SpecialOccasionTreats },
];

// services
function Services() {
  return (

    // background image
        <div
          className="relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${Background})` }}
        >
          
          {/* dark overlay so cards stay readable */}
          <div className="absolute inset-0 bg-black/10"></div>




      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2">
            What We Offer
          </p>
          <h1 className="text-4xl font-bold text-gray-400">
            Our Delicious Offerings
          </h1>
        </div>

        {/* .map will take perform a function in every single element/picture in the array and then render a new array with the newly performed function */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            // key={service.name} this is how react tracks which array is which like the id of an array so that when there are changes it will efficiently figure out
            <div
              key={service.name}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-transparent"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-orange-100 text-center">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
       </div>
  );
}

export default Services;
