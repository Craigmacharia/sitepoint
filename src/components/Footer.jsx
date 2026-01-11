import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="mt-5 text-white"
      style={{ backgroundColor: "#243C8F" }}
    >
      <div className="container py-5">
        <div className="row g-4">
          
          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Site Point Properties Limited</h5>
            <p className="small mt-3">
              We offer genuine, affordable land with ready title deeds in
              strategic locations across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link className="text-white text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-white text-decoration-none" to="/plots">
                  Available Plots
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-white text-decoration-none" to="/about">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link className="text-white text-decoration-none" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <ul className="list-unstyled mt-3 small">
              <li>📞 +254 7XX XXX XXX</li>
              <li className="mt-2">📧 info@sitepoint.co.ke</li>
              <li className="mt-2">📍 Nairobi, Kenya</li>
            </ul>

            <a
              href="https://wa.me/2547XXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm mt-3 text-white"
              style={{ backgroundColor: "#1AA6A6" }}
            >
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="text-center py-3 small"
        style={{ backgroundColor: "#1f3277" }}
      >
        © {new Date().getFullYear()} Site Point Properties Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
