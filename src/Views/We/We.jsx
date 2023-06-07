import "./we.css";
import reloj from "../../../assets/reloj.png";
import dolar from "../../../assets/dolar.png";
import usuario from "../../../assets/usuario.png";

export const We = () => {
  return (
    <div className="we-container">

      <div className="we-info">
      <div className="we-img">
        <img src={usuario} alt="" />
        <h1>Configuracion ideal</h1>
      </div>
        <p>
          Te ofrecemos nuestro asesoramiento para configurar de la manera mas
          profesional, empresarial o personal tu usuario de cualquier red social
          de nuestro manejo.
        </p>
      </div>

   
      <div className="we-info">
      <div className="we-img">
        <img src={dolar} alt="" />
        <h1>Monetización</h1>
      </div>
        <p>
          Abarcaremos de la mano de profesionales todo lo que necesitas saber
          hacerca del sistema de monetización de redes sociales y como generar
          rentabilidad con estás.
        </p>
      </div>


      <div className="we-info">
      <div className="we-img">
        <img src={reloj} alt="" />
        <h1>Tiempo</h1>
      </div>
        <p>
          Garantizamos resultados en tiempo record al seguir nuestro plan de
          asesoramiento personalizamo.
        </p>
      </div>
    </div>
  );
};
