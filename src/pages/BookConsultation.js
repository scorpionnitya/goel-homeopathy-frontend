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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://goel-homeopathy-backend-production.up.railway.app/api/consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      alert(data.message);

      setFormData({
        name: "",
        age: "",
        gender: "",
        phone: "",
        date: "",
        time: "",
        problem: "",
      });

    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="age" onChange={handleChange} />
      <input name="phone" onChange={handleChange} />
      <input name="date" onChange={handleChange} />
      <input name="time" onChange={handleChange} />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookConsultation;