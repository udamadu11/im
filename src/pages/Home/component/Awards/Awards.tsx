import Slider from "react-slick";
import { OverlayTrigger, Popover } from "react-bootstrap";

import { awardsConfig } from "../../../../config/awards";

import "./Awards.scss";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 500,
};

const Awards = () => {
  const popoverHoverFocus = (content: string) => {
    return (
      <Popover
        id="popover-trigger-hover-focus"
        title="Popover bottom"
        className="p-2"
      >
        <p>{content}</p>
      </Popover>
    );
  };

  return (
    <div className="mt-5 py-5 awards">
      <h1 className="section-heading">Awards &amp; Grants</h1>
      <div className="awards-content_bg mt-4">
        <div className="container">
          <div className="row blog p-5">
            <div className="col-md-12">
              <Slider {...settings}>
                {awardsConfig.map((award, idx) => (
                  <div className="col" key={idx}>
                    <OverlayTrigger
                      trigger={["hover", "focus"]}
                      placement="right"
                      overlay={popoverHoverFocus(award.popOver)}
                    >
                      <img src={award.image} alt="" className="award-img" />
                    </OverlayTrigger>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
