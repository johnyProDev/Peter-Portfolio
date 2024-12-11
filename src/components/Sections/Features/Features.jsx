import React from 'react';

const Features = () => {
  return (
    <section>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                <h4>Modisit</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                <h4>Praesenti</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                <h4>Explica</h4>
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {/* Tab 1 Content */}
          <div className="tab-pane fade active show" id="features-tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Voluptatem dignissimos provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-1.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Tab 2 Content */}
          <div className="tab-pane fade" id="features-tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Neque exercitationem debitis</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>
                      Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-2.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Tab 3 Content */}
          <div className="tab-pane fade" id="features-tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Voluptatibus commodi accusamu</h3>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>
                      Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
                    </span>
                  </li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/features-illustration-3.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Features Cards Section */}
    <section id="features-cards" className="features-cards section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-box orange">
                <i className="bi bi-award"></i>
                <h4>Corporis voluptates</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-box blue">
                <i className="bi bi-patch-check"></i>
                <h4>Explicabo consectetur</h4>
                <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-box green">
                <i className="bi bi-sunrise"></i>
                <h4>Ullamco laboris</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="feature-box red">
                <i className="bi bi-shield-check"></i>
                <h4>Labore consequatur</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features 2 Section */}
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Use On Any Device</h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-display"></i>
                  </div>
                </div>
              </div>

              <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Feather Icons</h3>
                    <p>Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-feather"></i>
                  </div>
                </div>
              </div>

              <div className="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Retina Ready</h3>
                    <p>Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="phone-mockup text-center">
                <img src="https://bootstrapmade.com/content/demo/iLanding/assets/img/phone-app-screen.webp" alt="Phone Mockup" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="feature-content">
                    <h3>W3c Valid Code</h3>
                    <p>Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.</p>
                  </div>
                </div>
              </div>

              <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Fully Responsive</h3>
                    <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                  </div>
                </div>
              </div>

              <div className="feature-item" data-aos="fade-left" data-aos-delay="400">
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-browser-chrome"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Browser Compatibility</h3>
                    <p>Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section id="call-to-action" className="call-to-action section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row content justify-content-center align-items-center position-relative">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 mb-4">Maecenas tempus tellus eget condimentum</h2>
              <p className="mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel</p>
              <a href="#" className="btn btn-cta">Call To Action</a>
            </div>

            {/* Abstract Background Elements */}
            <div className="shape shape-1">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="shape shape-2">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Dot Pattern Groups */}
            <div className="dots dots-1">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="10" />
              </svg>
            </div>

            <div className="dots dots-2">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="10" />
              </svg>
            </div>

            <div className="dots dots-3">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="10" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
