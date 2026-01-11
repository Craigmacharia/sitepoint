import PlotCard from "../components/PlotCard";

const plotFiles = import.meta.glob("../../content/plots/*.md", {
  eager: true,
});

const plots = Object.values(plotFiles).map((file) => {
  const { attributes } = file;
  return {
    title: attributes.title,
    location: attributes.location,
    price: attributes.price.toLocaleString(),
    image: attributes.image,
    slug: attributes.title.toLowerCase().replace(/\s+/g, "-"),
  };
});

export default function Plots() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#243C8F" }}>
        Available Plots
      </h2>

      <div className="row g-4">
        {plots.map((plot, index) => (
          <div className="col-md-4" key={index}>
            <PlotCard plot={plot} />
          </div>
        ))}
      </div>
    </div>
  );
}
