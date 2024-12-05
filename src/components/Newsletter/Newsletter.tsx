import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="p-3 p-md-5 newsletter-wrapper">
      <div className="container p-3 p-md-5 shadow newsletter">
        <h3 className="text-center title">
          Keep the Moms and Children in your family healthy. Subscribe to our
          weekly newsletter now!
        </h3>
        <div className="d-flex justify-content-center">
          <div className="col-md-8 newsletter-inputGroup rounded-pill">
            <div className="input-group">
              <input
                type="email"
                pattern=".+@globex\.com"
                required
                className="form-control border-0 rounded-pill"
                placeholder="Email here"
                aria-label="Email here"
                aria-describedby="button-addon2"
                id="emailInputBottom"
              />
              <div className="input-group-append">
                <button className="btn rounded-pill subscribeBtn" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
