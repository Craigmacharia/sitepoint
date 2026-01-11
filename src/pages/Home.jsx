import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO / SLIDESHOW */}
      <section className="bg-light">
        <div className="container py-5">
          <div
            id="homeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded shadow">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <img
                  src="/placeholder1.jpg"
                  className="d-block w-100"
                  alt="Land for sale"
                  style={{ height: "420px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="fw-bold">Prime Land Investments</h3>
                  <p>Secure, genuine plots in strategic locations</p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <img
                  src="/placeholder2.jpg"
                  className="d-block w-100"
                  alt="Affordable plots"
                  style={{ height: "420px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="fw-bold">Affordable & Verified Plots</h3>
                  <p>Title deeds ready – buy with confidence</p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <img
                  src="/placeholder3.jpg"
                  className="d-block w-100"
                  alt="Site visit"
                  style={{ height: "420px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="fw-bold">Book a Free Site Visit</h3>
                  <p>See the land before you invest</p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="container py-5 text-center">
        <h1 className="fw-bold" style={{ color: "#243C8F" }}>
          Site Point Properties Limited
        </h1>
        <p className="mt-3 text-muted">
          We provide genuine, affordable land with ready title deeds,
          helping you invest with confidence and peace of mind.
        </p>

        <Link
          to="/plots"
          className="btn mt-3 text-white px-4"
          style={{ backgroundColor: "#1AA6A6" }}
        >
          View Available Plots
        </Link>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#243C8F" }}>
                Genuine Title Deeds
              </h5>
              <p className="text-muted">
                All our plots come with verified and ready title deeds.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#243C8F" }}>
                Strategic Locations
              </h5>
              <p className="text-muted">
                Carefully selected areas with high growth potential.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold" style={{ color: "#243C8F" }}>
                Free Site Visits
              </h5>
              <p className="text-muted">
                Visit and inspect the land before making a decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-5">
        <h3
          className="text-center fw-bold mb-4"
          style={{ color: "#243C8F" }}
        >
          What Our Clients Say
        </h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">
                  “The process was smooth and transparent. I received my
                  title deed without delays.”
                </p>
                <h6 className="fw-bold mt-3 mb-0">— James M.</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">
                  “Affordable prices and very professional service.
                  Highly recommended.”
                </p>
                <h6 className="fw-bold mt-3 mb-0">— Sarah W.</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">
                  “They organized a site visit and explained everything
                  clearly. I’m very satisfied.”
                </p>
                <h6 className="fw-bold mt-3 mb-0">— David K.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
  