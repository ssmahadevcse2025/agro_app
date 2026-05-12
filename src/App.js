import { Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Weather from "./Weather";
import Crop from "./Crop";
import Market from "./Market";

function App() {
  const [marketData, setMarketData] = useState([]);

  // 🔴 Replace with your backend URL
  const API = "https://your-backend.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/crops`)
      .then((res) => res.json())
      .then((data) => setMarketData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-light min-vh-100">

      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
        className="d-flex align-items-center justify-content-center text-white text-center"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h1>Agriculture Information Portal</h1>

          <p className="mt-3">
            Weather • Crop Advisory • Market Analytics
          </p>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">

        <div className="container justify-content-center">

          <NavLink
            to="/"
            className="nav-link text-white mx-3"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/weather"
            className="nav-link text-white mx-3"
          >
            Weather
          </NavLink>

          <NavLink
            to="/crop"
            className="nav-link text-white mx-3"
          >
            Crop Advisory
          </NavLink>

          <NavLink
            to="/market"
            className="nav-link text-white mx-3"
          >
            Market Prices
          </NavLink>

        </div>

      </nav>

      {/* ROUTES */}
      <Routes>

        {/* DASHBOARD */}
        <Route
          path="/"
          element={
            <div className="container mt-5">

              {/* STATISTICS */}
              <div className="row g-4">

                <div className="col-md-3">
                  <div className="card shadow border-0 p-4 text-center">
                    <h5>Total Crops</h5>
                    <h2 className="text-success">25</h2>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card shadow border-0 p-4 text-center">
                    <h5>Market Updates</h5>
                    <h2 className="text-primary">12</h2>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card shadow border-0 p-4 text-center">
                    <h5>Weather Alerts</h5>
                    <h2 className="text-danger">3</h2>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card shadow border-0 p-4 text-center">
                    <h5>Active Farmers</h5>
                    <h2 className="text-warning">150+</h2>
                  </div>
                </div>

              </div>

              {/* QUICK ACCESS */}
              <div className="row mt-5 g-4">

                {/* WEATHER */}
                <div className="col-md-4">

                  <div className="card shadow-lg border-0 h-100">

                    <img
                      src="https://images.unsplash.com/photo-1499346030926-9a72daac6c63"
                      alt="weather"
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">

                      <h5>🌦 Weather Services</h5>

                      <p className="text-muted">
                        Access current weather updates
                        using location-based services.
                      </p>

                      <NavLink
                        to="/weather"
                        className="btn btn-success"
                      >
                        Open Weather
                      </NavLink>

                    </div>

                  </div>

                </div>

                {/* CROP */}
                <div className="col-md-4">

                  <div className="card shadow-lg border-0 h-100">

                    <img
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                      alt="crop"
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">

                      <h5>🌾 Crop Advisory</h5>

                      <p className="text-muted">
                        View seasonal crop guidance
                        and agricultural recommendations.
                      </p>

                      <NavLink
                        to="/crop"
                        className="btn btn-success"
                      >
                        Open Crop Advisory
                      </NavLink>

                    </div>

                  </div>

                </div>

                {/* MARKET */}
                <div className="col-md-4">

                  <div className="card shadow-lg border-0 h-100">

                    <img
                      src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
                      alt="market"
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">

                      <h5>📊 Market Prices</h5>

                      <p className="text-muted">
                        Monitor crop market prices
                        and analytics dashboard.
                      </p>

                      <NavLink
                        to="/market"
                        className="btn btn-success"
                      >
                        Open Market
                      </NavLink>

                    </div>

                  </div>

                </div>

              </div>

              {/* MARKET OVERVIEW */}
              <div className="card shadow border-0 mt-5 p-4">

                <div className="d-flex justify-content-between">

                  <h4 className="text-success">
                    Market Price Overview
                  </h4>

                  <NavLink
                    to="/market"
                    className="btn btn-success"
                  >
                    View All
                  </NavLink>

                </div>

                <div className="mt-4">

                  {marketData.length > 0 ? (
                    marketData.slice(0, 5).map((item, i) => (
                      <div
                        key={i}
                        className="d-flex justify-content-between border-bottom py-3"
                      >
                        <span>{item.name}</span>

                        <strong>
                          ₹{item.price}
                        </strong>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted">
                      Loading market data...
                    </p>
                  )}

                </div>

              </div>

              {/* WEATHER SUMMARY */}
              <div className="card shadow border-0 mt-5 p-4">

                <h4 className="text-success">
                  Weather Summary
                </h4>

                <div className="row mt-4">

                  <div className="col-md-4 text-center">
                    <h5>Temperature</h5>
                    <p>32°C</p>
                  </div>

                  <div className="col-md-4 text-center">
                    <h5>Humidity</h5>
                    <p>70%</p>
                  </div>

                  <div className="col-md-4 text-center">
                    <h5>Condition</h5>
                    <p>Cloudy</p>
                  </div>

                </div>

              </div>

              {/* LATEST UPDATES */}
              <div className="card shadow border-0 mt-5 p-4">

                <h4 className="text-success">
                  Latest Agricultural Updates
                </h4>

                <ul className="mt-4">

                  <li>
                    Rice market prices increased this week.
                  </li>

                  <li>
                    Rainfall expected in southern districts.
                  </li>

                  <li>
                    Summer crop cultivation guidance updated.
                  </li>

                  <li>
                    Farmer awareness programs are active.
                  </li>

                </ul>

              </div>

              {/* IMAGE GALLERY */}
              <div className="row mt-5 g-4">

                <div className="col-md-4">

                  <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                    alt="farm"
                    className="img-fluid rounded shadow"
                  />

                </div>

                <div className="col-md-4">

                  <img
                    src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
                    alt="field"
                    className="img-fluid rounded shadow"
                  />

                </div>

                <div className="col-md-4">

                  <img
                    src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0"
                    alt="agriculture"
                    className="img-fluid rounded shadow"
                  />

                </div>

              </div>

            </div>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/crop" element={<Crop />} />
        <Route path="/market" element={<Market />} />

      </Routes>

      {/* FOOTER */}
      <footer className="bg-success text-white text-center py-4 mt-5">

        <small>
          Agriculture Information Portal • Educational Demonstration Project
        </small>

      </footer>

    </div>
  );
}

export default App;