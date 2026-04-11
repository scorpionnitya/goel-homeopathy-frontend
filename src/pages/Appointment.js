import { useState } from "react";

function Appointment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [problem, setProblem] = useState("");

 function submitAppointment(e) {
  e.preventDefault();

  const phoneNumber = "919837100364"; // <-- apna WhatsApp number yahan daalo

  const message = `Hello Doctor,%0A
I want to book an appointment.%0A%0A
Name: ${name}%0A
Phone: ${phone}%0A
Date: ${date}%0A
Time: ${time}%0A
Problem: ${problem}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappUrl, "_blank");
}


  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h1>📅 Book Appointment</h1>
      <p>Please fill the details to book your consultation.</p>

      <form
        onSubmit={submitAppointment}
        style={{ display: "grid", gap: "12px", marginTop: "20px" }}
      >
        <input
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe your problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />

        <button
          style={{
            background: "#2e7d32",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;
