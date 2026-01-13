import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadPlots } from "../utils/loadPlots";

export default function Plots() {
  const [plots, setPlots] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setPlots(loadPlots());
  }, []);

  // Get unique locations for filter
  const locations = [...new Set(plots.map(p => p.location))];

  const filteredPlots = plots.filter(plot => {
    const matchesSearch =
      plot.title.toLowerCase().includes(search.toLowerCase()) ||
      plot.location.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || plot.location === location;

    const matchesPrice =
      price === "" ||
      (price === "low" && plot.price.replace(/,/g, "") < 500000) ||
      (price === "mid" && plot.price.replace(/,/g, "") >= 500000 && plot.price.replace(/,/g, "") <= 1500000) ||
      (price === "high" && plot.price.replace(/,/g, "") > 1500000);

    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary mb-4">Available Plots</h2>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="low">Below KES 500k</option>
            <option value="mid">KES 500k – 1.5M</option>
            <option value="high">Above KES 1.5M</option>
          </select>
        </div>
      </div>

      {/* Plots Grid */}
      <div className="row">
        {filteredPlots.length === 0 && (
          <p className="text-muted">No plots match your criteria.</p>
        )}

        {filteredPlots.map(plot => (
          <div className="col-md-4 mb-4" key={plot.slug}>
            <div className="card h-100 shadow-sm">
              <img
                src={plot.image}
                className="card-img-top"
                alt={plot.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="fw-bold">{plot.title}</h5>
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
      </div>
    </div>
  );
}
