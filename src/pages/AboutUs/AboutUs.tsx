import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import Journey from "./components/Journey/Journey";
import FlipCard from "../../components/FlipCard/FlipCard";

import { journeyConfig } from "../../config/journey";
import { teamConfig } from "../../config/team";

import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Header />
      <div className="journey">
        <div className="container py-5">
          <h1 className="section-heading">The Journey</h1>
          <div className="col mt-5">
            <p className="h4 text-center section-subheading">
              <strong>
                The journey of ImmunifyMe is something that we are all proud of.
                It has been filled with challenges, struggles, a lot of courage,
                failures and yes, success too.
              </strong>
            </p>
            <p className="text-center mt-5 paragraph-color">
              We started off in 2017 as a team of ambitious individuals who
              wanted to create a difference in people's lives. So, we created a
              Facebook page aimed at educating people about the benefits of
              immunization and how it helps in saving a significant amount of
              spending that we make every year on healthcare.
            </p>
            <p className="text-center mt-3 paragraph-color">
              The ideas kept developing and we finally built our product
              ImmunifyMe. Initially, our only motto was to eliminate the age-old
              practice of paper-based vaccination record keeping, and replace it
              with our cloud-based technology where you can store every single
              detail of your vaccination without ever worrying about losing it.
              To promote vaccinations, we also incorporated a "reminder
              facility" for our users so that they never forget to turn up at
              the nearest vaccination centre.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {journeyConfig.slice(0, 4).map((journey) => (
              <Journey
                key={journey.id}
                link={journey.link}
                title={journey.title}
                year={journey.year}
                description={journey.content}
                image={journey.image}
              />
            ))}
          </div>
          <div className="col col-md-6">
            {journeyConfig.slice(4, 7).map((journey) => (
              <Journey
                key={journey.id}
                link={journey.link}
                title={journey.title}
                year={journey.year}
                description={journey.content}
                image={journey.image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 what-we-offer">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img src="/img/aboutus/wwo.png" className="img" alt="" />
            </div>
            <div className="col-md-7 d-flex align-items-center mt-3">
              <div className="col">
                <h2 className="text-uppercase heading">
                  partnership with
                  <span className="font-weight-bold">
                    "the best in the business"
                  </span>
                </h2>

                <p className="mt-3 body-text">
                  Our continuous efforts for filling the immunisation gap in the
                  country landed us in a partnership with the
                  <span className="body-hightlightedText">
                    Serum Institute of India (SII)
                  </span>
                  . This companionship has only been blooming under the
                  remarkable leadership of SII Chief Executive Officer (CEO){" "}
                  <span className="body-hightlightedText">Adar Poonawalla</span>{" "}
                  , who has been nothing short of a guiding light in our crusade
                  against anti-vaxxers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container mt-5">
          <h1 className="section-heading">Team that Makes it All Possible</h1>

          <div className="mt-5 sub-heading-management">
            <h4 className="text-center pt-4 fw-bold">Management</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4 mt-4 mb-5 flex-wrap">
          {teamConfig.map((team) => (
            <FlipCard
              key={team.name}
              img={team.img}
              name={team.name}
              designation={team.designation}
              linkdein={team.linkdein}
            />
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;
