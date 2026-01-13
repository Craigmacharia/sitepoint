import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        background: "linear-gradient(180deg, #243C8F 0%, #1a2b6e 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <h3 
                className="fw-bold mb-3"
                style={{ 
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5px"
                }}
              >
                Site Point Properties Limited
              </h3>
              <div className="footer-divider"></div>
              <p className="mt-3" style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.7" }}>
                We offer genuine, affordable land with ready title deeds in
                strategic locations across Kenya. Your trusted partner in real
                estate investment.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 
              className="fw-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Quick Links
            </h5>
            <div className="footer-divider mb-3"></div>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plots" className="footer-link">
                  Available Plots
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 
              className="fw-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Contact Info
            </h5>
            <div className="footer-divider mb-3"></div>
            <ul className="list-unstyled contact-info">
              <li className="d-flex align-items-start mb-3">
                <FaPhone className="me-3 mt-1" style={{ color: "#1AA6A6" }} />
                <div>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>+254 7XX XXX XXX</span>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)" }}>
                    Mon-Fri, 8am-6pm
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaEnvelope className="me-3 mt-1" style={{ color: "#1AA6A6" }} />
                <div>
                  <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>info@sitepoint.co.ke</span>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)" }}>
                    sales@sitepoint.co.ke
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaMapMarkerAlt className="me-3 mt-1" style={{ color: "#1AA6A6" }} />
                <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="col-lg-3 col-md-6">
            <div 
              className="p-4 rounded-3"
              style={{
                background: "rgba(26, 166, 166, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h6 className="fw-bold mb-3" style={{ color: "#ffffff" }}>
                Quick Assistance
              </h6>
              <p className="small mb-4" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                Need immediate help? Chat with us on WhatsApp for instant support.
              </p>
              <a
                href="https://wa.me/2547XXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "#1AA6A6",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                <FaWhatsapp size={20} />
                <span className="fw-semibold">WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-4 text-center"
        style={{
          backgroundColor: "rgba(31, 50, 119, 0.8)",
          backdropFilter: "blur(5px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start mb-3 mb-md-0">
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                © {currentYear} Site Point Properties Limited. All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <Link 
                  to="/privacy" 
                  className="text-decoration-none"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-decoration-none"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #1AA6A6, transparent);
          border-radius: 2px;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
          display: inline-block;
        }
        
        .footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
        
        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 6px;
          background-color: #1AA6A6;
          border-radius: 3px;
          opacity: 0.5;
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::before {
          width: 6px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #ffffff;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: #1AA6A6;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(26, 166, 166, 0.4);
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 166, 166, 0.4);
        }
        
        .contact-info li:hover {
          transform: translateX(5px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </footer>
  );
}










