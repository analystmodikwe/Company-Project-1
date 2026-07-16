import {
  FaShieldHalved,
  FaFileLines,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

// const year = new Date().getFullYear(); this will update the current year, every year automatically {year} will hold current year
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8  hover:bg-blue-700 text-black font-bold px-2 mx-1 rounded mb-2">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
        <h3 className="text-2xl font-bold text-gray-400 tracking-wide">
          MOKOENA TT HOLDINGS
        </h3>
        <p className="text-gray-400 text-sm">
          Locally made, Freshly Baked Goods
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 text-sm text-gray-300">
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-orange-400" />
            469 Ithusi Street, Phola Park Ext. 1, Thokoza, 1426
          </p>

          <p className="flex items-center gap-2">
            <FaPhone className="text-orange-400" />
            011 385 1438
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope className="text-orange-400" />
            info@mokoenattholdings.co.za
          </p>
        </div>

        <p className="flex items-center gap-2">
          <FaShieldHalved /> Privacy Policy
        </p>
        <p className="flex items-center gap-2">
          <FaFileLines /> Terms &amp; Conditions
        </p>
        <p>© {year} Mokoena TT Holdings. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
