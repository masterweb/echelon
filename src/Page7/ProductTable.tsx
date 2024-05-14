import React from 'react';
import img1 from '../assets/page7/product1.png';
import './ProductTable.css';

const products = [
  {
    codigoProducto: 'ECH45C',
    descripcion: 'ECHELON™ 3000 45mm Compacta',
    longitudMandibula: '45mm',
    longitudEje: '280mm',
    cantidad: 3,
  },
  {
    codigoProducto: 'ECH45S',
    descripcion: 'ECHELON™ 3000 45mm Estándar',
    longitudMandibula: '45mm',
    longitudEje: '340mm',
    cantidad: 3,
  },
  {
    codigoProducto: 'ECH45L',
    descripcion: 'ECHELON™ 3000 45mm Larga',
    longitudMandibula: '45mm',
    longitudEje: '440mm',
    cantidad: 3,
  },
  {
    codigoProducto: 'ECH60C',
    descripcion: 'ECHELON™ 3000 60mm Compacta',
    longitudMandibula: '60mm',
    longitudEje: '280mm',
    cantidad: 3,
  },
  {
    codigoProducto: 'ECH60S',
    descripcion: 'ECHELON™ 3000 60mm Estándar',
    longitudMandibula: '60mm',
    longitudEje: '340mm',
    cantidad: 3,
  },
  {
    codigoProducto: 'ECH60L',
    descripcion: 'ECHELON™ 3000 60mm Larga',
    longitudMandibula: '60mm',
    longitudEje: '440mm',
    cantidad: 3,
  },
];

// Rest of the code

const ProductTable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Código de producto</th>
          <th style={{ width: '60%' }} colSpan={2}>
            Descripción
          </th>
          <th style={{ width: '10%' }}>Longitud de la mandíbula</th>
          <th style={{ width: '10%' }}>Longitud del eje</th>
          <th style={{ width: '10%' }}>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.codigoProducto}>
            <td>{product.codigoProducto}</td>
            <td style={{ width: '40%' }}>{product.descripcion}</td>
            {product.codigoProducto === 'ECH45C' ? (
              <td style={{ width: '20%' }} rowSpan={6}>
                <img src={img1} alt='Recargas ECHELON™ ENDOPATH' />
              </td>
            ) : null}
            <td>{product.longitudMandibula}</td>
            <td>{product.longitudEje}</td>
            <td>{product.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
