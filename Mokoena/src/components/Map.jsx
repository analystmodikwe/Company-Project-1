// map component with the Business exact location on google
function Map() {
  return (
    <div >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.9483295133778!2d28.1204628752044!3d-26.360533176980574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951caf4cd8fd99%3A0xc4572d5df6fd70!2s469%20Ithusi%20Street%2C%20Phola%20Park%2C%20Thokoza%2C%201427!5e0!3m2!1sen!2sza!4v1784177049382!5m2!1sen!2sza"

        width="600"

        height="450"

        // i changed style="border:0;" to style={{ border: 0 }} because react wants javascript object not a string
        style={{ border: 0, }}

        // i changed it into camelcase
        allowFullScreen=""

        loading="lazy"

        //  i changed it into camel case
        referrerPolicy="strict-origin-when-cross-origin"

        title="Mokoena TT Holdings Location"


      ></iframe>
    </div>
  );
}

export default Map;
