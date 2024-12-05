import Slider from "react-slick";

import { testimonials } from "../../../../config/testimonials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  autoplay: true,
  speed: 4000,
  fade: true,
};

const Testimonials = () => {
  return (
    <div className="text-center mb-5 p-4 p-md-5 testimonials">
      <h1 className="section-heading">Testimonials</h1>
      <h5 className="section-subheading my-4">
        comments we got from parents around the world!
      </h5>
      <div className="tetimonial-wrapper">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div className="tetimonial" key={idx}>
              <div className="d-flex flex-column align-items-center justify-content-center py-5 px-2">
                <div>
                  <img
                    src={testimonial.image}
                    alt="img"
                    className="mb-3 testimonial-img"
                  />
                </div>
                <div className="d-flex mt-2">
                  <br />
                  <img
                    src="/img/quote-sign-left.png"
                    className="quote-sign-left"
                    alt=""
                  />
                  <span>{testimonial.content}</span>
                  <img
                    src="/img/quote-sign-right.png"
                    className="quote-sign-right"
                    alt=""
                  />
                </div>
                <footer className="blockquote-footer mt-2">
                  <cite title="Source Title">{testimonial.user}</cite>
                </footer>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
