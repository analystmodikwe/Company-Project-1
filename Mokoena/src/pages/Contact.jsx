import Map from "../components/Map";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";

// contact info
function Contact() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);

          // only need to trigger once
          observer.disconnect();
        }
      },

      // it will start to load slightly before its's fully in view
      { rootMargin: "200px" },
    );

    // useRef
    if (mapWrapperRef.current) {
      observer.observe(mapWrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you — reach out anytime.
        </p>
      </div>

      {/* the actual map on the browser */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div
          ref={mapWrapperRef}
          className="rounded-xl overflow-hidden shadow-md h-full min-h-[300px]"
        >
          {/* the map will only load when it gets to this point */}
          {shouldLoadMap ? (
            <Map />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm"></div>
          )}
        </div>

        {/* contact info card */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
              <FaPhone />
            </div>

            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-semibold text-gray-800">011 385 1438</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold text-gray-800 break-words">
                info@mokoenattholdings.co.za
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex items-center gap-3 text-green-600">
            <FaWhatsapp className="text-xl" />
            <p className="text-gray-600">
              For more info you can order or enquire through WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
