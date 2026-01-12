import { useParams, Link } from "react-router-dom";
import { loadPlots } from "../utils/loadPlots";

export default function PlotDetails() {
  const { slug } = useParams();
  const plots = loadPlots();

  const plot = plots.find((p) => p.slug === slug);

  if (!plot) {
    return (
      <div className="container py-5">
        <h3>Plot not found</h3>
        <Link to="/plots" className="btn btn-primary mt-3">
          Back to Plots
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/plots" className="btn btn-outline-secondary mb-4">
        ← Back to Plots
      </Link>

      <div className="row">
        <div className="col-md-6">
          <img
            src={plot.image}
            alt={plot.title}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold text-primary">{plot.title}</h2>
          <p className="text-muted">{plot.location}</p>

          <h4 className="text-success fw-bold mb-3">
            KES {plot.price}
          </h4>

          <p>{plot.description}</p>

          <a
            href="tel:+254700000000"
            className="btn btn-success mt-3"
          >
            Call to Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
