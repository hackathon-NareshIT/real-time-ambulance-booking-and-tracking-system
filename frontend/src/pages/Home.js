import React, { useState, useEffect } from "react";
import API from "../services/api";

function Home() {
  const [userId, setUserId] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [result, setResult] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
  API.get("/hospital/all")
    .then((res) => setHospitals(res.data))
    .catch((err) => console.error(err));
}, []);
const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      alert("Location captured!");
    },
    (error) => {
      alert("Unable to fetch location");
      console.error(error);
    }
  );
};

  const bookAmbulance = async () => {
    if (!userId || !hospitalId || !lat || !lng) {
    alert("Please fill all details!");
    return;
  }
    try {
      const res = await API.post(
        `/booking/create?userId=${userId}&lat=${lat}&lng=${lng}&hospitalId=${hospitalId}`
      );
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Booking failed!");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1>🚑 Rapid Care Ambulance</h1>

      <input
        className="form-control my-2"
        placeholder="User ID"
        onChange={(e) => setUserId(e.target.value)}
      />
      Add this below User ID input

<select
  className="form-control my-2"
  onChange={(e) => setHospitalId(e.target.value)}
>
  <option value="">Select Hospital</option>

  {hospitals.map((h) => (
    <option key={h.id} value={h.id}>
      {h.name}
    </option>
  ))}
</select>
      <button 
  className="btn btn-secondary mt-2"
  onClick={getLocation}
>
  📍 Get My Location
</button>
<p>📍 Latitude: {lat}</p>
<p>📍 Longitude: {lng}</p>
      <button className="btn btn-danger mt-3" onClick={bookAmbulance}>
        🚑 Book Ambulance
      </button>

      {result && (
  <div className="mt-4">
    <h3>Booking Result:</h3>

    <p>
      Driver: {result.driver ? result.driver.name : "No Driver Available"}
    </p>

    <p>Status: {result.status}</p>

    <p>
      Hospital: {result.hospital ? result.hospital.name : "Not Assigned"}
    </p>
  </div>
)}
    </div>
  );
}

export default Home;