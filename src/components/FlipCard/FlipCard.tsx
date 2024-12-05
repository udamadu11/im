import Icon from "../Icon";
import "./FlipCard.scss";

interface FlipCardProps {
  img: string;
  name: string;
  designation: string;
  linkdein: string;
}

const FlipCard = ({ img, name, designation, linkdein }: FlipCardProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="img-fluid rounded-circle"
            src={img}
            loading="lazy"
            alt="card image"
            width="50%"
          />
          <div className="mt-4">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{designation}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="mt-5">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{designation}</p>
            <a href={linkdein} target="_blank" rel="noopener">
              <Icon icon="/icons/linkedin-brands.svg" size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
