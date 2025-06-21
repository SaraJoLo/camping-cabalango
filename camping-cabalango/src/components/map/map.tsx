import React from 'react';
import './Map.scss';

const Map = () => {
  const handleClick = () => {
    window.open(
      'https://www.google.com/maps/place/Camping+Cabalango/@-31.4012293,-64.5531739,17z',
      '_blank'
    );
  };

  return (
    <div className="map" onClick={handleClick}>
      <h3> ¿CÓMO LLEGAR?</h3>
      <iframe
        title="Ubicación Camping Cabalango"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.4680077670896!2d-64.55317392468427!3d-31.401229295518196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6f35f4c6c95f%3A0x754335de1d1d096b!2sCamping%20Cabalango!5e0!3m2!1ses!2sar!4v1750168823505!5m2!1ses!2sar"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
