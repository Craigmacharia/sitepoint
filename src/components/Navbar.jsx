import { Link, NavLink } from "react-router-dom";
import logo from "/stpt.jpg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: scrolled 
          ? "rgba(36, 60, 143, 0.98)" 
          : "rgba(36, 60, 143, 0.95)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: scrolled 
          ? "0 4px 30px rgba(0, 0, 0, 0.15)" 
          : "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
      }}
    >
      <div className="container">
        {/* Enhanced Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Site Point Properties Limited"
            height="52"
            className="me-2"
            style={{
              filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))",
              transition: "all 0.3s ease",
            }}
          />
          <span 
            className="d-none d-md-inline fw-semibold"
            style={{
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
              color: "rgba(255, 255, 255, 0.95)"
            }}
          >
            Site Point Properties
          </span>
        </Link>

        {/* Mobile Toggle - Improved */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sitepointNavbar"
          aria-controls="sitepointNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enhanced Navigation Links */}
        <div className="collapse navbar-collapse" id="sitepointNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 align-items-center">
            <li className="nav-item">
              <NavLink
                className="nav-link position-relative px-3 py-2"
                to="/"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                })}
              >
                Home
                <span className="nav-link-underline"></span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link position-relative px-3 py-2"
                to="/plots"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                })}
              >
                Available Plots
                <span className="nav-link-underline"></span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link position-relative px-3 py-2"
                to="/about"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                })}
              >
                About Us
                <span className="nav-link-underline"></span>
              </NavLink>
            </li>

            <li className="nav-item ms-lg-2">
              <NavLink
                className="btn px-4 py-2 fw-semibold position-relative overflow-hidden"
                to="/contact"
                style={{
                  backgroundColor: "#1AA6A6",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(26, 166, 166, 0.3)",
                }}
              >
                <span className="position-relative z-1">Book a Visit</span>
                <span className="btn-hover-overlay"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Add CSS for hover effects */}
      <style jsx>{`
        .nav-link {
          position: relative;
        }
        
        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 70%;
          height: 2px;
          background-color: #1AA6A6;
          border-radius: 1px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.08);
        }
        
        .nav-link:hover .nav-link-underline,
        .nav-link.active .nav-link-underline {
          opacity: 1;
          transform: translateX(-50%) scaleX(1);
        }
        
        .btn-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 166, 166, 0.4) !important;
        }
        
        .btn:hover .btn-hover-overlay {
          transform: translateX(100%);
        }
        
        .navbar-toggler:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
        
        /* Active state styling */
        .nav-link.active {
          background-color: rgba(26, 166, 166, 0.15);
        }
        
        /* Ensure content doesn't get hidden */
        body {
          padding-top: 0 !important;
        }
      `}</style>
    </nav>
  );
}