import men from "../../../assets/men.jpg";
import libro from "../../../assets/libro.png";
import rec from "../../../assets/rec.jpg";
import redes from "../../../assets/redes.jpg";
import fotos from "../../../assets/fotos.jpg";
import reloj from "../../../assets/reloj.png";

import "./slider.css";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-containder">
        <div className="card-wrapper">
          <div className="card">
            <div className="silder-img">
              <img src={men} alt="" />
            </div>
            <div className="info-card">
              <h3>Lección 1</h3>
              <p>Como definir tu trayectoria y conseguir tu nicho</p>
            </div>
            <div className="detalles">
              <img src={libro} alt="" />
              <p>5 modulos</p>
              <img src={reloj} alt="" />
              <p>45 minutos</p>
            </div>
          </div>

          <div className="card">
            <div className="silder-img">
              <img src={rec} alt="" />
            </div>
            <div className="info-card">
              <h3>Lección 2</h3>
              <p>Aprende a grabar tu contenido de manera facil</p>
            </div>
            <div className="detalles">
              <img src={libro} alt="" />
              <p>7 modulos</p>
              <img src={reloj} alt="" />
              <p>2 horas</p>
            </div>
          </div>

          <div className="card">
            <div className="silder-img">
              <img src={redes} alt="" />
            </div>
            <div className="info-card">
              <h3>Lección 3</h3>
              <p>Aprende a combinar el poder de todas tu resdes sociales</p>
            </div>
            <div className="detalles">
              <img src={libro} alt="" />
              <p>8 modulos</p>
              <img src={reloj} alt="" />
              <p>90 minutos</p>
            </div>
          </div>

          <div className="card">
            <div className="silder-img">
              <img src={fotos} alt="" />
            </div>
            <div className="info-card">
              <h3>Lección 4</h3>
              <p>Edita tu contenido de la manera mas profesional</p>
            </div>
            <div className="detalles">
              <img src={libro} alt="" />
              <p>9 modulos</p>
              <img src={reloj} alt="" />
              <p>136 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
