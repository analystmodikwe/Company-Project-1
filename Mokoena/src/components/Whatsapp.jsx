import { FaWhatsapp } from "react-icons/fa6";

// whatsapp component for customers to be able to order
function Whatsapp() {
  const phoneNumber = "27113851438";
  const message = "Hi, I'd like to place an order";

  // url containing the message and the phone number of the business
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" 
    rel="noopener noreferrer" 

    // styling for making the whatsapp link to be fixed so that it appears in every page the span will turn it to a circle on mobile
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full shadow-lg z-50 flex items-center gap-2 p-4 sm:px-6 sm:py-3">

      <FaWhatsapp className="text-2xl sm:text-xl" />
      <span className="hidden sm:inline">Order Via Whatsapp</span>
    </a>
  );
}

export default Whatsapp;
