// whatsapp component for customers to be able to order
import React from "react";

function Whatsapp() {
  const phoneNumber = "27113851438";
  const message = "Hi, I'd like to place an order";

  // url containing the message and the phone number of the business
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full inline-block">
      Order Via Whatsapp
    </a>
  );
}

export default Whatsapp;
