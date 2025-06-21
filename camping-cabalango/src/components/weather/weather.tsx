import { useEffect } from "react";
import "./weather.scss";

const Weather = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.meteored.com/widget/loader/14794f837367aa9a7327cafd05009953";
    script.async = true;
    script.id = "meteored-script";

    const widgetContainer = document.getElementById("meteored-widget");

    if (widgetContainer) {
      widgetContainer.innerHTML = ""; 
      widgetContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="weather-widget">
      <div id="meteored-widget"></div>
    </div>
  );
};

export default Weather;
