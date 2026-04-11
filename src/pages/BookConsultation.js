import React, { useState } from "react";

function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    date: "",
    time: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Consultation Data:", formData);

    alert("Appointment booked successfully ✅");

    // Reset form
    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      date: "",
      time: "",
      problem: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "green" }}>
        📅 Book Consultation
      </h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="problem"
          placeholder="Describe your problem"
          value={formData.problem}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
        />

        <button type="submit" style={buttonStyle}>
          Book Appointment
        </button>
      </form>
    </div>
  );
}

// Styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default BookConsultation;