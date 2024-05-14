import './Page2.css';
import imgPage2 from '../assets/page2/page2.png';

export const Page2 = (): JSX.Element => {
  return (
    <section className='page2'>
      <div className='main-container container'>
        <div className="row">
          <div className='label col-md-12'>
            <div className='text-wrapper'>Grapadora ECHELON™ 3000</div>
          </div>
          <div className='label col-md-12'>
            <div className='text-wrapper2'>
              Cada cirugía es diferente porque ningún paciente es igual, por esta
              razón construimos este dispositivo. El diseño intuitivo de la
              Grapadora ECHELON™ 3000 puede adaptarse a una gama más amplia de
              variaciones de tejido, lo que ayuda a centrarse únicamente en el
              paciente. Con mayor acceso y control, los cirujanos pueden cumplir
              con su plan preoperatorio.
            </div>
            <img src={imgPage2} alt='Descripción del dispositivo' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
