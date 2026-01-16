// Contact.jsx
import { useState } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaComment
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    plotInterest: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          plotInterest: ""
        });
      }, 3000);
    }, 1500);
  };

  const plotOptions = [
    "Karen Residential Plots",
    "Ruaka Commercial Plots",
    "Athi River Affordable Plots",
    "Not Sure Yet",
    "Other"
  ];

  return (
    <div className="container py-5">
      {/* Hero Header */}
      <div className="text-center mb-5 fade-in">
        <h1 className="display-4 fw-bold mb-3" style={{ color: "#243C8F" }}>
          Get In Touch
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Have questions about our properties? Ready to schedule a site visit? 
          Our team is here to help you with your real estate journey.
        </p>
      </div>

      <div className="row g-5">
        {/* Contact Information */}
        <div className="col-lg-5 fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="glass-card p-4 p-lg-5 rounded-3 h-100">
            <h2 className="fw-bold mb-4" style={{ color: "#243C8F" }}>
              Contact Information
            </h2>
            
            {/* Contact Items */}
            <div className="mb-4">
              <div className="d-flex align-items-start mb-4">
                <div className="contact-icon me-3">
                  <FaEnvelope size={20} style={{ color: "#1AA6A6" }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#243C8F" }}>Email</h5>
                  <a 
                    href="mailto:info@sitepoint.co.ke" 
                    className="text-decoration-none"
                    style={{ color: "#555" }}
                  >
                    info@sitepoint.co.ke
                  </a>
                  <div className="small text-muted mt-1">
                    We typically respond within 24 hours
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="contact-icon me-3">
                  <FaPhone size={20} style={{ color: "#1AA6A6" }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#243C8F" }}>Phone</h5>
                  <a 
                    href="tel:+254714999333" 
                    className="text-decoration-none"
                    style={{ color: "#555" }}
                  >
                    +254 714 999 333
                  </a>
                  <div className="small text-muted mt-1">
                    Mon-Fri, 8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="contact-icon me-3">
                  <FaWhatsapp size={20} style={{ color: "#1AA6A6" }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#243C8F" }}>WhatsApp</h5>
                  <a 
                    href="https://wa.me/254714999333" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    style={{ color: "#555" }}
                  >
                    +254 714 999 333
                  </a>
                  <div className="small text-muted mt-1">
                    Chat with us for quick responses
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="contact-icon me-3">
                  <FaMapMarkerAlt size={20} style={{ color: "#1AA6A6" }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#243C8F" }}>Location</h5>
                  <p className="mb-0" style={{ color: "#555" }}>
                    Nairobi, Kenya
                  </p>
                  <div className="small text-muted mt-1">
                    Head office located in Nairobi
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="contact-icon me-3">
                  <FaClock size={20} style={{ color: "#1AA6A6" }} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#243C8F" }}>Business Hours</h5>
                  <div style={{ color: "#555" }}>
                    <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 4:00 PM</div>
                    <div>Sunday: By Appointment Only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-5 pt-4 border-top">
              <h5 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
                Follow Us
              </h5>
              <div className="d-flex gap-3">
                <a
                  href="https://web.facebook.com/sitepointproperties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://www.instagram.com/p/DTN4_MsgoMK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-5 pt-4 border-top">
              <h5 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
                Quick Actions
              </h5>
              <div className="d-grid gap-2">
                <a
                  href="tel:+254714999333"
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#243C8F",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem"
                  }}
                >
                  <FaPhone className="me-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/254714999333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#25D366",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem"
                  }}
                >
                  <FaWhatsapp className="me-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7 fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="glass-card p-4 p-lg-5 rounded-3">
            <h2 className="fw-bold mb-4" style={{ color: "#243C8F" }}>
              Send Us a Message
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-5">
                <div className="success-animation mb-4">
                  <FaCheckCircle size={64} style={{ color: "#1AA6A6" }} />
                </div>
                <h3 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
                  Thank You!
                </h3>
                <p className="text-muted mb-4">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn px-4"
                  style={{
                    backgroundColor: "#1AA6A6",
                    color: "white",
                    border: "none",
                    borderRadius: "8px"
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        <FaUser className="me-2" size={14} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your name"
                        required
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem"
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        <FaEnvelope className="me-2" size={14} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="your.email@example.com"
                        required
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem"
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        <FaPhone className="me-2" size={14} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="+254 XXX XXX XXX"
                        required
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem"
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        <FaBuilding className="me-2" size={14} />
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Company name"
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem"
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        Plot Interest
                      </label>
                      <select
                        name="plotInterest"
                        value={formData.plotInterest}
                        onChange={handleChange}
                        className="form-select"
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem"
                        }}
                      >
                        <option value="">Select a property type</option>
                        {plotOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="What is your inquiry about?"
                        required
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem"
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label fw-semibold" style={{ color: "#243C8F" }}>
                        <FaComment className="me-2" size={14} />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows="6"
                        placeholder="Tell us more about your inquiry..."
                        required
                        style={{
                          borderColor: "#dee2e6",
                          borderRadius: "8px",
                          padding: "0.75rem",
                          resize: "vertical"
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-100 py-3 fw-semibold"
                      style={{
                        backgroundColor: "#1AA6A6",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="glass-card p-4 p-lg-5 rounded-3 mt-4">
            <h3 className="fw-bold mb-4" style={{ color: "#243C8F" }}>
              Frequently Asked Questions
            </h3>
            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "How soon can I get a site visit?",
                  a: "We typically schedule site visits within 24-48 hours, depending on location and availability."
                },
                {
                  q: "Are the title deeds ready?",
                  a: "Yes, all our properties come with ready and verified title deeds."
                },
                {
                  q: "What payment plans do you offer?",
                  a: "We offer flexible payment plans ranging from 3 to 24 months, depending on the property value."
                },
                {
                  q: "Can I get legal assistance?",
                  a: "Yes, we work with trusted legal partners who can assist with the property transfer process."
                }
              ].map((faq, index) => (
                <div className="accordion-item border-0 mb-2" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                      style={{
                        backgroundColor: "rgba(36, 60, 143, 0.05)",
                        color: "#243C8F",
                        borderRadius: "8px",
                        boxShadow: "none"
                      }}
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div
                    id={`faq${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body" style={{ color: "#555" }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5 fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="glass-card p-4 p-lg-5 rounded-3">
          <h3 className="fw-bold mb-4" style={{ color: "#243C8F" }}>
            Find Our Office
          </h3>
          <div 
            className="rounded-3 overflow-hidden"
            style={{ 
              height: "300px",
              background: "linear-gradient(135deg, #243C8F 0%, #1AA6A6 100%)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <FaMapMarkerAlt size={48} className="mb-3" />
            <h4 className="fw-bold mb-2">Nairobi, Kenya</h4>
            <p className="text-center mb-0" style={{ opacity: 0.9, maxWidth: "400px" }}>
              Our head office is located in Nairobi. Contact us for specific directions.
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(36, 60, 143, 0.1);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(36, 60, 143, 0.08);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(36, 60, 143, 0.15);
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          background: rgba(26, 166, 166, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-icon {
          width: 44px;
          height: 44px;
          background: rgba(36, 60, 143, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #243C8F;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #243C8F;
          color: white;
          transform: translateY(-3px);
        }
        
        .form-control:focus, .form-select:focus {
          border-color: #1AA6A6;
          box-shadow: 0 0 0 0.25rem rgba(26, 166, 166, 0.25);
        }
        
        .btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .success-animation {
          animation: scaleIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .accordion-button:not(.collapsed) {
          background-color: rgba(26, 166, 166, 0.1) !important;
          color: #243C8F !important;
        }
        
        .accordion-button:focus {
          box-shadow: 0 0 0 0.25rem rgba(26, 166, 166, 0.25) !important;
          border-color: #1AA6A6 !important;
        }
      `}</style>
    </div>
  );
}