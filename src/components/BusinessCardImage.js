import photo from './photo.png';
import './BusinessCardImage.css';

function BusinessCardImage(props) {
  return (
    <div className="business-card__content__image">
      <img src={photo} alt="business card"/>
    </div>
  );
}

export default BusinessCardImage;
