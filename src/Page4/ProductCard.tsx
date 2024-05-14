import './ProductCard.css';

interface ProductCardProps {
  description: React.ReactNode; // Allow description to include JSX
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ description, imageUrl }) => {
  return (
    <div className='product-card'>
      <div className='product-card-content'>
        <p>
          <b>{description}</b>
        </p>
      </div>
      <div className='product-card-media'>
        <img
          src={imageUrl}
          alt='Description'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
