import { services } from "../data/services.js";

// services
function Services() {
  return (

    <div className="relative  overflow-hidden">

      {/* background Blur */}
      <div className= "absolute inset-0 -z-10">

        {/* the orange blur top left and bottom left */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-300 rounded-full blur-2xl opacity-40 will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-2xl opacity-30 will-change-transform"></div> 

      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-orange-700 font-semibold tracking-wide uppercase text-sm mb-2">
            What We Offer
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
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
              {/* image per Array */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* image name  */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-700 text-center">
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
