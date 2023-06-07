import capcut from "../../../assets/capcut.png";

import "./rec.css";

export const Rec = () => {
  return (
    <div className="Rec-Conatiner">
        <div className="rec-img">
          <img src={capcut} alt="" />
        </div>
      <div className="text-rec">
        <h1>Aprende a editar tus videos como un profesional</h1>
        <p>Te ofrecemos nuestro plan de aprendizaje sobre edicion de cero a experto, junto con nuestros servicios personalizados para contenido audio visual creado por nuestros expertos.</p>
      </div>
    </div>
  );
};
