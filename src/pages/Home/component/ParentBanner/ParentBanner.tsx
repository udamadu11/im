import "./ParentBanner.scss";

export const ParentBanner = () => {
  return (
    <div className="parent-banner">
      <div className="container">
        <div className="row px-2 px-md-5">
          <div className="col-md-6 d-flex align-items-end">
            <img
              src="/img/parent_banner.jpg"
              alt="immunifyme.com"
              className="bg-parent"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <div className="d-flex align-items-end mt-5">
                <h1 className="banner-title">
                  Give your child the gift of "
                  <span className="highlighted-text">Good Health</span>"with
                  <img
                    src="/img/bannerlogo.png"
                    alt=""
                    width="70%"
                    className="mt-4"
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
