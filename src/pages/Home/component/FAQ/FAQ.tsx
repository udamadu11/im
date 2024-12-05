import DOMPurify from "dompurify";
import { Accordion } from "react-bootstrap";

import { accordionConfig } from "../../../../config/accordion";

import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="py-5 faq">
      <div className="container">
        <div className="keywords-sec">
          <h3 className="text-uppercase title">FAQ</h3>

          <Accordion defaultActiveKey="0">
            {accordionConfig.map((accordion, idx) => {
              return (
                <Accordion.Item eventKey={accordion.eventKey} key={idx}>
                  <Accordion.Header>{accordion.title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(accordion.content),
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
