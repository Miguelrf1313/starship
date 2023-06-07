import { CategoryCards } from "./CategoryCards";
import "./category.css";



// import "../Slider/slider.css";

export const Category = () => {
  return (
    <>
      <div className="category-container">
        <div className="category-box">
          <div className="info-category">
            <div className="data-category">
              <h1>Nuestros cursos mas llamativos</h1>
              <p>
                Aqui podras encontar nuestros cursos top del momento, todos
                sertificados de la mano de profesionales en sus respectivos
                campos
              </p>
            </div>
          </div>
          <div className="input-category">
            <input type="text" placeholder="Buscar..." />
          </div>
        </div>

        <CategoryCards/>
      </div>
    </>
  );
};
