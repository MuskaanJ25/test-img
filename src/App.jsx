import React from 'react';

function App() {
  return (
    <div className="page">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="brand-logo">Brand</span>
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <div className="ms-lg-3">
              <button className="btn btn-primary btn-signup">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
                Build Something <span className="text-gradient">Amazing</span> Today
              </h1>
              <p className="hero-subtitle">
                Create stunning digital experiences with our powerful platform. 
                Designed for modern teams who want to ship faster and scale smarter.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg me-3">Start Free Trial</button>
                <button className="btn btn-outline-light btn-lg">Watch Demo</button>
              </div>
              <div className="hero-stats mt-5">
                <div className="d-flex gap-5">
                  <div>
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Active Users</div>
                  </div>
                  <div>
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                  <div>
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-illustration">
                  <div className="illustration-card card-1"></div>
                  <div className="illustration-card card-2"></div>
                  <div className="illustration-card card-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need to build, launch, and grow your product
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-desc">
                  Optimized performance with sub-second load times. Your users will love the speed.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Secure by Default</h3>
                <p className="feature-desc">
                  Enterprise-grade security with end-to-end encryption and compliance certifications.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="feature-title">Team Collaboration</h3>
                <p className="feature-desc">
                  Real-time collaboration tools that keep your team in sync, no matter where they are.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className="feature-title">Responsive Design</h3>
                <p className="feature-desc">
                  Pixel-perfect on every device. From mobile to desktop, your site always looks great.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 className="feature-title">Advanced Analytics</h3>
                <p className="feature-desc">
                  Deep insights into user behavior with beautiful dashboards and custom reports.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="feature-title">Easy Integration</h3>
                <p className="feature-desc">
                  Connect with your favorite tools through our robust API and pre-built integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-illustration">
                  <div className="about-circle circle-1"></div>
                  <div className="about-circle circle-2"></div>
                  <div className="about-circle circle-3"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="section-subtitle mb-4">
                We've helped thousands of companies transform their digital presence and accelerate growth.
              </p>
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <h4 className="about-feature-title">Industry-Leading Technology</h4>
                    <p className="about-feature-desc">Built with the latest frameworks and best practices.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <h4 className="about-feature-title">Expert Support Team</h4>
                    <p className="about-feature-desc">Dedicated support available around the clock.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <h4 className="about-feature-title">Continuous Updates</h4>
                    <p className="about-feature-desc">Regular feature releases and security updates.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <h4 className="about-feature-title">Money-Back Guarantee</h4>
                    <p className="about-feature-desc">30-day risk-free trial with full refund.</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-lg mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Join thousands of satisfied customers and take your business to the next level.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light btn-lg">Start Free Trial</button>
              <button className="btn btn-outline-light btn-lg ms-3">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="footer-brand">
                <span className="brand-logo">Brand</span>
                <p className="footer-desc">
                  Building the future of digital experiences, one pixel at a time.
                </p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">Product</h5>
              <ul className="footer-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">API Reference</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="footer-heading">Legal</h5>
              <ul className="footer-links">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              © 2024 Brand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;