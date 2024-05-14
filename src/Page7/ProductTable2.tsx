import React from 'react';
import img2 from '../assets/page7/product2.png';
import './ProductTable.css';

const products = [
  {
    codigoProducto: ['GST45W', 'GST60W'],
    color: 'Blanca',
    descripcion: 'Recarga blanca diseñada para uso en tejido delgado',
    alturaDeLaGrapaAbierta: '2,6mm',
    alturaDeLaGrapaCerrada: '1,0mm',
    cantidad: 12,
  },
  {
    codigoProducto: ['GST45B', 'GST60B'],
    color: 'Azul',
    descripcion: 'Recarga azul diseñada para uso tejido regular',
    alturaDeLaGrapaAbierta: '3,6mm',
    alturaDeLaGrapaCerrada: '1,5mm',
    cantidad: 12,
  },
  {
    codigoProducto: ['GST45D', 'GST60D'],
    color: 'Dorada',
    descripcion: 'Recarga dorada diseñada para uso en tejido regular/grueso',
    alturaDeLaGrapaAbierta: '3,8mm',
    alturaDeLaGrapaCerrada: '1,8mm',
    cantidad: 12,
  },
  {
    codigoProducto: ['GST45G', 'GST60G'],
    color: 'Verde',
    descripcion: 'Recarga verde diseñada para uso en tejido grueso',
    alturaDeLaGrapaAbierta: '4,1mm',
    alturaDeLaGrapaCerrada: '2,0mm',
    cantidad: 12,
  },
  {
    codigoProducto: ['GST45T', 'GST60T'],
    color: 'Negra',
    descripcion: 'Recarga negra diseñada para uso en tejido muy grueso',
    alturaDeLaGrapaAbierta: '4,2mm',
    alturaDeLaGrapaCerrada: '2,3mm',
    cantidad: 12,
  },
];

// Rest of the code

const ProductTable2: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Código de producto</th>
          <th style={{ width: '10%' }}>Color</th>
          <th style={{ width: '50%' }} colSpan={2}>
            Descripción
          </th>
          <th style={{ width: '10%' }}>Altura de la grapa abierta</th>
          <th style={{ width: '10%' }}>Altura de grapa cerrada</th>
          <th style={{ width: '10%' }}>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <>
            <tr>
              <td>{product.codigoProducto[0]}</td>
              <td rowSpan={2}>{product.color}</td>
              <td style={{ width: '30%' }} rowSpan={2}>
                {product.descripcion}
              </td>
              {product.codigoProducto[0] === 'GST45W' ? (
                <td style={{ width: '20%' }} rowSpan={10}>
                  <img src={img2} alt='Recargas ECHELON™ ENDOPATH' className='img-fluid'/>
                </td>
              ) : null}
              <td rowSpan={2}>{product.alturaDeLaGrapaAbierta}</td>
              <td rowSpan={2}>{product.alturaDeLaGrapaCerrada}</td>
              <td rowSpan={2}>{product.cantidad}</td>
            </tr>
            <tr>
              <td>{product.codigoProducto[1]}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable2;
