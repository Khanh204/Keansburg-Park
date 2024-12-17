function About() {
  return (
    <section className="position-relative min-vh-100 overflow-hidden bg-white">
      {/* Green background shape */}
      <div
        className="position-absolute top-0 start-0 h-100 w-45 bg-success"
        style={{ width: "30%" }}
      ></div>

      {/* Main content container */}
      <div className="position-relative container-fluid d-flex align-items-center justify-content-between py-5">
        {/* Left image */}
        <div
          className="position-relative"
          style={{ width: "45%", height: "600px" }}
        >
          <img
            src="https://www.vickerypediatrics.com/wp-content/uploads/2018/07/child-swimming-safely.jpg"
            alt="Child smiling at pool"
            className="p-4 img-fluid h-100 w-100 object-fit-cover"
          />
        </div>
        {/* Center image with shadow */}
        <div className="p-3 position-relative" style={{ width: "30%" }}>
          <div
            className="overflow-hidden rounded shadow-lg"
            style={{ width: "100%", height: "300px" }}
          >
            <img
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ff83bad440975dc9ac080558/billionphotos-1857502.jpg"
              alt="Child on pool float"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        {/* Right content */}
        <div className="flex-column" style={{ width: "25%" }}>
          <h2 className="fs-1 fw-normal mb-3">
            Summer Waves <span className="fw-bold">Water Park</span>
          </h2>
          <p className="text-muted mb-4">
            Nature's Revenge stands 40 feet tall, and boasts two fierce slides:
            The Hurricane and The Tornado. Each slide twists and turns, sending
            riders into a spiral before dropping them off with a splash in the
            catch pool.
          </p>
         
        </div>
      </div>
    </section>
  );
}

export default About;
