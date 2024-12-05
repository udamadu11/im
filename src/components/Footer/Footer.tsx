import { followUsConfig, footerLinkConfig } from "../../config/footer";
import Icon from "../Icon";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container pb-5">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="footer-about">
              <div className="logo">
                <a href="/">
                  <img src="/img/ImmunifyMelogo.svg" alt="footer-logo" />
                </a>
              </div>
              <p className="text-left">
                Our vision is to become a global market leader in the field of
                early childhood healthcare, by providing innovative technology
                solutions and services to the children and their caregivers.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-link">
              <div className="footer-title">
                <h5>Sitemap</h5>
                <hr />
              </div>
              <ul>
                {footerLinkConfig.slice(0, 4).map((footer, idx) => {
                  return (
                    <li key={`${idx}-${footer.title}`}>
                      <a
                        href={footer.link}
                        className="d-flex align-items-center"
                      >
                        <Icon icon={footer.icon} size={12} />
                        {footer.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {footerLinkConfig.slice(4, 7).map((footer, idx) => {
                  return (
                    <li key={`${idx}-${footer.title}`}>
                      <a
                        href={footer.link}
                        className="d-flex align-items-center"
                      >
                        <Icon icon={footer.icon} size={12} />
                        {footer.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-address">
              <div className="footer-title">
                <h5>Contact Us</h5>
                <hr />
              </div>
              <ul>
                <li className="">
                  <Icon icon="/icons/envelope-regular-primary.svg" size={14} />
                  <a href="mailto:info@immunify.me">hello@immunify.me</a>
                </li>
              </ul>
            </div>
            <div className="footer-social mt-4">
              <div className="footer-title">
                <h5>Follow Us</h5>
                <hr />
              </div>
              <ul className="mt-2">
                {followUsConfig.map((follow, idx) => (
                  <li key={idx}>
                    <a href={follow.link} target="_blank" rel="noopener">
                      <Icon icon={follow.icon} size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p>© Copyrights 2024 Immunifyme All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
