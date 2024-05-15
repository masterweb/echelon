import './Footer.css';
import logoEthicon from './assets/logo-ethicon.png';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-12'>
            <p>
              260307-231018
              <br />
              ©Johnson &amp; Johnson MedTech Colombia S.A.S., 2023.
              <br />
              Material Promocional destinado para Profesionales de la Salud.{' '}
              <br />
              Para obtener información más detallada y completa sobre el(los)
              producto(s), como indicaciones de uso, contraindicaciones,
              advertencias y otra información importante, por favor leer el
              Manual de usuario /Instrucciones de Uso.
              <br />
              En Puerto Rico: Johnson & Johnson Medical Caribbean an
              unincorporated division of Johnson & Johnson International. 475
              Calle C, Suite 200, Guaynabo, PR 00969.
              <br />
              En Chile: Johnson & Johnson de Chile S.A. Cerro Colorado 5240,
              torre1, piso 9, Las Condes, Santiago de Chile.
            </p>
            <p className='text-justify'>
              Referencias: <br />
              <b>1</b> Comparación de los ángulos de articulación máximos
              promedio entre la Grapadora ECHELON™ 3000, la Grapadora ECHELON™+
              y el de la competencia (201020-220112)
              <b>2</b> Comparación de la longitud de la junta de articulación
              entre la Grapadora ECHELON™ 3000 (28,4 mm) y la Grapadora
              ECHELON™+ (38,7 mm).
              <b>3</b> Comparación de la apertura de mordaza promedio entre la
              Grapadora ECHELON™ 3000, la Grapadora ECHELON™+ y el de la
              competencia (201021-220112)
              <b>4</b> (203805-220216)
              <b>5</b> (203806-220408)
              <b>6</b> Comparación del ángulo de articulación promedio y la
              apertura de mandíbula promedio entre la Grapadora ECHELON™ 3000,
              la Grapadora ECHELON™+ y el de la competencia (207537-220323)
              <b>7</b> Comparación del ángulo de articulación máximo promedio
              para la Grapadora ECHELON™ 3000 de 60 mm (56,51°) frente al
              Sistema de grapado de la competencia de 60 mm (44,56°), p&lt;0,05.
              (201022-220112)
              <b>8</b> Comparación de la apertura de mandíbula promedio para la
              Grapadora ECHELON™ 3000 de 60 mm (22,79 mm) con el Sistema de
              grapado de la competencia de 60 mm (16,38 mm), p&lt;0,001.
              (202186-220126)
              <b>9</b> Comparación de la longitud del vástago de articulación
              entre la Grapadora ECHELON™ 3000 (28,4 mm) y la Grapadora
              ECHELON™+ (38,7 mm).
              <b>10</b> Las funciones de control incluyen articulación eléctrica
              y la capacidad de realizar ajustes de articulación en 1°.
              (207540-220323)
              <b>11</b> (203806-220408)
              <b>12</b> (203805-220216)
              <b>13</b> (203809-220216)
              <b>14</b> Prueba de sobremesa en íleon porcino a ≤ 40 mmHg que
              compara la grapadora ECHELON™ 3000 con GST Reload GST60B con la
              grapadora de la competencia con Tri-Staple Reload EGIA60AMT.
              Número acumulado de pruebas con fugas (1/30) y (9/32)
              respectivamente, p = 0,002 (208151-220330)
              <b>15</b> La Grapadora ECHELON™ 3000 con GST60T tuvo una tasa de
              grapas malformadas del 0,24 % en comparación con una tasa de
              grapas malformadas del 0,71 % para el Sistema de grapado de la
              competencia con SIG60AXT en tejido objetivo de 4,0 mm, p&lt;0,001.
              (208149-220330)
              <b>16</b> En pruebas de laboratorio en tejido estomacal porcino de
              4,0 mm de grosor, la Grapadora ECHELON™ 3000 con GST60T tuvo un
              cambio longitudinal medio menor en comparación con el Sistema de
              grapado de la competencia (0,549 mm frente a 3,318 mm), valor de p
              &lt; 0.001. (208150-220330)
              <b>17</b> Rawlins L, Johnson BH, Johnston SS, et al. Evaluación
              comparativa de la eficacia de dos plataformas eléctricas de
              grapado quirúrgico en la gastrectomía en manga laparoscópica: un
              estudio retrospectivo emparejado. Dispositivos médicos: evidencia
              e investigación. 2020:13:195–204. doi: https://doi.org/10.2147/
              MDER.S256237. Miller DL, Roy S, Kassis ES, et al. Impacto de la
              tecnología de grapado endoscópico motorizado y específico de
              tejido en los resultados clínicos y económicos de los
              procedimientos de lobectomía de cirugía torácica asistida por
              video: un estudio observacional retrospectivo. Ter. av. 16 de
              abril de 2018. doi: 10.1007/s12325-018-0679-z. Sylla P, Sagar P,
              Johnston S, et al. Resultados asociados con el uso de una nueva
              engrapadora circular eléctrica para reconstrucciones colorrectales
              del lado izquierdo: una puntuación de propensión que empareja una
              comparación indirecta ajustada con engrapadoras circulares
              manuales. Endoscopia Quirúrgica. 2021. doi:
              10.1007/s00464-021-08542-7. (192176-211013)
            </p>
          </div>
          <div className='col-md-6 col-12 d-flex cont-logo'>
            {/* <div className='d-flex gap-4 my-6 flex-mb flex-col-t'>
              <a
                href='https://cloud.latam.jnjmedtech.com/prod-digital-reg-form?lang=ES&amp;brand=23&amp;utm_campaign=Harmonic&amp;utm_medium=QR&amp;utm_source=showpad'
                target='_blank'
                className='btn btn-etc-harmonic text-stag w-280'
              >
                Regístrate aquí
              </a>
              <a
                href='https://www.jnjmedtech.com/es-419/companies/ethicon'
                target='_blank'
                className='btn btn-etc-harmonic text-stag w-280'
              >
                Conoce más de Ethicon
              </a>
            </div> */}
            <img
              className='ethicon-logo'
              src={logoEthicon}
              alt='ethicon logo'
              width='320px'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
