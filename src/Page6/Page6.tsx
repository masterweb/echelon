import './Page6.css';
import img1 from '../assets/page6/image.png';
import icon1 from '../assets/page6/icon1.png';
import icon2 from '../assets/page6/icon2.png';
import icon3 from '../assets/page6/icon3.png';

const Page6: React.FC = () => {
  return (
    <section className='page6'>
      <div className='main-container container'>
        <div className='content-container'>
          <div className='label'>
            <div className='text-wrapper'>
              <p>
                Resultados basados en el desempeño. Respaldados por evidencia.
              </p>
            </div>
            <div className='text-wrapper2 mb-4 '>
              Las diferencias de diseño importan cuando se trata de rendimiento
              y resultados. Desde 2017, el uso de las Grapadoras Eléctricas
              ECHELON™ ha demostrado una asociación con mejores resultados
              clínicos y económicos, en todos los tipos de tejido, poblaciones
              de pacientes y países, en estudios a gran escala, del mundo real y
              revisados por profesionales médicos.
            </div>
          </div>
          <div className='image-pg5-container'>
            <img src={img1} alt='La seguridad en la línea de grapas' />
          </div>
        </div>
        <div className='info-section'>
          <p>
            <b className='circular-black'>Grapadoras Eléctricas ECHELON™</b>
            <br />
            Asociadas con mejores resultados clínicos y económicos<sup>17</sup>
          </p>
          <div className='container-3-elements'>
            <div className='element'>
              <img src={icon1} alt='Icon' />
              <p className='red-text'>Complicaciones clínicas reducidas</p>
            </div>
            <div className='element'>
              <img src={icon2} alt='Icon' />
              <p className='red-text'>Costos hospitalarios reducidos</p>
            </div>
            <div className='element'>
              <img src={icon3} alt='Icon' />
              <p className='red-text'>Mayor eficiencia</p>
            </div>
          </div>
          <p>Demostrado por evidencia a gran escala, del mundo real</p>
          <div className='container-3-elements'>
            <div className='element'>
              <p className='highlighted-number'>9</p>
              <br />
              <p>
                <b className='circular-black text-xs'>estudios</b>
              </p>
              <br />
              <p className='highlighted-number'>700+</p>
              <br />
              <p>
                <b className='circular-black text-xs'>hospitales</b>
              </p>
            </div>
            <div className='element'>
              <p className='highlighted-number'>7</p>
              <br />
              <p>
                <b className='circular-black text-xs'>países</b>
              </p>
              <br />
              <p className='highlighted-number'>66</p>
              <br />
              <p>
                <b className='circular-black text-xs'>autores</b>
              </p>
            </div>
            <div className='element'>
              <p className='highlighted-number'>3</p>
              <br />
              <p>
                <b className='circular-black text-xs'>continentes</b>
              </p>
              <br />
              <p className='highlighted-number'>46.000+</p>
              <br />
              <p>
                <b className='circular-black text-xs'>pacientes</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page6;
