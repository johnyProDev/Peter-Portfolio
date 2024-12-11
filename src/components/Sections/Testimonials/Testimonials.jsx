import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // If you're using the AOS library for animations, initialize it here
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }, []);

  const testimonials = [
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-1.jpg",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-2.jpg",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-3.jpg",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: "https://bootstrapmade.com/content/demo/iLanding/assets/img/testimonials/testimonials-4.jpg",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
  ];

  return (
    <section>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
