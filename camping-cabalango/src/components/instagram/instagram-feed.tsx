import { useEffect } from 'react';
import './instagram-feed.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="instagram-feed">
      
      <iframe
        title="Instagram Feed"
        src="https://cdn.lightwidget.com/widgets/371d439a56455cff9c87feb678d2182c.html"
        scrolling="no"
        allowTransparency={true}
        className="lightwidget-widget"
        style={{ width: '100%', border: 0, overflow: 'hidden' }}
      ></iframe>
      <a
         href="https://www.https://www.instagram.com/campingcabalango/"
         target="_blank"
         rel="noopener noreferrer"
         className="instagram-button"
        >
       <FontAwesomeIcon icon={faInstagram} className="icon" />
          Ver más en Instagram
        <FontAwesomeIcon icon={faArrowRight} className="arrow" />
      </a>

    </section>
  );
};

export default InstagramFeed;
