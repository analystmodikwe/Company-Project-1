import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

// const year = new Date().getFullYear(); this will update the current year, every year automatically {year} will hold current year
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <h3>MOKOENA TT HOLDINGS</h3>

      <p>Locally made, Freshly Baked Goods</p>

      <br></br>

      <p>
        <FaLocationDot /> 469 Ithusi Street, Phola Park Ext. 1, Thokoza, 1426
      </p>

      <br></br>

      <p>
        <FaPhone /> 011 385 1438
      </p>

      <br></br>

      <p>
        <FaEnvelope /> info@mokoenattholdings.co.za
      </p>

      <br></br>

      <p>© {year} Mokoena TT Holdings. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
