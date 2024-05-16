import './Page4.css';
import ProductCard from './ProductCard';
import img1 from '../assets/page4/pg4image1.png';
import img2 from '../assets/page4/pg4image2.png';
import img3 from '../assets/page4/rectangle.png';

const Page4: React.FC = () => {
  return (
    <section className='page4'>
      <div className='main-container container'>
        <div className="row">
          <div className='content-container col-md-12 col-lg-9 col-xl-10'>
            <div className='label'>
              <div className='text-wrapper text-sm-title-section'>
                <p>
                  Control mejorado para una colocación precisa en el tejido
                  <sup>10</sup>
                </p>
              </div>
            </div>
            <div className='product-cards-container'>
              <ProductCard
                description={
                  <span>
                    Articulación eléctrica continua<sup>11</sup>
                  </span>
                }
                imageUrl={img1}
              />
              <ProductCard
                description={
                  <span>
                    Uso con una sola mano
                    <sup>12</sup>
                  </span>
                }
                imageUrl={img2}
              />
            </div>
          </div>
          <div className='info-section col-md-12 col-lg-3 col-xl-2'>
            <div className='iconDiv'>
              <img src={img3} alt='rectangle' className='icon' />
            </div>
            <p>La Grapadora ECHELON™ 3000 cuenta con un software que permite:</p>
            <ul>
              <li>Hay un ajuste de articulación por cada 1°</li>
              <li>Articulación con la mandíbula parcialmente cerrada</li>
              <li>
                Botones de articulación izquierda/derecha que siempre mueven el
                efector final en la misma dirección, incluso cuando la mandibula
                se gira al revés
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
