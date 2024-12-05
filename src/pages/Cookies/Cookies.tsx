import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

import "./Cookies.scss";

const Cookies = () => {
  return (
    <div className="cookies">
      <Header />
      <div className="container">
        <div className="col-md-12">
          <h3 className="text-center">Disclaimers</h3>
          <div className="col-md-12 mt-5">
            <p className="text-justify">
              The information contained on this website (www.immunifyme.com) is
              for general information purposes only. The information is provided
              by ImmunifyMe (“ImmunifyMe”/ “we”) and while we endeavour to keep
              the information up to date and correct, we make no representations
              or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose. Any reliance you place on such information is therefore
              strictly at your own risk.
            </p>
            <p className="text-justify">
              Best possible efforts have been made to provide reliable and
              professional information, including from various third-party
              writers/third-party blog authors/ the Healthcare Providers about
              the services (“Information”) that are being provided. The
              Information available herein has been curated and uploaded with
              their respective sources. However, the Information is for the
              purposes of education and support and in no way a substitute to
              any medical advice or treatment or consultation physically. The
              use of the Information by the User is at his own risk and cost.
              The Information is not exhaustive. The Subscriber should not
              diagnose his own sickness on the basis of Information provided on
              the Website. The Website does not take any responsibility of any
              advice and/or treatment, through any medium
              (personal/internet/online/distance) which a User may take/ do
              based upon the information/reports generated on the Website.
            </p>
            <p className="text-justify">
              In no event will we at ImmunifyMe be liable for any loss or damage
              including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data
              or profits arising out of, or in connection with, the use of this
              website. Through this website you are able to link to other
              websites which are not under the control of ImmunifyMe. We have no
              control over the nature, content and availability of those sites.
              The inclusion of any links does not necessarily imply a
              recommendation or endorse the views expressed within them by
              ImmunifyMe.
            </p>
            <p className="text-justify">
              Every effort is made to keep the website up and running smoothly.
              However, ImmunifyMe takes no responsibility for, and will not be
              liable for, the website being temporarily unavailable due to
              technical issues beyond our control.
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cookies;
