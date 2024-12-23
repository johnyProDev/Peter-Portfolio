import React from 'react';

const About = () => {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 align-items-center justify-content-between">
        {/* Left Column */}
        <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
          <span className="about-meta">ABOUT ME</span>
          <h2 className="about-title">Innovative Solutions for Modern Challenges</h2>
          <p className="about-description">
            I am Peter Mwangi, an experienced IT professional specializing in software development and security. 
            With a strong foundation in design, testing, and maintaining software systems, I am committed to delivering robust
            and scalable solutions across various platforms and technologies.
          </p>

          <div className="row feature-list-wrapper">
            <div className="col-md-6">
              <ul className="feature-list">
                <li><i className="bi bi-check-circle-fill"></i> Expertise in multiple programming languages</li>
                <li><i className="bi bi-check-circle-fill"></i> Strong focus on security and performance</li>
                <li><i className="bi bi-check-circle-fill"></i> Proven leadership in software projects</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="feature-list">
                <li><i className="bi bi-check-circle-fill"></i> Agile development practices</li>
                <li><i className="bi bi-check-circle-fill"></i> Seamless system integrations</li>
                <li><i className="bi bi-check-circle-fill"></i> Scalable and maintainable solutions</li>
              </ul>
            </div>
          </div>

          <div className="info-wrapper">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="profile d-flex align-items-center gap-3">
                  <img
                    src="/logo/profile.png"
                    alt="Peter Mwangi Profile"
                    className="profile-image"
                  />
                  <div>
                    <h4 className="profile-name">Peter Mwangi</h4>
                    <p className="profile-position">Software Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-info d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <p className="contact-label">Call me anytime</p>
                    <p className="contact-number">+254 7247 734 26</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section mt-4">
            <h4>Education</h4>
            <p><strong>Bachelor's degree in Information Technology</strong> (2020 - 2023)</p>
            <p>Mount Kenya University - Kenya</p>
            <p><strong>Relevant Coursework:</strong> Advanced Data Structures and Computer Algorithms, Artificial Intelligence, Mobile Applications Development, Advanced Server Side Request Forgery, Network Operating Systems, Database Systems.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
          <div className="image-wrapper">
            <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
              <img
                src="https://bootstrapmade.com/content/demo/iLanding/assets/img/about-5.webp"
                alt="Coding Session"
                className="img-fluid main-image rounded-4"
              />
              <img
                src="https://bootstrapmade.com/content/demo/iLanding/assets/img/about-2.webp"
                alt="Team Collaboration"
                className="img-fluid small-image rounded-4"
              />
            </div>
            <div className="experience-badge floating">
              <h3>2+ <span>Years</span></h3>
              <p>Of experience in software development</p>
            </div>
          </div>
                    {/* Professional Experience Section */}
                    <div className="professional-experience mt-4">
            <h4>Professional Experience</h4>
            <p><strong>Developer at Fahrenheit Digital Agency</strong> (2022 - Present, Part-Time)</p>
            <p><strong>Location:</strong> Nakuru</p>
            <ul>
              <li>Developed a REST API using the Django framework that allowed communication between multiple services</li>
              <li>Developed a full stack web application from scratch, including back-end services, front-end interface, and database</li>
              <li>Deployed a web application firewall to protect against malicious web-based attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
