import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer id="footer" className="footer">

            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="https://johnyirush.github.io" className="logo d-flex align-items-center">
                            <span className="sitename">Software Developer</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Nairobi, Kenya</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+254 7247 734 26</span></p>
                            <p><strong>Email:</strong> <span><a href="mailto:pminnovest@gmail.com">pminnovest@gmail.com</a></span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href="https://twitter.com/johnyirush" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.facebook.com/johnyirush" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/johnyirush" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/johnyirush" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-3 footer-links">
                        <h4>My Services</h4>
                        <ul>
                            <li><a href="#web-development">Web Development</a></li>
                            <li><a href="#app-development">App Development</a></li>
                            <li><a href="#api-integration">API Integration</a></li>
                            <li><a href="#consulting">Consulting</a></li>
                            <li><a href="#design">UI/UX Design</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Software Developer</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <a href="https://johnyirush.github.io">Peter Mwangi</a>
                </div>
            </div>

        </footer>
    )
}

Footer.propTypes = {}

export default Footer
