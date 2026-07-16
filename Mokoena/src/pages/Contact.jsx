// import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import { FaShieldHalved, FaFileLines, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6"; 

function Contact() {
    // const navigate = useNavigate();
    
  return (
    <div>
      <Map /> 

      <p dir="rtl" class="float-start"> <FaPhone /> 011 385 1438 </p>

      <p dir="rtl" class="float-start"> <FaEnvelope /> info@mokoenattholdings.co.za </p>
           
    </div>
  )
}

export default Contact;