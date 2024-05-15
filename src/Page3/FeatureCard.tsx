import './FeatureCard.css';

interface FeatureCardProps {
  description: React.ReactNode; // Allow description to include JSX
  imageUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ description, imageUrl }) => {
  return (
    <div className='feature-card'>
      <div className='feature-card-content'>
        <p className='text-wrapper2'>{description}</p>
      </div>
      <div
        className='feature-card-media'
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
    </div>
  );
};

export default FeatureCard;
