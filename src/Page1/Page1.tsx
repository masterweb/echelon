import './Page1.css';
import imgProduct from '../assets/page1/product.png';
import imgModel from '../assets/page1/banner-model.png';

export const Page1 = (): JSX.Element => {
  return (
    <section className='page1'>
      <div className='main-container container'>
        <div className="row">
          <div className='left-area col-lg-5'>
            <img src={imgModel} alt='Product' className='img-fluid'/>
          </div>
          <div className='right-area col-lg-7'>
            <div className='right-top-area'>
              <div className='label'>
                <p className='text-wrapper mb-5 text-sm-title'>Una mejor <br /> experiencia quirúrgica</p>
                <p className='text-wrapper text-sm-title border-sep'>Al alcance de su mano</p>
              </div>
            </div>
            <div className='right-bottom-area'>
              <img src={imgProduct} alt='Product' />
              <br />
              <div className='label'>5
                <div className='text-wrapper2'>
                  Juntos reimaginamos como sanar™
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
