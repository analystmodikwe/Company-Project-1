// about us, information about the business

function AboutUs() {
    
  // About us page
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2"> Our Story</p>
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      </div>
        
      <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-gray-900">Mokoena TT Holdings</span>, baking is more than a business—it's our passion. We specialize in creating freshly baked bread, cakes, and pastries using premium ingredients and time-tested baking techniques.
          </p>

          <p>
            Our mission is to provide our customers with delicious, high-quality products at affordable prices while delivering exceptional customer service. Every item we bake reflects our commitment to freshness, consistency, and excellence.
          </p>

          <p>
            Whether you're stopping by for your daily loaf or ordering for a special celebration, we're dedicated to making every visit a delightful experience.
            <br></br>               
        </p>
      </div>

      <div className="mt-12 text-center border-t border-gray-100 pt-10">
        <p className="text-2xl font-semibold text-gray-900 italic">Freshly Baked. Expertly Crafted. Always Affordable. </p>
      </div>

    </div>
  );
}

export default AboutUs;
