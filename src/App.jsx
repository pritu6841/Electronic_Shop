import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <img src="/images/logo.svg" alt="INWOOD Logo" className="logo" />
            <nav className="menu">
              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#categories">Categories</a>
              <a href="#about">About</a>
              <a href="#contact">Contact Us</a>
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
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Exclusive Deals of<br />Furniture Collection</h1>
            <p className="hero-subtitle">Explore different categories. Find the best deals.</p>
            <button className="btn-primary">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-image">
            <img src="/images/newsletter-image.png" alt="Newsletter" />
          </div>
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">Join Our<br />Newsletter</h2>
              <p className="newsletter-description">Receive exclusive deals, discounts and many offers.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-title">Benefits for your expediency</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#EEEBFF' }}>
                <img src="/images/payment-icon.svg" alt="Payment" />
              </div>
              <h3 className="benefit-title">Payment Method</h3>
              <p className="benefit-description">We offer flexible payment<br />options, to make easier.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#FFF4E7' }}>
                <img src="/images/return-icon.svg" alt="Return" />
              </div>
              <h3 className="benefit-title">Return policy</h3>
              <p className="benefit-description">You can return a product<br />within 30 days.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#CAF3E5' }}>
                <img src="/images/support-icon.svg" alt="Support" />
              </div>
              <h3 className="benefit-title">Customer Support</h3>
              <p className="benefit-description">Our customer support<br />is 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
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
                  <p>Bedroom</p>
                  <p>Dinning Room</p>
                  <p>Meeting Room</p>
                  <p>Workspace</p>
                  <p>Living Room</p>
                  <p>Kitchen</p>
                  <p>Living Space</p>
                </div>
                <div className="menu-slider"></div>
              </div>
              <div className="category-arrow">
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6.5L1 12" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <button className="btn-all-categories">
                All Categories
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0L20 6.5L13 13M0 6.5H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="category-images">
              <div className="category-card bedroom-card">
                <div className="category-image-content">
                  <h3 className="category-name">Bedroom</h3>
                  <button className="btn-explore">Explore</button>
                </div>
                <img src="/images/bedroom-image.svg" alt="Bedroom" className="category-image" />
              </div>
              <div className="category-card">
                <img src="/images/bedroom-image.svg" alt="Category" />
              </div>
              <div className="category-card">
                <img src="/images/bedroom-image.svg" alt="Category" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-container">
          <h2 className="section-title">Popular Products</h2>
          <div className="products-grid">
            <div className="product-card" style={{ backgroundColor: '#CAF3E5' }}>
              <div className="product-image">
                <img src="/images/armchair.png" alt="Armchair" />
              </div>
              <div className="product-details">
                <h3 className="product-name">Armchair</h3>
                <p className="product-info">Light single chair<br />$145</p>
              </div>
            </div>
            <div className="product-card" style={{ backgroundColor: '#E0EFF6' }}>
              <div className="product-image">
                <img src="/images/sofa.png" alt="Premium Sofa" />
              </div>
              <div className="product-details">
                <h3 className="product-name">Premium Sofa</h3>
                <p className="product-info">Light single chair<br />$145</p>
              </div>
            </div>
            <div className="product-card" style={{ backgroundColor: '#EEEBFF' }}>
              <div className="product-image">
                <img src="/images/minimal-sofa.png" alt="Minimal Sofa" />
              </div>
              <div className="product-details">
                <h3 className="product-name">Minimal Sofa</h3>
                <p className="product-info">Light single chair<br />$145</p>
              </div>
            </div>
            <div className="product-card" style={{ backgroundColor: '#FFF4E7' }}>
              <div className="product-image">
                <img src="/images/dining-chair.png" alt="Dining Chair" />
              </div>
              <div className="product-details">
                <h3 className="product-name">Dining Chair</h3>
                <p className="product-info">Light single chair<br />$145</p>
              </div>
            </div>
          </div>
          <div className="products-footer">
            <div className="slider-dots"></div>
            <button className="btn-explore-all">
              Explore all items
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L20 6.5L13 13M0 6.5H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Special Package Section */}
      <section className="package-section">
        <div className="package-container">
          <h2 className="package-title">Special Package</h2>
          <div className="package-content">
            <div className="package-main">
              <img src="/images/larkin-wood.png" alt="Larkin Wood Full Set" className="package-main-image" />
              <div className="package-main-info">
                <div className="package-main-header">
                  <div>
                    <h3 className="package-main-title">Larkin Wood Full Set</h3>
                    <div className="package-stars">
                      <span>★★★★★</span>
                    </div>
                    <p className="package-main-price">$729.99</p>
                  </div>
                </div>
                <button className="btn-add-to-cart">
                  Add to cart
                  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9V6C9 3.24 11.24 1 14 1C16.76 1 19 3.24 19 6V9H22C23.1 9 24 9.9 24 11V23C24 24.1 23.1 25 22 25H6C4.9 25 4 24.1 4 23V11C4 9.9 4.9 9 6 9H9ZM11 9H17V6C17 4.35 15.65 5 14 5C12.35 5 11 4.35 11 6V9Z" fill="#FDFBF8"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="package-side">
              <div className="package-description">
                <h4>Description</h4>
                <p>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.</p>
                <a href="#" className="see-more-link">See More <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 6L13 1" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              </div>
              <div className="package-card">
                <div className="package-card-image">
                  <img src="/images/living-room-set.png" alt="Living Room Family Set" />
                </div>
                <div className="package-card-info">
                  <div className="package-card-header">
                    <h4>Living Room Family Set</h4>
                    <p className="package-card-price">$229.99</p>
                  </div>
                  <div className="package-stars-small">
                    <span>★★★★★</span>
                  </div>
                  <a href="#" className="see-details-link">See Details</a>
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
                    <img src="/images/special-set-1.png" alt="Living Room Special Set" />
                  </div>
                  <div className="package-product-info">
                    <div className="package-product-header">
                      <h4>Living Room Special Set</h4>
                      <p>$329.99</p>
                    </div>
                    <div className="package-stars-small">
                      <span>★★★★★</span>
                    </div>
                    <p className="package-product-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="see-more-link-small">See More <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 6L13 1" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                  </div>
                </div>
                <div className="package-product-item">
                  <div className="package-product-image">
                    <img src="/images/special-set-2.png" alt="Living Room Special Set" />
                  </div>
                  <div className="package-product-info">
                    <div className="package-product-header">
                      <h4>Living Room Special Set</h4>
                      <p>$587.99</p>
                    </div>
                    <div className="package-stars-small">
                      <span>★★★★★</span>
                    </div>
                    <p className="package-product-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="see-more-link-small">See More <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 6L13 1" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Own Creation Section */}
      <section className="creation-section">
        <div className="creation-container">
          <div className="creation-header">
            <div className="creation-title-box">
              <h2 className="creation-title">Our<br />Own Creation</h2>
              <p className="creation-subtitle">Designed in our studio</p>
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
              <img src="/images/creation-main.png" alt="Our Creation" />
              <button className="btn-explore-rooms">Explore All Rooms</button>
            </div>
            <div className="creation-side-images">
              <img src="/images/creation-1.png" alt="Creation 1" />
              <img src="/images/creation-2.png" alt="Creation 2" />
              <img src="/images/creation-3.png" alt="Creation 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Testimonials</h2>
            <p className="testimonials-subtitle">Over 15,000 happy customers.</p>
          </div>
          <div className="testimonial-content">
            <img src="/images/testimonial-avatar.png" alt="Leona Paul" className="testimonial-avatar" />
            <div className="testimonial-text">
              <p className="testimonial-quote">"My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing experience, the newsletter.Thank you."</p>
              <div className="testimonial-author">
                <h4 className="author-name">Leona Paul</h4>
                <p className="author-title">CEO of Floatcom</p>
              </div>
            </div>
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" className="testimonial-arrow" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6.5L1 12" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="testimonials-footer">
            <div className="slider-dots"></div>
            <a href="#" className="see-all-reviews">See all review <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6.5L1 12" stroke="#07484A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-company">
              <img src="/images/logo.svg" alt="INWOOD Logo" className="footer-logo" />
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
                +123 654 987<br />
                877  The Bronx, NY<br />
                14568, USA
              </p>
            </div>
            <div className="footer-links">
              <h4>My Account</h4>
              <a href="#">Sign in</a>
              <a href="#">Register</a>
              <a href="#">Order status</a>
            </div>
            <div className="footer-links">
              <h4>Help</h4>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">Sizing</a>
            </div>
            <div className="footer-links">
              <h4>Shop</h4>
              <a href="#">All Products</a>
              <a href="#">Bedroom</a>
              <a href="#">Dinning Room</a>
            </div>
            <div className="footer-links">
              <h4>Legal Stuff</h4>
              <a href="#">Shipping & Delivery</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy & Policy</a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>Copyright ©2020 INWOOD. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
