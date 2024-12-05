import React from "react";
import DOMPurify from "dompurify";

import Icon from "../../../../components/Icon";

import "./Journey.scss";

interface JourneyProps {
  title: string;
  image: string;
  description: string;
  link: string;
  year: string;
}

const Journey = ({ description, link, image, title, year }: JourneyProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div role="button" className="mb-4 journey-card" onClick={handleOpenCard}>
      <div className="journey-card-header">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-4 align-items-center">
            <img src={image} alt="" width="100%" className="img" />
            <span className="title">{title}</span>
          </div>
          <div
            className={`d-flex gap-4 align-items-center pe-2 ${
              isOpen ? "active-award" : ""
            }`}
          >
            <span className="year">{year}</span>
            <Icon icon="/icons/arrow.svg" size={20} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="journey-card-body">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
          {link && (
            <a href={link} target="_blank" className="">
              {link}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Journey;
