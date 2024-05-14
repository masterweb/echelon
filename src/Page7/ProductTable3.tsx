import img3 from '../assets/page7/product3.png';
import './ProductTable.css';

// Rest of the code

const ProductTable3: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Código de producto</th>
          <th style={{ width: '80%' }} colSpan={2}>
            Descripción
          </th>
          <th style={{ width: '10%' }}>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: '10%' }}>ECH60R</td>
          <td style={{ width: '70%' }}>
            Refuerzo de la línea de grapado ECHELON ENDOPATH™
          </td>
          <td style={{ width: '10%' }}>
            <img src={img3} alt='ECH60R' />
          </td>
          <td style={{ width: '10%' }}>6</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable3;
