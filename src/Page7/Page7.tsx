import './Page7.css';
import ProductTable from './ProductTable';
import ProductTable2 from './ProductTable2';
import ProductTable3 from './ProductTable3';

const Page7: React.FC = () => {
  return (
    <section className='page7'>
      <div className='main-container container'>
        <div className='content-container'>
          <div className='label'>
            <div className='text-wrapper'>Información sobre productos</div>
          </div>
          <p>
            <b className='circular-black'>Grapadora ECHELON™ 3000</b>
          </p>
          <ProductTable />
          <br />
          <p>
            <b className='circular-black'>Recargas ECHELON™ ENDOPATH</b>
          </p>
          <ProductTable2 />
          <br />
          <p>
            <b className='circular-black'>Refuerzo de la línea de grapado ECHELON ENDOPATH™</b>
          </p>
          <ProductTable3 />
        </div>

        <div className='info-section2'>
          <div className='label'>
            <div className='text-wrapper3 mb-4'>
              Comuníquese con su representante de Ethicon para obtener más
              información.
            </div>
            <p className='circular-book text-xs'>
              Las marcas comerciales de terceros utilizadas en este documento
              son marcas comerciales de sus respectivos propietarios. Para
              obtener indicaciones, contraindicaciones, advertencias,
              precauciones y reacciones adversas completas, consulte el
              prospecto completo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page7;
