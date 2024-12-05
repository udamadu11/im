import DOMPurify from "dompurify";

import { Accordion } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/Newsletter/Newsletter";

import { privacyPolicyConfig } from "../../config/accordion";

import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Header />
      <div className="banner">
        <div className="container d-flex justify-content-center">
          <div className="col-md-6 text-center">
            <h3>Privacy Policy</h3>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <Accordion defaultActiveKey="0">
          {privacyPolicyConfig.map((item, idx) => {
            return (
              <Accordion.Item eventKey={item.eventKey} key={idx}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
