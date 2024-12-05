import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import Icon from "../../components/Icon";
import Form from "../../components/Forms/Form";
import InputField from "../../components/Forms/InputField";
import TextArea from "../../components/Forms/TextArea";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <Header />
      <div className="banner">
        <div className="container d-flex justify-content-center">
          <div className="col-md-6 text-center">
            <h3>Contact Us</h3>
          </div>
        </div>
      </div>
      <div className="contact-form-wrapper">
        <div className="container py-5">
          <h1 className="section-heading">Contact Us</h1>
          <h5 className="section-subheading pt-3">Keep in touch</h5>

          <div className="row py-5">
            <div className="col-lg-7 mt-4 contact-form">
              <Form initialValues={{}} enableReinitialize onSubmit={() => {}}>
                <div className="row">
                  <div className="col-lg-6 my-3">
                    <InputField name="name" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6 my-3">
                    <InputField name="subject" placeholder="Subject" />
                  </div>
                  <div className="col-lg-6 my-3">
                    <InputField name="phone" placeholder="Phone" />
                  </div>
                  <div className="col-lg-6 my-3">
                    <InputField name="email" placeholder="Email" />
                  </div>
                  <div className="col-lg-12 my-3">
                    <TextArea
                      name="message"
                      placeholder="Message"
                      inputProps={{ rows: 3 }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-send" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-lg-5 mt-4">
              <div className="contact-address">
                <ul>
                  <li>
                    <div className="single-address">
                      <div className="icon">
                        <Icon icon="/icons/phone-flip-solid.svg" />
                      </div>
                      <div className="cont">
                        <p>011 284 4220</p>
                        <a href="tel:+919311223010">
                          <p>+91 9311223010 (Whatsapp)</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-address">
                      <div className="icon">
                        <Icon icon="/icons/envelope-regular-primary.svg" />
                      </div>
                      <div className="cont">
                        <p>hello@immunify.me</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-address mt-4">
            <div className="d-none d-sm-block">
              <div className="single-address d-flex justify-content-center pb-4">
                <div className="icon">
                  <Icon icon="/icons/home.png" size={24} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>
                  ImmunifyMe Healthcare Technologies Pvt. Ltd
                  <br></br> 149, National Media Centre <br></br>
                  <strong>Gurgaon, Haryana</strong>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  ImmunifyMe HealthTech S.AR.L.-S 9, avenue des Hauts-Fourneaux
                  L-4362 Esch-sur-Alzette, <br></br>
                  <strong> Luxembourg. </strong>
                </p>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div style={{ width: "100%", height: "400px" }}>
                <LoadScript googleMapsApiKey="AIzaSyCe1fitZIwgOWSLWeWwRrA0bEY3JRTZTLw">
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={{ lat: 33.5937, lng: 78.9629 }}
                    zoom={3}
                  >
                    <MarkerF
                      position={{
                        lat: 28.499981322596295,
                        lng: 77.09382987486465,
                      }}
                      icon="/icons/logo.png"
                      onLoad={(marker) => console.log("Marker loaded:", marker)}
                    />
                    <MarkerF
                      position={{ lat: 49.8153, lng: 6.1296 }}
                      icon={"/icons/logo.png"}
                      onLoad={(marker) => console.log("Marker loaded:", marker)}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ContactUs;
