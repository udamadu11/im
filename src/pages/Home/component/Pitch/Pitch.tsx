import "./Pitch.scss";

const Pitch = () => {
  return (
    <div className="pitch">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <img src="/img/pitch1.svg" alt="" width="90%" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="mt-4 mt-md-0">
              <h3 className="pb-3">Your Private Data Remains Private</h3>
              <p className="text-justify">
                Your health files always remain encrypted with us and we never
                use it in any external promotions. Be reassured that we are both
                GDPR and HIPAA compliant platform, if that satisfies your
                curious soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
