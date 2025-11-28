import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CourseDetails({ courses }) {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState(null);

  // ---------------------------------------------------------------
  // On form submit → find course by id
  // ---------------------------------------------------------------
  const onSubmit = (data) => {
    const result = courses.find((c) => c.id === data.courseid);
    setInfo(result || "NOT_FOUND");
  };

  // ---------------------------------------------------------------
  // OUTER CONTAINER (same gradient + centering as CourseRegistration)
  // ---------------------------------------------------------------
  const containerStyle = {
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at center, #39373a, #c3bdc4)",
    color: "white",
  };

  // ---------------------------------------------------------------
  // CARD BOX (glass effect + bigger size + shadow)
  // ---------------------------------------------------------------
  const cardStyle = {
    width: "600px",
    background: "rgba(255,255,255,0.15)",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
  };

  // ---------------------------------------------------------------
  // INPUT
  // ---------------------------------------------------------------
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  // ---------------------------------------------------------------
  // BUTTON
  // ---------------------------------------------------------------
  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "#ffffff",
    color: "#000000",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  // ---------------------------------------------------------------
  // DETAILS BOX STYLE
  // ---------------------------------------------------------------
  const detailsBoxStyle = {
    marginTop: "20px",
    background: "rgba(255,255,255,0.2)",
    padding: "20px",
    borderRadius: "12px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Course Details</h2>

        {/* Search Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={inputStyle}
            {...register("courseid")}
            placeholder="Enter Course ID"
          />
          <button style={buttonStyle}>Get Details</button>
        </form>

        {/* Display result when found */}
        {info && info !== "NOT_FOUND" && (
          <div style={detailsBoxStyle}>
            <p><b>Name:</b> {info.name}</p>
            <p><b>Description:</b> {info.description}</p>
            <p><b>Duration:</b> {info.duration}</p>
            <p><b>Min Enrollment:</b> {info.min}</p>
            <p><b>Max Enrollment:</b> {info.max}</p>
            <p><b>Date:</b> {info.date}</p>
          </div>
        )}

        {/* Display when NOT_FOUND */}
        {info === "NOT_FOUND" && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>No Course Found</p>
        )}
      </div>
    </div>
  );
}
