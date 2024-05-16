import './Page7.css';
import ProductTable from './ProductTable';
import ProductTable2 from './ProductTable2';
import ProductTable3 from './ProductTable3';

const Page7: React.FC = () => {
  return (
    <section className='page7'>
      <div className='main-container container'>
        <div className="row">
          <div className='content-container col-md-12 col-lg-9'>
            <div className='label'>
              <div className='text-wrapper text-sm-title-section'>Información sobre productos</div>
            </div>
            <p>
              <b className='circular-black'>Grapadora ECHELON™ 3000</b>
            </p>
            <ProductTable />
            <br />
            <p className='mt-3'>
              <b className='circular-black'>Recargas ECHELON™ ENDOPATH</b>
            </p>
            <ProductTable2 />
            <br />
            <p className='mt-3'>
              <b className='circular-black'>Refuerzo de la línea de grapado ECHELON ENDOPATH™</b>
            </p>
            <ProductTable3 />
          </div>

          <div className='info-section2 col-md-12 col-lg-3 d-flex align-items-center'>
            {/* <div className='label'>
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
            </div> */}
            <div className='d-flex gap-4 my-6 flex-mb flex-col-t flex-column justify-center align-items-center'>
              <a
                href='https://cloud.latam.jnjmedtech.com/RequestDemoProductForm?lang=ES&brand=4&utm_campaign=Echelon3000&product=echelon3000&UTM_Medium=Congress&UTM_Source=Showpad'
                target='_blank'
                className='btn btn-etc-harmonic text-stag w-280'
              >
                Quiero saber más
              </a>
              <a
                href='https://www.jnjmedtech.com/es-419/companies/ethicon'
                target='_blank'
                className='btn btn-etc-harmonic text-stag w-280'
              >
                Conoce más de Ethicon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page7;
