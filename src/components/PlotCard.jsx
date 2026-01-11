import { Link } from "react-router-dom";

export default function PlotCard({ plot }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={plot.image}
        className="card-img-top"
        alt={plot.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold" style={{ color: "#243C8F" }}>
          {plot.title}
        </h5>

        <p className="card-text small text-muted mb-2">
          📍 {plot.location}
        </p>

        <p className="fw-bold text-success mb-3">
          KES {plot.price}
        </p>

        <Link
          to={`/plots/${plot.slug}`}
          className="btn btn-sm mt-auto text-white"
          style={{ backgroundColor: "#1AA6A6" }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
