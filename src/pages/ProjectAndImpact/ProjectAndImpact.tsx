import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon";
import Newsletter from "../../components/Newsletter/Newsletter";

import "./ProjectAndImpact.scss";

const ProjectAndImpact = () => {
  return (
    <div className="project-impact-page">
      <Header />
      <div className="d-flex justify-content-center banner">
        <h1 className="mt-5 text-center">Projects & Impacts</h1>
      </div>
      <section id="projcontent" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div>
                <p className="text-left">
                  The Coronavirus taught us a tough lesson about the importance
                  of immunization, and how it can save millions of lives and
                  billions of dollars of the governments across the globe.
                </p>
                <p className="text-left">
                  It is a known fact now that the immunization gap not only has
                  economical drawbacks, but it also destructs the living
                  standard of the society. The World Health Organisation (WHO)
                  and The Global Alliance for Vaccines and Immunizations (GAVI)
                  have affirmed the importance of vaccinations several times in
                  the past, and still there are a very few technologies that can
                  help the cause of "not leaving a single child unimmunised".
                </p>
                <p className="text-left">
                  Well, ImmunifyMe is fortunate enough to have a technology that
                  can actually fill this gap of immunization and help the world
                  save about 5-6 million lives per year, leading to the
                  financial worth of $80-100 billion (as estimated by GAVI).
                </p>
                <p className="text-left">
                  Our system completely does away the paper-based system and
                  therefore, contributes its fair share of being eco-friendly.
                  We have successfully executed some projects across the globe
                  and some of them are still underway.
                </p>
              </div>
              <hr />
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <a href="#newsletter">
                <img src="/img/banner_imm_sub.png" alt="Subscribe" />
              </a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-7">
              <hr />
              <h3>South Asia Region: India</h3>
              <hr />
              <p className="text-left">
                Working with private and public healthcare providers in India as
                a part of our South Asia vision to introduce the ImmunifyMe in
                India with the key following objectives
              </p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    Increase immunization and enhance the frequency and quality
                    of reminder and monitoring
                  </div>
                </li>
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    Streamlining and automation of treatment and child health
                    monitoring activities related to immunization item
                  </div>
                </li>
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    Realtime statistics/analytics for program implementation and
                    private sector business opportunities item
                  </div>
                </li>
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    Tracking the growth among children in terms of physical and
                    cognitive health, which opens further partnership
                    opportunities with corporate sector item
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <img
                src="/img/projects&impacts/sasia.jpg"
                alt="south asia"
                width="100%"
                className="p-4"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-5 order-2 order-lg-1">
              <img
                className="leftImg"
                src="/img/projects&impacts/sasiaindia.jpg"
                alt="sa india"
                width="100%"
              />
            </div>
            <div className="col-md-7 order-1 order-lg-1">
              <hr />
              <h3>India specific value proposition</h3>
              <hr />
              <p className="text-left">
                Working with private and public healthcare providers in India as
                a part of our South Asia vision to introduce the ImmunifyMe in
                India with the key following objectives
              </p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    Private sector providers could monitor the real-time
                    vaccination to ensure the quality of care and to close the
                    existing immunization gap.
                  </div>
                </li>
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    ImmunifyMe as a cloud-based ecosystem complete with a Web
                    App, Mobile App, and a Smart Card
                  </div>
                </li>
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    By its technological nature, sends automated reminders to
                    the parents about upcoming immunization dates, thus,
                    ensuring parents don’t miss out on the immunization of their
                    children
                  </div>
                </li>
                <li className="list-group-item text-left">
                  <div className="d-flex gap-3 align-items-center">
                    <Icon icon="/icons/circle-dot-regular.svg" size={16} />
                    ImmunifyMe would help to record the social-emotional,
                    communication, cognitive and physical development of the
                    child
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProjectAndImpact;
