import { Slider } from "../Slider/Slider";
import "./feature.css";

export const Feature = () => {
  return (
    <>
      <div className="feature-le">
        <h1>Nuestras lecciones</h1>
      </div>

      <div className="feature-container">
        <div className="feature-box">
            <Slider />
            <button>Ver todas las lecciones</button>
        </div>
        
      </div>
    </>
  );
};
