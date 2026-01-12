import PlotCard from "../components/PlotCard";
import { loadPlots } from "../utils/loadPlots";

const plots = loadPlots();

export default function Plots() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#243C8F" }}>
        Available Plots
      </h2>

      <div className="row g-4">
        {plots.map((plot) => (
          <div className="col-md-4" key={plot.slug}>
            <PlotCard plot={plot} />
          </div>
        ))}
      </div>
    </div>
  );
}
