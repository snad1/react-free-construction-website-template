import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">Innova</a>
            <div className="phone"><span>Call Today</span>320-123-4321</div>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#services" className="page-scroll">Services</a></li>
              <li><a href="#portfolio" className="page-scroll">Projects</a></li>
              <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
              <li><a href="#contact" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>Home Construction<br/>& Remodeling</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed
                    commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                  <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="get-touch">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-1">
              <h3>Cost for your home renovation project</h3>
              <p>Get started today and complete our form to request your free estimate</p>
            </div>
            <div className="col-xs-12 col-md-4 text-center"><a href="#contact"
                                                               className="btn btn-custom btn-lg page-scroll">Free
              Estimate</a></div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"><img src="img/about.jpg" className="img-responsive" alt=""/></div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      <li>Years of Experience</li>
                      <li>Fully Insured</li>
                      <li>Cost Control Experts</li>
                      <li>100% Satisfaction Guarantee</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      <li>Free Consultation</li>
                      <li>Satisfied Customers</li>
                      <li>Project Management</li>
                      <li>Affordable Pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-media"><img src="img/services/service-1.jpg" alt=" "/></div>
              <div className="service-desc">
                <h3>New Home Construction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
                  commodo nibh ante facilisis bibendum dolor feugiat at.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-media"><img src="img/services/service-2.jpg" alt=" "/></div>
              <div className="service-desc">
                <h3>Home Additions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
                  commodo nibh ante facilisis bibendum dolor feugiat at. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-media"><img src="img/services/service-3.jpg" alt=" "/></div>
              <div className="service-desc">
                <h3>Bathroom Remodels</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
                  commodo nibh ante facilisis bibendum dolor feugiat at.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-media"><img src="img/services/service-4.jpg" alt=" "/></div>
              <div className="service-desc">
                <h3>Kitchen Remodels</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
                  commodo nibh ante facilisis bibendum dolor feugiat at.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-media"><img src="img/services/service-5.jpg" alt=" "/></div>
              <div className="service-desc">
                <h3>Windows & Doors</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
                  commodo nibh ante facilisis bibendum dolor feugiat at.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-media"><img src="img/services/service-6.jpg" alt=" "/></div>
              <div className="service-desc">
                <h3>Decks & Porches</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
                  commodo nibh ante facilisis bibendum dolor feugiat at.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Our Works</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/01-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/02-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img src="img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/03-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img src="img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/04-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img src="img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/05-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img src="img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/06-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Dolor Sit</h4>
                    </div>
                    <img src="img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/07-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Dolor Sit</h4>
                    </div>
                    <img src="img/portfolio/07-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/08-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img src="img/portfolio/08-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"><a href="img/portfolio/09-large.jpg" title="Project Title"
                                               data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img src="img/portfolio/09-small.jpg" className="img-responsive" alt="Project Title"/> </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image"><img src="img/testimonials/01.jpg" alt=""/></div>
                <div className="testimonial-content">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam
                    sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                  <div className="testimonial-meta"> - John Doe</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image"><img src="img/testimonials/02.jpg" alt=""/></div>
                <div className="testimonial-content">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam
                    sedasd commodo nibh ante facilisis."</p>
                  <div className="testimonial-meta"> - Johnathan Doe</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image"><img src="img/testimonials/03.jpg" alt=""/></div>
                <div className="testimonial-content">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam
                    sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                  <div className="testimonial-meta"> - John Doe</div>
                </div>
              </div>
            </div>
            <div className="row"></div>
            <div className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image"><img src="img/testimonials/04.jpg" alt=""/></div>
                <div className="testimonial-content">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam
                    sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                  <div className="testimonial-meta"> - Johnathan Doe</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image"><img src="img/testimonials/05.jpg" alt=""/></div>
                <div className="testimonial-content">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam
                    sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                  <div className="testimonial-meta"> - John Doe</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image"><img src="img/testimonials/06.jpg" alt=""/></div>
                <div className="testimonial-content">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam
                    sedasd commodo nibh ante facilisis."</p>
                  <div className="testimonial-meta"> - Johnathan Doe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Please fill out the form below to send us an email and we will get back to you as soon as
                  possible.</p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
                        <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
                        <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h4>Contact Info</h4>
              <p><span>Address</span>4321 California St,<br/> San Francisco, CA 12345</p>
            </div>
            <div className="contact-item">
              <p><span>Phone</span> +1 123 456 1234</p>
            </div>
            <div className="contact-item">
              <p><span>Email</span> info@company.com</p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2017 INNOVA. Design by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
