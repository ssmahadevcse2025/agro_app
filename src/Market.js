import { useEffect, useState } from "react";

function Market() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // 🔴 Replace with your backend URL
  const API = "https://your-backend.onrender.com";

  useEffect(() => {
    fetch(`${API}/api/crops`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(() => {
        // fallback demo data
        setData([
          {
            name: "Rice",
            price: 2500,
            status: "Stable",
          },
          {
            name: "Wheat",
            price: 1800,
            status: "Increased",
          },
          {
            name: "Cotton",
            price: 3200,
            status: "High Demand",
          },
          {
            name: "Maize",
            price: 2100,
            status: "Moderate",
          },
        ]);
      });
  }, []);

  // 🔍 FILTER DATA
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      {/* HEADER */}
      <div className="text-center mb-5">

        <h2 className="text-success">
          Market Information Dashboard
        </h2>

        <p className="text-muted">
          Search and monitor agricultural market prices
        </p>

      </div>

      {/* SEARCH INPUT */}
      <div className="card shadow border-0 p-4">

        <h4 className="text-success">
          Search Crop
        </h4>

        <hr />

        <input
          type="text"
          className="form-control mt-3"
          placeholder="Enter crop name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* DASHBOARD RESULTS */}
      <div className="card shadow border-0 mt-5 p-4">

        <div className="d-flex justify-content-between align-items-center">

          <h4 className="text-success">
            Market Results
          </h4>

          <span className="badge bg-success">
            {filteredData.length} Results
          </span>

        </div>

        <hr />

        {/* TABLE HEADER */}
        <div className="row fw-bold text-success mb-3">

          <div className="col-4">
            Crop Name
          </div>

          <div className="col-4">
            Price
          </div>

          <div className="col-4">
            Status
          </div>

        </div>

        <hr />

        {/* FILTERED RESULTS */}
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <div key={i}>

              <div className="row py-3">

                <div className="col-4">
                  {item.name}
                </div>

                <div className="col-4">
                  ₹{item.price}
                </div>

                <div className="col-4">
                  {item.status}
                </div>

              </div>

              <hr />

            </div>
          ))
        ) : (
          <p className="text-muted mt-3">
            No crop data found
          </p>
        )}

      </div>

      {/* INFORMATION SECTION */}
      <div className="card shadow border-0 mt-5 p-4 mb-5">

        <h4 className="text-success">
          Agricultural Market Information
        </h4>

        <hr />

        <p className="text-muted">
          This dashboard provides crop market
          information based on user search input.
          Users can search crop names and view
          price details and market status.
        </p>

      </div>

    </div>
  );
}

export default Market;