import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadPlots } from "../utils/loadPlots";
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaExpand, 
  FaFilter,
  FaEye,
  FaWhatsapp,
  FaBed,
  FaBath,
  FaRulerCombined
} from "react-icons/fa";

export default function Plots() {
  const [plots, setPlots] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setPlots(loadPlots());
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Get unique locations for filter
  const locations = [...new Set(plots.map(p => p.location))];

  // Sample plot data structure for fallback
  const samplePlots = [
    {
      slug: "plot-1",
      title: "Prime Land in Karen",
      location: "Karen, Nairobi",
      price: "2,500,000",
      size: "1/8 Acre",
      description: "Beautiful residential plot with ready title deeds and all amenities nearby.",
      image: "/api/placeholder/400/250" // Placeholder URL
    },
    {
      slug: "plot-2",
      title: "Commercial Plot Ruaka",
      location: "Ruaka, Kiambu",
      price: "4,800,000",
      size: "1/4 Acre",
      description: "Perfect for commercial development with high visibility and accessibility.",
      image: "/api/placeholder/400/250"
    },
    {
      slug: "plot-3",
      title: "Suburban Plot Athi River",
      location: "Athi River, Machakos",
      price: "850,000",
      size: "1/8 Acre",
      description: "Affordable plot in growing area with excellent investment potential.",
      image: "/api/placeholder/400/250"
    }
  ];

  // Use sample plots if no plots are loaded
  const displayPlots = plots.length > 0 ? plots : samplePlots;

  const filteredPlots = displayPlots.filter(plot => {
    const matchesSearch =
      plot.title.toLowerCase().includes(search.toLowerCase()) ||
      plot.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || plot.location === location;

    const priceNum = parseFloat(plot.price.replace(/,/g, "")) || 0;
    const matchesPrice =
      price === "" ||
      (price === "low" && priceNum < 500000) ||
      (price === "mid" && priceNum >= 500000 && priceNum <= 1500000) ||
      (price === "high" && priceNum > 1500000);

    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5 fade-in">
        <h2 
          className="fw-bold mb-3"
          style={{ 
            color: "#243C8F",
            fontSize: "2.5rem",
            letterSpacing: "-0.5px"
          }}
        >
          Available Properties
        </h2>
        <p className="text-muted lead" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Discover prime land opportunities with ready title deeds across Kenya
        </p>
      </div>

      {/* Filters Section */}
      <div className="glass-card mb-5 slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0" style={{ color: "#243C8F" }}>
              <FaFilter className="me-2" />
              Filter Properties
            </h5>
            <button
              className="btn btn-sm d-lg-none"
              onClick={() => setShowFilters(!showFilters)}
              style={{
                backgroundColor: "rgba(36, 60, 143, 0.1)",
                color: "#243C8F",
                border: "none"
              }}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <div className={`row g-3 ${showFilters ? 'd-flex' : 'd-none d-lg-flex'}`}>
            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FaSearch style={{ color: "#1AA6A6" }} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search by title or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ 
                    borderColor: "#dee2e6",
                    borderRadius: "0 8px 8px 0"
                  }}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FaMapMarkerAlt style={{ color: "#1AA6A6" }} />
                </span>
                <select
                  className="form-select border-start-0"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ 
                    borderColor: "#dee2e6",
                    borderRadius: "0 8px 8px 0"
                  }}
                >
                  <option value="">All Locations</option>
                  {locations.map((loc, i) => (
                    <option key={i} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FaMoneyBillWave style={{ color: "#1AA6A6" }} />
                </span>
                <select
                  className="form-select border-start-0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{ 
                    borderColor: "#dee2e6",
                    borderRadius: "0 8px 8px 0"
                  }}
                >
                  <option value="">All Price Ranges</option>
                  <option value="low">Below KES 500k</option>
                  <option value="mid">KES 500k – 1.5M</option>
                  <option value="high">Above KES 1.5M</option>
                </select>
              </div>
            </div>

            {/* Reset Filters Button */}
            <div className="col-12 text-center mt-3">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setSearch("");
                  setLocation("");
                  setPrice("");
                }}
                style={{
                  backgroundColor: "transparent",
                  color: "#243C8F",
                  border: "1px solid #243C8F"
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 fade-in" style={{ animationDelay: "0.2s" }}>
        <p className="text-muted">
          Showing <span className="fw-bold" style={{ color: "#243C8F" }}>{filteredPlots.length}</span> of{" "}
          <span className="fw-bold" style={{ color: "#243C8F" }}>{displayPlots.length}</span> properties
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border" style={{ color: "#1AA6A6" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading available properties...</p>
        </div>
      )}

      {/* Plots Grid */}
      <div className="row g-4">
        {!loading && filteredPlots.length === 0 && (
          <div className="col-12 text-center py-5 fade-in">
            <div className="empty-state">
              <FaSearch size={48} className="text-muted mb-3" />
              <h5 className="text-muted">No properties found</h5>
              <p className="text-muted">Try adjusting your search criteria</p>
            </div>
          </div>
        )}

        {!loading && filteredPlots.map((plot, index) => (
          <div 
            className="col-lg-4 col-md-6 mb-4" 
            key={plot.slug}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="plot-card card h-100 border-0 shadow-sm slide-up">
              {/* Image with Overlay */}
              <div className="plot-image position-relative overflow-hidden">
                <div 
                  className="card-img-top bg-gradient"
                  style={{ 
                    height: "250px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500"
                  }}
                >
                  {plot.image && plot.image.startsWith('/') ? (
                    <img
                      src={plot.image}
                      alt={plot.title}
                      style={{ 
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease"
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div style="
                            background: linear-gradient(135deg, #243C8F 0%, #1AA6A6 100%);
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            padding: 20px;
                            text-align: center;
                          ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🏡</div>
                            <div style="font-weight: 600; margin-bottom: 5px;">${plot.title}</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">${plot.location}</div>
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div style={{
                      background: "linear-gradient(135deg, #243C8F 0%, #1AA6A6 100%)",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      padding: "20px",
                      textAlign: "center"
                    }}>
                      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🏡</div>
                      <div style={{ fontWeight: "600", marginBottom: "5px" }}>{plot.title}</div>
                      <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>{plot.location}</div>
                    </div>
                  )}
                </div>
                <div className="plot-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div className="overlay-content text-center">
                    <Link
                      to={`/plots/${plot.slug}`}
                      className="btn btn-sm mb-2"
                      style={{
                        backgroundColor: "#1AA6A6",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        transform: "translateY(20px)",
                        opacity: 0,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <FaEye className="me-1" />
                      Quick View
                    </Link>
                    <div className="d-flex gap-2">
                      <span className="badge bg-white text-dark">Featured</span>
                      {plot.size && (
                        <span className="badge" style={{ backgroundColor: "rgba(36, 60, 143, 0.9)", color: "white" }}>
                          <FaRulerCombined className="me-1" size={10} />
                          {plot.size}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* Price Tag */}
                <div 
                  className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded"
                  style={{
                    backgroundColor: "rgba(26, 166, 166, 0.95)",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  KES {plot.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <div className="mb-2">
                  <span 
                    className="badge mb-2"
                    style={{ 
                      backgroundColor: "rgba(36, 60, 143, 0.1)",
                      color: "#243C8F",
                      padding: "0.5rem 0.75rem"
                    }}
                  >
                    <FaMapMarkerAlt className="me-1" size={12} />
                    {plot.location}
                  </span>
                </div>
                
                <h5 className="fw-bold mb-2" style={{ color: "#243C8F", fontSize: "1.1rem" }}>
                  {plot.title}
                </h5>
                
                <p className="text-muted small mb-3 flex-grow-1">
                  {plot.description ? (plot.description.substring(0, 100) + (plot.description.length > 100 ? "..." : "")) : "Prime property with excellent investment potential..."}
                </p>

                {/* Property Features */}
                <div className="d-flex justify-content-between small mb-3 text-muted">
                  <div className="d-flex align-items-center">
                    <FaRulerCombined className="me-1" size={14} />
                    <span>{plot.size || "1/8 Acre"}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div style={{ width: "12px", height: "12px", backgroundColor: "#1AA6A6", borderRadius: "2px", marginRight: "5px" }}></div>
                    <span>Ready Title</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <Link
                    to={`/plots/${plot.slug}`}
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#243C8F",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      transition: "all 0.3s ease",
                      borderRadius: "6px"
                    }}
                  >
                    View Details
                  </Link>
                  
                  <a
                    href={`https://wa.me/2547XXXXXXXX?text=Hi, I'm interested in ${plot.title} in ${plot.location}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px"
                    }}
                  >
                    <FaWhatsapp className="me-1" />
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      {!loading && filteredPlots.length > 0 && (
        <div className="mt-5 pt-4 border-top fade-in">
          <div className="text-center">
            <h5 className="fw-bold mb-3" style={{ color: "#243C8F" }}>
              Can't find what you're looking for?
            </h5>
            <p className="text-muted mb-4">
              Contact us directly for more personalized property recommendations
            </p>
            <Link
              to="/contact"
              className="btn px-4 py-2"
              style={{
                backgroundColor: "#1AA6A6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600"
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(36, 60, 143, 0.1);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(36, 60, 143, 0.08);
        }
        
        .plot-card {
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
        }
        
        .plot-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(36, 60, 143, 0.15);
        }
        
        .plot-card:hover .card-img-top img {
          transform: scale(1.05);
        }
        
        .plot-image {
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }
        
        .plot-overlay {
          background: rgba(36, 60, 143, 0.7);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .plot-card:hover .plot-overlay {
          opacity: 1;
        }
        
        .plot-card:hover .plot-overlay .btn {
          transform: translateY(0);
          opacity: 1;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        
        .slide-up {
          animation: slideUp 0.5s ease forwards;
        }
        
        .empty-state {
          padding: 3rem;
          background: rgba(248, 249, 250, 0.5);
          border-radius: 12px;
          border: 2px dashed #dee2e6;
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}