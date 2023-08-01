import React from "react";

const Maps = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.5510079755045!2d-74.82433002452231!3d38.97991914183148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bf57d4292377bd%3A0x2ad3fc21bf7bf33d!2sSea%20Ray%20Motel!5e0!3m2!1sen!2sin!4v1690862957580!5m2!1sen!2sin"
        width="600"
        height="450"
        title="Google Map of Sea Ray Motel Location"
        style={{border:'0'}}
        allowfullscreen=""
        loading="fast"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
