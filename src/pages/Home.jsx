import { Link } from "react-router-dom";
import { 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaCalendarCheck, 
  FaHandshake, 
  FaChartLine,
  FaHome,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Home() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Auto-advance carousel
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const carousel = new window.bootstrap.Carousel(carouselRef.current);
        carousel.next();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO / SLIDESHOW */}
      <section className="position-relative overflow-hidden">
        <div className="container-fluid px-0">
          <div
            ref={carouselRef}
            id="homeCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="position-relative">
                  <img
                    src="/pt1.jpg"
                    className="d-block w-100"
                    alt="Land for sale"
                    style={{ 
                      height: "85vh", 
                      objectFit: "cover",
                      filter: "brightness(0.7)"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div style="
                          height: 85vh;
                          background: linear-gradient(135deg, #243C8F 0%, #1AA6A6 100%);
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          color: white;
                          padding: 20px;
                        ">
                          <div class="text-center">
                            <div style="font-size: 4rem; margin-bottom: 20px;">🏡</div>
                            <h2 style="font-size: 2.5rem; font-weight: 600;">Prime Land Investments</h2>
                            <p style="font-size: 1.2rem; opacity: 0.9;">Secure, genuine plots in strategic locations</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  <div className="carousel-caption text-start px-3 px-lg-5" style={{ 
                    bottom: "15%",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                  }}>
                    <h1 className="display-4 fw-bold mb-3 slide-up" style={{ animationDelay: "0.2s" }}>
                      Prime Land <br />
                      <span style={{ color: "#1AA6A6" }}>Investments</span>
                    </h1>
                    <p className="lead mb-4 slide-up" style={{ animationDelay: "0.4s", fontSize: "1.2rem" }}>
                      Secure, genuine plots in strategic locations across Kenya
                    </p>
                    <Link
                      to="/plots"
                      className="btn btn-lg px-5 py-3 slide-up"
                      style={{
                        backgroundColor: "#1AA6A6",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        animationDelay: "0.6s"
                      }}
                    >
                      View Available Plots
                      <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="position-relative">
                  <img
                    src="/mg.png"
                    className="d-block w-100"
                    alt="Affordable plots"
                    style={{ 
                      height: "85vh", 
                      objectFit: "cover",
                      filter: "brightness(0.7)"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div style="
                          height: 85vh;
                          background: linear-gradient(135deg, #1AA6A6 0%, #243C8F 100%);
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          color: white;
                          padding: 20px;
                        ">
                          <div class="text-center">
                            <div style="font-size: 4rem; margin-bottom: 20px;">📄</div>
                            <h2 style="font-size: 2.5rem; font-weight: 600;">Affordable & Verified Plots</h2>
                            <p style="font-size: 1.2rem; opacity: 0.9;">Title deeds ready – buy with confidence</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  <div className="carousel-caption text-center px-3 px-lg-5" style={{ 
                    bottom: "15%",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                  }}>
                    <h2 className="display-4 fw-bold mb-3 slide-up" style={{ animationDelay: "0.2s" }}>
                      Verified Title Deeds <br />
                      <span style={{ color: "#1AA6A6" }}>Guaranteed</span>
                    </h2>
                    <p className="lead mb-4 slide-up" style={{ animationDelay: "0.4s", fontSize: "1.2rem" }}>
                      All plots come with ready and legally verified title documents
                    </p>
                    <Link
                      to="/about"
                      className="btn btn-lg px-5 py-3 slide-up"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "2px solid white",
                        borderRadius: "8px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        animationDelay: "0.6s"
                      }}
                    >
                      Learn About Us
                      <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="position-relative">
                  <img
                    src="/pt3.jpg"
                    className="d-block w-100"
                    alt="Site visit"
                    style={{ 
                      height: "85vh", 
                      objectFit: "cover",
                      filter: "brightness(0.7)"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div style="
                          height: 85vh;
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          color: white;
                          padding: 20px;
                        ">
                          <div class="text-center">
                            <div style="font-size: 4rem; margin-bottom: 20px;">📍</div>
                            <h2 style="font-size: 2.5rem; font-weight: 600;">Book a Free Site Visit</h2>
                            <p style="font-size: 1.2rem; opacity: 0.9;">See the land before you invest</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  <div className="carousel-caption text-end px-3 px-lg-5" style={{ 
                    bottom: "15%",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                  }}>
                    <h2 className="display-4 fw-bold mb-3 slide-up" style={{ animationDelay: "0.2s" }}>
                      Experience First, <br />
                      <span style={{ color: "#1AA6A6" }}>Invest Later</span>
                    </h2>
                    <p className="lead mb-4 slide-up" style={{ animationDelay: "0.4s", fontSize: "1.2rem" }}>
                      Schedule a complimentary site visit with our experts
                    </p>
                    <Link
                      to="/contact"
                      className="btn btn-lg px-5 py-3 slide-up"
                      style={{
                        backgroundColor: "#1AA6A6",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        animationDelay: "0.6s"
                      }}
                    >
                      Book a Visit
                      <FaCalendarCheck className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="prev"
              style={{ width: "5%" }}
            >
              <div className="glass-card rounded-circle p-3 d-flex align-items-center justify-content-center">
                <FaChevronLeft size={24} color="white" />
              </div>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="next"
              style={{ width: "5%" }}
            >
              <div className="glass-card rounded-circle p-3 d-flex align-items-center justify-content-center">
                <FaChevronRight size={24} color="white" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-5 fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-3" style={{ 
              color: "#243C8F",
              fontSize: "3rem",
              letterSpacing: "-0.5px"
            }}>
              Site Point Properties
              <span className="d-block fs-4 mt-2" style={{ color: "#1AA6A6" }}>
                Limited
              </span>
            </h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We provide genuine, affordable land with ready title deeds, 
              helping you invest with confidence and peace of mind in Kenya's 
              most promising locations.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Link
                to="/plots"
                className="btn px-5 py-3 fade-in"
                style={{
                  backgroundColor: "#1AA6A6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  animationDelay: "0.3s"
                }}
              >
                <FaHome className="me-2" />
                View Properties
              </Link>
              <Link
                to="/contact"
                className="btn px-5 py-3 fade-in"
                style={{
                  backgroundColor: "transparent",
                  color: "#243C8F",
                  border: "2px solid #243C8F",
                  borderRadius: "8px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  animationDelay: "0.4s"
                }}
              >
                Get Consultation
                <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 bg-gradient fade-in" style={{ 
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%)",
        animationDelay: "0.4s"
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              Why Choose Us
            </h2>
            <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
              We stand out by offering transparent, reliable, and customer-focused 
              real estate services
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: FaShieldAlt,
                title: "Genuine Title Deeds",
                description: "All plots come with verified, government-approved title deeds ensuring legal ownership.",
                color: "#243C8F"
              },
              {
                icon: FaMapMarkerAlt,
                title: "Strategic Locations",
                description: "Carefully selected areas with high growth potential and excellent accessibility.",
                color: "#1AA6A6"
              },
              {
                icon: FaCalendarCheck,
                title: "Free Site Visits",
                description: "Visit and personally inspect the land before making any investment decisions.",
                color: "#243C8F"
              },
              {
                icon: FaHandshake,
                title: "Transparent Process",
                description: "Clear, honest communication with no hidden costs or surprise fees.",
                color: "#1AA6A6"
              },
              {
                icon: FaChartLine,
                title: "Investment Guidance",
                description: "Expert advice on property selection based on market trends and growth potential.",
                color: "#243C8F"
              },
              {
                icon: FaHome,
                title: "After-Sale Support",
                description: "Continuous support even after purchase to ensure smooth property transfer.",
                color: "#1AA6A6"
              }
            ].map((feature, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="glass-card h-100 p-4 rounded-3 slide-up" 
                  style={{ 
                    animationDelay: `${0.1 * index}s`,
                    transition: "all 0.3s ease"
                  }}
                >
                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1">
                      <feature.icon size={32} style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: "#243C8F" }}>
                        {feature.title}
                      </h5>
                      <p className="text-muted mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* TESTIMONIALS */}
      <section className="py-5 fade-in" style={{ 
        background: "linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)",
        animationDelay: "0.8s"
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              Client Testimonials
            </h2>
            <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Hear from our satisfied customers who have invested with confidence
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                quote: "The process was smooth and transparent. I received my title deed without any delays or complications. Highly professional service!",
                author: "James Mwangi",
                role: "Property Investor",
                rating: 5
              },
              {
                quote: "Affordable prices and very professional service. The site visit organized by their team gave me complete confidence in my investment.",
                author: "Sarah Wanjiku",
                role: "First-time Buyer",
                rating: 5
              },
              {
                quote: "They explained everything clearly and guided me through the entire process. I'm very satisfied with my plot purchase.",
                author: "David Kariuki",
                role: "Business Owner",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="glass-card h-100 p-4 rounded-3 slide-up" 
                  style={{ 
                    animationDelay: `${0.2 * index}s`,
                    transition: "all 0.3s ease"
                  }}
                >
                  <div className="mb-3">
                    <FaQuoteLeft size={24} style={{ color: "#1AA6A6", opacity: 0.5 }} />
                  </div>
                  
                  <p className="mb-4" style={{ color: "#555", lineHeight: "1.7" }}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: "#243C8F" }}>
                        {testimonial.author}
                      </h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                    
                    <div className="d-flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} size={14} style={{ color: "#FFD700" }} className="ms-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 text-center fade-in" style={{ animationDelay: "1s" }}>
        <div className="container">
          <div className="glass-card p-5 rounded-3" style={{ 
            background: "linear-gradient(135deg, rgba(36, 60, 143, 0.05) 0%, rgba(26, 166, 166, 0.05) 100%)"
          }}>
            <h2 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              Ready to Invest in Your Future?
            </h2>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              Start your property investment journey with trusted professionals
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <Link
                to="/contact"
                className="btn btn-lg px-5 py-3"
                style={{
                  backgroundColor: "#1AA6A6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600"
                }}
              >
                Book Free Consultation
                <FaCalendarCheck className="ms-2" />
              </Link>
              <Link
                to="/plots"
                className="btn btn-lg px-5 py-3"
                style={{
                  backgroundColor: "transparent",
                  color: "#243C8F",
                  border: "2px solid #243C8F",
                  borderRadius: "8px",
                  fontWeight: "600"
                }}
              >
                Browse Properties
                <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(36, 60, 143, 0.1);
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
        
        .slide-up {
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .counter-animation {
          animation: countUp 1s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .carousel-control-prev, .carousel-control-next {
          opacity: 1;
        }
        
        .carousel-control-prev .glass-card,
        .carousel-control-next .glass-card {
          background: rgba(36, 60, 143, 0.3);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .carousel-control-prev:hover .glass-card,
        .carousel-control-next:hover .glass-card {
          background: rgba(36, 60, 143, 0.5);
          transform: scale(1.1);
        }
        
        .carousel-item {
          transition: transform 1s ease, opacity 1s ease;
        }
      `}</style>
    </>
  );
}
  