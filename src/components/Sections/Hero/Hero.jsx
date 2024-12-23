import React from 'react';

const Hero = () => {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6">
          <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
            <div className="company-badge mb-4">
              <i className="bi bi-gear-fill me-2"></i>
              Secure. Develop. Lead.
            </div>

            <h1 className="mb-4">
              Peter Mwangi <br />
              <span className="accent-text">Software Developer</span>
            </h1>

            <p className="mb-4 mb-md-5">
            Experienced IT professional with a strong background in software development and leadership. Proficient in design, installation, testing, and maintenance of software systems across various platforms and languages.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary me-0 me-sm-2 mx-1">
                Get In Touch
              </a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="btn btn-link mt-2 mt-sm-0 glightbox"
              >
                <i className="bi bi-play-circle me-1"></i>
                Play Video
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6">
          <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
            <img
              src="/logo/profile.png"
              alt="Hero"
              className="img-fluid"
            />

            {/* <div className="customers-badge">
              <div className="customer-avatars">
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/avatar-1.webp"
                  alt="Customer 1"
                  className="avatar"
                />
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/avatar-2.webp"
                  alt="Customer 2"
                  className="avatar"
                />
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/avatar-3.webp"
                  alt="Customer 3"
                  className="avatar"
                />
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/avatar-4.webp"
                  alt="Customer 4"
                  className="avatar"
                />
                <img
                  src="https://bootstrapmade.com/content/demo/iLanding/assets/img/avatar-5.webp"
                  alt="Customer 5"
                  className="avatar"
                />
                <span className="avatar more">12+</span>
              </div>
              <p className="mb-0 mt-2">
                12,000+ lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="bi bi-code-slash"></i>
            </div>
            <div className="stat-content">
              <h4>150+ Projects</h4>
              <p className="mb-0">Completed across diverse industries</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="bi bi-people"></i>
            </div>
            <div className="stat-content">
              <h4>10+ Clients</h4>
              <p className="mb-0">Satisfied with tailored solutions</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="bi bi-lightbulb"></i>
            </div>
            <div className="stat-content">
              <h4>2 Years</h4>
              <p className="mb-0">Experience in software development</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="bi bi-award"></i>
            </div>
            <div className="stat-content">
              <h4>5 Awards</h4>
              <p className="mb-0">For innovative tech solutions</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
