import { useState } from "react";

function Crop() {
  const [season, setSeason] = useState("");
  const [result, setResult] = useState("");

  const getCrops = () => {
    if (season.toLowerCase() === "summer") {
      setResult("Rice, Maize, Cotton");
    } else if (season.toLowerCase() === "winter") {
      setResult("Wheat, Barley, Mustard");
    } else if (season.toLowerCase() === "rainy") {
      setResult("Paddy, Sugarcane");
    } else {
      setResult("No data available");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-success text-center">Crop Advisory</h3>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter season"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
      />

      <button className="btn btn-success mt-3" onClick={getCrops}>
        Submit
      </button>

      <p className="mt-4">
        <strong>Recommended Crops:</strong> {result}
      </p>
    </div>
  );
}

export default Crop;
