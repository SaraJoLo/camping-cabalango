import { useEffect, useRef } from "react";
import "./weather.scss";

const Weather = () => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://api.meteored.com/widget/loader/14794f837367aa9a7327cafd05009953";
    script.async = true;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="weather-widget">
      <div
        id="mrwid14794f837367aa9a7327cafd05009953"
        ref={widgetRef}
      />
    </div>
  );
};

export default Weather;
