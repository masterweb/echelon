import './HighlightCard.css';

interface HighlightCardProps {
  rectangle: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  rectangle,
  description,
}) => {
  // If you need to truncate the description or manipulate it further,
  // ensure you handle it here before setting it to innerHTML.
  const createMarkup = () => {
    return { __html: description };
  };
  const truncatedDescription =
    description.length > 20
      ? description.substring(0, 20) + '...'
      : description;
  return (
    <div className='highlight-card'>
      <div className='highlight-group'>
        <img
          className='highlight-image'
          src={rectangle}
          alt={truncatedDescription}
        />
        <div
          className='highlight-text'
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  );
};

export default HighlightCard;
