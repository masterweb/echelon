import './Page5.css';
import img1 from '../assets/page5/pg5img.png';
import rectangle1 from '../assets/page5/rectangle1.png';
import rectangle2 from '../assets/page5/rectangle2.png';
import rectangle3 from '../assets/page5/rectangle3.png';
import HighlightCard from './HighlightCard';

const Page5: React.FC = () => {
  return (
    <section className='page5'>
      <div className='main-container container'>
        <div className='content-container'>
          <div className='label'>
            <div className='text-wrapper'>
              <p>
                La seguridad en la línea de grapas que los cirujanos esperan de
                las Grapadoras ECHELON™
              </p>
            </div>
          </div>
          <div className='image-pg5-container'>
            <img src={img1} alt='La seguridad en la línea de grapas' />
          </div>
        </div>
        <div className='info-section'>
          <p className='text-wrapper2'>
            En comparación con el Sistema de Grapado del principal competidor en
            pruebas preclínicas y de laboratorio:
          </p>
          <div>
            <HighlightCard
              rectangle={rectangle1}
              description='<b>Significativamente menos fugas en la línea de grapas<sup>14</sup></b>'
            />
          </div>
          <div>
            <HighlightCard
              rectangle={rectangle2}
              description='<b>66% menos grapas malformadas en tejido grueso<sup>15</sup></b>'
            />
          </div>
          <div>
            <HighlightCard
              rectangle={rectangle3}
              description='<b>4x menos deslizamiento de tejido durante el disparo<sup>16</sup></b>'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
