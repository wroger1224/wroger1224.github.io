import Snowfall from "react-snowfall";
import './TackySnow.css';
import { useEffect, useState } from "react";


export default function TackySnow() {
  const [snowHeight, setSnowHeight] = useState(0); // Height percentage of the snow pile
  const maxHeight = 80; // Max height the snow can reach (in vh or percentage)

  useEffect(() => {
    // Increase the snow pile height every 2 seconds
    const accumulationInterval = setInterval(() => {
      setSnowHeight(currentHeight => {
        if (currentHeight >= maxHeight) {
          clearInterval(accumulationInterval);
          return maxHeight;
        }
        // Increment the height. Adjust '5' for faster or slower accumulation
        return currentHeight + 5;
      });
    }, 2000); // 2 seconds

    return () => clearInterval(accumulationInterval);
  }, []);

  return (
    /*<EmojiCursor emoji="shovel">*/
      <div className="tacky-container">
        {/* Background Falling Snow (use react-snowfall for the falling effect) */}
        <Snowfall
          snowflakeCount={30}
          style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
        />

        {/* The Accumulating Snow Pile Div */}
        <div
          className="snow-pile"
          style={{ height: `${snowHeight}vh` }}
        >
          {/* Optional: Add some "tacky" text or a simple snow texture background here via CSS */}
        </div>

        <div className="content">
          <h1>Welcome to my Tacky Website!</h1>
          <p>Stay too long and you'll be snowed in!</p>
        </div>
      </div>
    /*</EmojiCursor>*/
  );
}
