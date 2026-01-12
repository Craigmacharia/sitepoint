import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadPlots } from "../utils/loadPlots";

export default function Plots() {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    const data = loadPlots();
    setPlots(data);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary mb-4">Available Plots</h2>

      <div className="row">
        {plots.map((plot) => (
          <div className="col-md-4 mb-4" key={plot.slug}>
            <div className="card h-100 shadow-sm">
              <img
                src={plot.image}
                className="card-img-top"
                alt={plot.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title fw-bold">{plot.title}</h5>
                <p className="text-muted mb-1">{plot.location}</p>
                <p className="text-success fw-bold">
                  KES {plot.price}
                </p>

                <Link
                  to={`/plots/${plot.slug}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {plots.length === 0 && (
          <p className="text-muted">No plots available at the moment.</p>
        )}
      </div>
    </div>
  );
}
