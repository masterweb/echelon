import FeatureCard from './FeatureCard';
import './Page3.css';
import './FeatureCard.css';
import img1 from '../assets/page3/image1.png';
import img2 from '../assets/page3/image2.png';
import img3 from '../assets/page3/image3.png';

const Page3: React.FC = () => {
  return (
    <section className='page3'>
      <div className='main-container container'>
        <div className='label'>
          <div className='text-wrapper text-sm-title-section'>
            Acceso mejorado para anatomía desafiante<sup>6</sup>
          </div>
        </div>
        <div className='feature-cards-container'>
          <FeatureCard
            description={
              <span>
                <b>Mayor articulación</b> vs. las grapadoras para cirugia
                minimamente invasiva líderes en la actualidad<sup>6</sup>
              </span>
            }
            imageUrl={img1}
          />
          <FeatureCard
            description={
              <span>
                <b>Mayor apertura de mandíbula</b> vs. las grapadoras para
                cirugia minimamente invasiva líderes en la actualidad
                <sup>6</sup>
              </span>
            }
            imageUrl={img2}
          />
          <FeatureCard
            description={
              <span>
                <b>Longitud más corta de junta de articulación</b> en
                comparación con otras Grapadoras Eléctricas Ethicon<sup>9</sup>
              </span>
            }
            imageUrl={img3}
          />
        </div>
      </div>
    </section>
  );
};

export default Page3;
