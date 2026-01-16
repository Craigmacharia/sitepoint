import { useParams, Link } from "react-router-dom";
import { loadPlots } from "../utils/loadPlots";
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaRulerCombined, 
  FaPhone, 
  FaWhatsapp, 
  FaCalendarAlt,
  FaCheckCircle,
  FaHome,
  FaShieldAlt,
  FaCar
} from "react-icons/fa";

export default function PlotDetails() {
  const { slug } = useParams();
  const plots = loadPlots();
  const plot = plots.find((p) => p.slug === slug);

  if (!plot) {
    return (
      <div className="container py-5 text-center fade-in">
        <div className="empty-state py-5">
          <div className="display-1 mb-4" style={{ color: "#243C8F", opacity: 0.5 }}>404</div>
          <h3 className="fw-bold mb-3" style={{ color: "#243C8F" }}>Plot Not Found</h3>
          <p className="text-muted mb-4">The property you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/plots" 
            className="btn px-4 py-2"
            style={{
              backgroundColor: "#1AA6A6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600"
            }}
          >
            <FaArrowLeft className="me-2" />
            Back to Available Plots
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Back Button */}
      <div className="mb-4 fade-in">
        <Link 
          to="/plots" 
          className="btn d-inline-flex align-items-center"
          style={{
            backgroundColor: "rgba(36, 60, 143, 0.1)",
            color: "#243C8F",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            transition: "all 0.3s ease"
          }}
        >
          <FaArrowLeft className="me-2" />
          Back to Properties
        </Link>
      </div>

      <div className="row g-5 fade-in" style={{ animationDelay: "0.1s" }}>
        {/* Image Gallery */}
        <div className="col-lg-7">
          <div className="glass-card rounded-3 overflow-hidden shadow-sm">
            <img
              src={plot.image}
              alt={plot.title}
              className="img-fluid w-100"
              style={{ 
                height: "450px", 
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div style="
                    background: linear-gradient(135deg, #243C8F 0%, #1AA6A6 100%);
                    width: 100%;
                    height: 450px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    padding: 20px;
                    text-align: center;
                  ">
                    <div style="font-size: 4rem; margin-bottom: 20px;">🏡</div>
                    <div style="font-size: 1.8rem; font-weight: 600; margin-bottom: 10px;">${plot.title}</div>
                    <div style="font-size: 1.2rem; opacity: 0.9;">${plot.location}</div>
                  </div>
                `;
              }}
            />
          </div>
        </div>

        {/* Property Details */}
        <div className="col-lg-5">
          <div className="glass-card p-4 rounded-3 shadow-sm">
            {/* Title and Location */}
            <div className="mb-4">
              <h1 className="fw-bold mb-2" style={{ color: "#243C8F", fontSize: "2rem" }}>
                {plot.title}
              </h1>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt style={{ color: "#1AA6A6" }} className="me-2" />
                <span style={{ color: "#666", fontSize: "1.1rem" }}>{plot.location}</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 p-3 rounded-3" style={{ backgroundColor: "rgba(26, 166, 166, 0.1)" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="small text-muted">PRICE</div>
                  <h2 className="fw-bold mb-0" style={{ color: "#1AA6A6" }}>
                    KES {plot.price}
                  </h2>
                </div>
                <FaMoneyBillWave size={32} style={{ color: "#1AA6A6", opacity: 0.7 }} />
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-4">
              <h5 className="fw-bold mb-3" style={{ color: "#243C8F" }}>Key Features</h5>
              <div className="row g-3">
                {[
                  { icon: FaRulerCombined, label: "Plot Size", value: plot.size || "1/8 Acre" },
                  { icon: FaHome, label: "Property Type", value: "Residential Land" },
                  { icon: FaShieldAlt, label: "Title Deed", value: "Ready" },
                  { icon: FaCar, label: "Access Road", value: "Paved" },
                  { icon: FaCalendarAlt, label: "Availability", value: "Immediate" },
                  { icon: FaCheckCircle, label: "Status", value: "Available" }
                ].map((feature, index) => (
                  <div className="col-6" key={index}>
                    <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: "rgba(36, 60, 143, 0.05)" }}>
                      <feature.icon className="me-3" style={{ color: "#1AA6A6" }} />
                      <div>
                        <div className="small text-muted">{feature.label}</div>
                        <div className="fw-semibold" style={{ color: "#243C8F" }}>{feature.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <h5 className="fw-bold mb-3" style={{ color: "#243C8F" }}>Property Description</h5>
              <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(36, 60, 143, 0.03)" }}>
                <p style={{ color: "#555", lineHeight: "1.7", margin: 0 }}>
                  {plot.description || "Prime property with excellent investment potential. This plot comes with a ready title deed and is located in a rapidly developing area with all necessary amenities nearby. The land is fully surveyed and has proper beacons for easy identification."}
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="d-flex flex-column gap-3 mt-4">
              <a
                href={`tel:+2547XXXXXXXX`}
                className="btn d-flex align-items-center justify-content-center py-3"
                style={{
                  backgroundColor: "#243C8F",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                <FaPhone className="me-2" />
                Call to Inquire
              </a>
              
              <a
                href={`https://wa.me/2547XXXXXXXX?text=Hi, I'm interested in ${plot.title} in ${plot.location}`}
                target="_blank"
                rel="noreferrer"
                className="btn d-flex align-items-center justify-content-center py-3"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                <FaWhatsapp className="me-2" />
                WhatsApp Inquiry
              </a>
              
              <Link
                to="/contact"
                className="btn d-flex align-items-center justify-content-center py-3"
                style={{
                  backgroundColor: "transparent",
                  color: "#243C8F",
                  border: "2px solid #243C8F",
                  borderRadius: "8px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                <FaCalendarAlt className="me-2" />
                Book Site Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="fade-in" style={{ animationDelay: "0.2s" }}>
        {/* Amenities & Features */}
        <div className="glass-card p-4 rounded-3 shadow-sm mt-5">
          <h4 className="fw-bold mb-4" style={{ color: "#243C8F" }}>Property Features & Amenities</h4>
          <div className="row g-3">
            {[
              "Ready Title Deed", "Surveyed & Beacons", "Access Road", 
              "Water Availability", "Electricity Nearby", "Security",
              "Good Drainage", "Strategic Location", "Investment Potential",
              "Quiet Neighborhood", "Clear View", "No Liens"
            ].map((amenity, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="d-flex align-items-center p-3 rounded-3" style={{ backgroundColor: "rgba(36, 60, 143, 0.05)" }}>
                  <FaCheckCircle className="me-3" style={{ color: "#1AA6A6" }} />
                  <span style={{ color: "#333" }}>{amenity}</span>
                </div>
              </div>
            ))}
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
          transition: all 0.3s ease;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .empty-state {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Hover effect for image */
        .glass-card img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}