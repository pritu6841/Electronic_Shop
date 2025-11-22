import './App.css'

function App() {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header" id="home">
        <div className="header-container">
          <div className="header-left">
            <img 
              src="https://placehold.co/144x36/07484A/FFFFFF?text=ElectroRepair" 
              alt="ElectroRepair Logo" 
              className="logo" 
              onClick={() => scrollToSection('home')}
              style={{ cursor: 'pointer' }}
            />
            <nav className="menu">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
              <a href="#categories" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>Categories</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a>
            </nav>
            <div className="menu-indicator"></div>
          </div>
          <div className="header-icons">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 0C6.044 0 0 6.044 0 13.5C0 20.956 6.044 27 13.5 27C20.956 27 27 20.956 27 13.5C27 6.044 20.956 0 13.5 0ZM13.5 24.3C7.425 24.3 2.7 19.575 2.7 13.5C2.7 7.425 7.425 2.7 13.5 2.7C19.575 2.7 24.3 7.425 24.3 13.5C24.3 19.575 19.575 24.3 13.5 24.3Z" fill="#07484A"/>
              <path d="M15.02 15.02H12.98V7.98H15.02V15.02ZM15.02 17.02H12.98V19.02H15.02V17.02Z" fill="#07484A"/>
            </svg>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 2.7C8.1 2.7 3.78 7.02 3.78 12.42C3.78 16.2 5.94 19.44 9.18 21.06L8.1 24.3L11.34 23.22C12.15 23.4 12.96 23.49 13.77 23.49C19.17 23.49 23.49 19.17 23.49 13.77C23.49 8.37 19.17 4.05 13.77 4.05H13.5V2.7Z" fill="#07484A"/>
            </svg>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0C5.832 0 0 5.832 0 13C0 20.168 5.832 26 13 26C20.168 26 26 20.168 26 13C26 5.832 20.168 0 13 0ZM13 23.4C7.28 23.4 2.6 18.72 2.6 13C2.6 7.28 7.28 2.6 13 2.6C18.72 2.6 23.4 7.28 23.4 13C23.4 18.72 18.72 23.4 13 23.4Z" fill="#07484A"/>
              <path d="M13 7.8C10.4 7.8 8.32 9.88 8.32 12.48C8.32 15.08 10.4 17.16 13 17.16C15.6 17.16 17.68 15.08 17.68 12.48C17.68 9.88 15.6 7.8 13 7.8Z" fill="#07484A"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Professional Electronic<br />Repair & Home Service</h1>
            <p className="hero-subtitle">Get expert repair for AC, TV, Fridge, RO, Wiring & more</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
              <button className="btn-primary" onClick={() => scrollToSection('appointment')}>Book a Service</button>
              <button className="btn-primary" style={{ backgroundColor: '#07484A' }} onClick={() => scrollToSection('services')}>View Services</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Converted to Book Appointment */}
      <section className="newsletter-section" id="appointment">
        <div className="newsletter-container">
          <div className="newsletter-image">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop" alt="Technician" />
          </div>
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">Book Your<br />Appointment</h2>
              <p className="newsletter-description">Schedule a service call with our expert technicians today.</p>
              <div className="newsletter-form">
                <input type="text" placeholder="Enter your phone number" className="newsletter-input" />
                <button className="btn-subscribe" onClick={() => scrollToSection('contact')}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Converted to Why Choose Us */}
      <section className="benefits-section" id="why-choose-us">
        <div className="benefits-container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#EEEBFF' }}>
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=108&h=108&fit=crop" alt="Expert Technicians" />
              </div>
              <h3 className="benefit-title">Expert Technicians</h3>
              <p className="benefit-description">Certified professionals with<br />years of experience.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#FFF4E7' }}>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=108&h=108&fit=crop" alt="Warranty" />
              </div>
              <h3 className="benefit-title">Service Warranty</h3>
              <p className="benefit-description">All repairs come with<br />guaranteed warranty.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#CAF3E5' }}>
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=108&h=108&fit=crop" alt="24/7 Support" />
              </div>
              <h3 className="benefit-title">24/7 Support</h3>
              <p className="benefit-description">Round-the-clock customer<br />support available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section" id="categories">
        <div className="category-container">
          <h2 className="section-title">Explore by Category</h2>
          <div className="category-content">
            <div className="category-sidebar">
              <div className="search-bar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8" stroke="#6E757E" strokeWidth="2"/>
                  <path d="M15 15L18 18" stroke="#6E757E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input type="text" placeholder="Search" />
              </div>
              <div className="category-menu">
                <div className="menu-list">
                  <p>AC Repair</p>
                  <p>TV Repair</p>
                  <p>Fridge Repair</p>
                  <p>Washing Machine Repair</p>
                  <p>RO / Water Purifier Repair</p>
                  <p>House Wiring</p>
                  <p>Ceiling Fan Repair</p>
                  <p>Mixer/Blender Repair</p>
                </div>
                <div className="menu-slider"></div>
              </div>
              <div className="category-arrow">
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6.5L1 12" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <button className="btn-all-categories" onClick={() => scrollToSection('services')}>
                All Services
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0L20 6.5L13 13M0 6.5H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="category-images">
              <div className="category-card bedroom-card">
                <div className="category-image-content">
                  <h3 className="category-name">AC Repair</h3>
                  <button className="btn-explore" onClick={() => scrollToSection('services')}>Explore</button>
                </div>
                <img src="https://images.unsplash.com/photo-1631540571925-0b0a1c0b0e0a?w=600&h=400&fit=crop" alt="AC Repair" className="category-image" />
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop" alt="TV Repair" />
              </div>
              <div className="category-card">
                <img src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop" alt="Fridge Repair" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Converted to Top Services */}
      <section className="products-section" id="services">
        <div className="products-container">
          <h2 className="section-title">Top Services</h2>
          <div className="products-grid">
            <div className="product-card" style={{ backgroundColor: '#CAF3E5' }}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1631540571925-0b0a1c0b0e0a?w=400&h=400&fit=crop" alt="AC Installation" />
              </div>
              <div className="product-details">
                <h3 className="product-name">AC Installation</h3>
                <p className="product-info">Professional installation<br />Starting from ₹2,500</p>
              </div>
            </div>
            <div className="product-card" style={{ backgroundColor: '#E0EFF6' }}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop" alt="TV Wall Mounting" />
              </div>
              <div className="product-details">
                <h3 className="product-name">TV Wall Mounting</h3>
                <p className="product-info">Safe & secure mounting<br />Starting from ₹800</p>
              </div>
            </div>
            <div className="product-card" style={{ backgroundColor: '#EEEBFF' }}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop" alt="Electric Motor Repair" />
              </div>
              <div className="product-details">
                <h3 className="product-name">Electric Motor Repair</h3>
                <p className="product-info">Expert motor servicing<br />Starting from ₹600</p>
              </div>
            </div>
            <div className="product-card" style={{ backgroundColor: '#FFF4E7' }}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop" alt="Inverter Service" />
              </div>
              <div className="product-details">
                <h3 className="product-name">Inverter Service</h3>
                <p className="product-info">Battery & inverter repair<br />Starting from ₹1,200</p>
              </div>
            </div>
          </div>
          <div className="products-footer">
            <div className="slider-dots"></div>
            <button className="btn-explore-all" onClick={() => scrollToSection('appointment')}>
              View all services
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L20 6.5L13 13M0 6.5H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Special Package Section - Converted to What We Sell */}
      <section className="package-section" id="products">
        <div className="package-container">
          <h2 className="package-title">What We Sell</h2>
          <div className="package-content">
            <div className="package-main">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80" alt="Premium Switchboard" className="package-main-image" />
              <div className="package-main-info">
                <div className="package-main-header">
                  <div>
                    <h3 className="package-main-title">Premium Switchboard Set</h3>
                    <div className="package-stars">
                      <span>★★★★★</span>
                    </div>
                    <p className="package-main-price">₹3,499</p>
                  </div>
                </div>
                <button className="btn-add-to-cart" onClick={() => scrollToSection('contact')}>
                  Buy Now
                  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9V6C9 3.24 11.24 1 14 1C16.76 1 19 3.24 19 6V9H22C23.1 9 24 9.9 24 11V23C24 24.1 23.1 25 22 25H6C4.9 25 4 24.1 4 23V11C4 9.9 4.9 9 6 9H9ZM11 9H17V6C17 4.35 15.65 5 14 5C12.35 5 11 4.35 11 6V9Z" fill="#FDFBF8"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="package-side">
              <div className="package-description">
                <h4>Description</h4>
                <p>High-quality electrical switchboards with MCB protection, designed for home and office use. Includes all necessary components for safe electrical distribution and comes with installation support.</p>
                <a href="#" className="see-more-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>See More <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 6L13 1" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
              <div className="package-card">
                <div className="package-card-image">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&q=80" alt="LED Bulbs Pack" />
                </div>
                <div className="package-card-info">
                  <div className="package-card-header">
                    <h4>LED Bulbs Pack</h4>
                    <p className="package-card-price">₹899</p>
                  </div>
                  <div className="package-stars-small">
                    <span>★★★★★</span>
                  </div>
                  <a href="#" className="see-details-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>See Details</a>
                  <div className="zoom-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="7" r="6" stroke="#FDFBF8" strokeWidth="1"/>
                      <path d="M10.5 10.5L12 12" stroke="#FDFBF8" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="package-products">
                <div className="package-product-item">
                  <div className="package-product-image">
                    <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop&q=80" alt="Ceiling Fans" />
                  </div>
                  <div className="package-product-info">
                    <div className="package-product-header">
                      <h4>Ceiling Fans</h4>
                      <p>₹1,899</p>
                    </div>
                    <div className="package-stars-small">
                      <span>★★★★★</span>
                    </div>
                    <p className="package-product-desc">Energy-efficient ceiling fans with remote control and warranty.</p>
                    <a href="#" className="see-more-link-small" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>See More <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 6L13 1" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                  </div>
                </div>
                <div className="package-product-item">
                  <div className="package-product-image">
                    <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=300&fit=crop&q=80" alt="Wiring Tools" />
                  </div>
                  <div className="package-product-info">
                    <div className="package-product-header">
                      <h4>Wiring Tools Kit</h4>
                      <p>₹2,499</p>
                    </div>
                    <div className="package-stars-small">
                      <span>★★★★★</span>
                    </div>
                    <p className="package-product-desc">Professional electrical tools set for home wiring and repairs.</p>
                    <a href="#" className="see-more-link-small" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>See More <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 6L13 1" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Own Creation Section - Converted to About Us */}
      <section className="creation-section" id="about">
        <div className="creation-container">
          <div className="creation-header">
            <div className="creation-title-box">
              <h2 className="creation-title">About<br />Our Service</h2>
              <p className="creation-subtitle">Trusted electronic repair experts</p>
              <div className="creation-controls">
                <span>More</span>
                <div className="slider-dots-small"></div>
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6.5L1 12" stroke="#FDFBF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="creation-images">
            <div className="creation-main-image">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop" alt="Our Service" />
              <button className="btn-explore-rooms" onClick={() => scrollToSection('contact')}>Contact Us</button>
            </div>
            <div className="creation-side-images">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=800&fit=crop" alt="Service 1" />
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop" alt="Service 2" />
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=800&fit=crop" alt="Service 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="reviews">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Customer Reviews</h2>
            <p className="testimonials-subtitle">Over 15,000 satisfied customers.</p>
          </div>
          <div className="testimonial-content">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Rajesh Kumar" className="testimonial-avatar" />
            <div className="testimonial-text">
              <p className="testimonial-quote">"Excellent service! The technician fixed my AC quickly and professionally. The pricing was fair and they provided a warranty. Highly recommend for all electronic repairs."</p>
              <div className="testimonial-author">
                <h4 className="author-name">Rajesh Kumar</h4>
                <p className="author-title">Homeowner</p>
              </div>
            </div>
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" className="testimonial-arrow" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6.5L1 12" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="testimonials-footer">
            <div className="slider-dots"></div>
            <a href="#" className="see-all-reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>See all reviews <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6.5L1 12" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-company">
              <img 
                src="https://placehold.co/144x36/07484A/FFFFFF?text=ElectroRepair" 
                alt="ElectroRepair Logo" 
                className="footer-logo"
                onClick={() => scrollToSection('home')}
                style={{ cursor: 'pointer' }}
              />
              <div className="social-icons">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="#FFFFFF"/>
                  <path d="M15 7C10.58 7 7 10.58 7 15C7 19.42 10.58 23 15 23C19.42 23 23 19.42 23 15C23 10.58 19.42 7 15 7Z" fill="#07484A"/>
                </svg>
                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0C6.72 0 0 6.04 0 13.5C0 20.96 6.72 27 15 27C23.28 27 30 20.96 30 13.5C30 6.04 23.28 0 15 0Z" fill="#FFFFFF"/>
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="#FFFFFF"/>
                </svg>
                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0C6.72 0 0 6.04 0 13.5C0 20.96 6.72 27 15 27C23.28 27 30 20.96 30 13.5C30 6.04 23.28 0 15 0Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <p className="footer-address">
                Address<br />
                +91 98765 43210<br />
                123 Service Street<br />
                Mumbai, 400001, India
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('appointment'); }}>Book Service</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Track Order</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Service Status</a>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>Service Areas</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose-us'); }}>Warranty Info</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>FAQ</a>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>All Services</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>AC Repair</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>TV Repair</a>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Terms & Conditions</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Refund Policy</a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>Copyright ©2024 ElectroRepair. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
