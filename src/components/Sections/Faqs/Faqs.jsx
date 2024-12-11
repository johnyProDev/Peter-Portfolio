import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-up">
            <h2 className="faq-title">Have a question? Check out the FAQ</h2>
            <p className="faq-description">
              Here you'll find answers to common questions about the services I provide, from custom development to project pricing and timelines.
            </p>
            <div className="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
              <svg className="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div className="faq-container">
              {[
                {
                  question: "What services do you provide?",
                  answer: "I specialize in full-stack web development, API integrations, custom solutions using Laravel, Vue.js, and more. My projects include everything from school management systems to custom CRM integrations."
                },
                {
                  question: "How long do projects usually take?",
                  answer: "Project timelines vary depending on complexity, but typically range from a few weeks to a couple of months. I work closely with clients to define clear milestones and deadlines."
                },
                {
                  question: "Do you offer ongoing support?",
                  answer: "Yes, I offer ongoing maintenance and support for my clients after project completion. This includes bug fixes, updates, and potential feature additions."
                },
                {
                  question: "What is your pricing model?",
                  answer: "I offer flexible pricing based on project scope, with both hourly and fixed-price options available. Detailed estimates are provided after assessing project requirements."
                },
                {
                  question: "Can you integrate third-party APIs?",
                  answer: "Yes, I have extensive experience integrating third-party APIs such as Stripe, Twilio, PayPal, and more into custom applications."
                },
                {
                  question: "How do I get started with a project?",
                  answer: "You can start by contacting me with your project idea. We'll discuss the details, timeline, and budget, then I’ll create a proposal outlining the scope and terms."
                }
              ].map((faq, index) => (
                <div className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`} key={index}>
                  <h3>{faq.question}</h3>
                  {activeIndex === index && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <i
                    className="faq-toggle bi bi-chevron-right"
                    onClick={() => toggleFaq(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id="call-to-action-2" className="call-to-action-2 section dark-background">
        <div className="container">
          <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Ready to start your project?</h3>
                <p>Whether you're building a new web application or integrating a third-party API, I'm here to help you achieve your goals. Let's discuss your project today!</p>
                <a className="cta-btn" href="#">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
