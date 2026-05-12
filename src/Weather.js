import { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔴 Replace with your real API key
  const API_KEY = "972a7e855e478dc36901c88e2248c52a";

  const getWeather = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );

          if (!res.ok) {
            throw new Error("API error");
          }

          const data = await res.json();
          setWeather(data);
        } catch (err) {
          console.error(err);
          alert("Error fetching weather data");
        }

        setLoading(false);
      },
      (error) => {
        console.error(error);
        alert("Location permission denied or unavailable");
        setLoading(false);
      }
    );
  };

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-success">Weather Information</h3>

      <p className="text-muted">
        Click below to get weather using your current location
      </p>

      <button className="btn btn-success mt-3" onClick={getWeather}>
        Get Current Weather
      </button>

      {loading && <p className="mt-3">Loading...</p>}

      {/* ✅ SAFE RENDERING (FIXED ERROR) */}
      {weather && (
        <div className="card mt-4 p-3 shadow-sm">
          <h5>{weather?.name}</h5>
          <p>Temperature: {weather?.main?.temp}°C</p>
          <p>Condition: {weather?.weather?.[0]?.main}</p>
          <p>Humidity: {weather?.main?.humidity}%</p>
          <p>Wind Speed: {weather?.wind?.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
