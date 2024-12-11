import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Initialize AOS library for animations if included in the project
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      role: "Tech Lead, Innovatech",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-1.jpg",
      text: "Peter's technical expertise and innovative approach turned our vision into a reality. His solutions were not only effective but also scalable.",
    },
    {
      name: "Jane Smith",
      role: "Product Manager, BuildPro",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-2.jpg",
      text: "Collaborating with Peter was a seamless experience. His ability to solve complex problems is unparalleled. Highly recommend working with him.",
    },
    {
      name: "Michael Carter",
      role: "CEO, DevWorks",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-3.jpg",
      text: "Peter delivered exceptional results under tight deadlines. His professionalism and dedication to quality are truly remarkable.",
    },
    {
      name: "Lisa Howard",
      role: "Freelance Designer",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-4.jpg",
      text: "Peter's backend skills streamlined my designs with seamless integration, making the final product stunning and functional. He's an invaluable asset.",
    },
  ];

  return (
    <section>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What clients and collaborators say about working with Peter</p>
      </div>

      {/* Testimonials */}
      <div className="container">
        <div className="row g-5">
          {testimonials.map((testimonial, index) => (
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
              key={index}
            >
              <div className="testimonial-item">
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
