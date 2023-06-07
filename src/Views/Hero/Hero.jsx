import influ1 from '../../../assets/influ1.jpg'
import influ2 from '../../../assets/influ2.jpg'
import "./hero.css"

export const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <div className="hero-info">
            <h1>Es hora de que el mundo conozca tu potencial</h1>
            <div className="botones-hero">
                <button> Empezar </button>
                <button> Mas </button>
            </div>
        </div>

        <div className="hero-image">
            <div className="img1">
                <img src={influ1} alt="" />
            </div>
            <div className="img2">
                <img src={influ2} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}
