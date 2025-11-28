import React from "react";
import { useForm } from "react-hook-form";

export default function CourseUpdate({ updateCourse }) {
  const { register, handleSubmit } = useForm();

  // -------------------------------------------------------------
  // On form submission → update course details
  // -------------------------------------------------------------
  const onSubmit = (data) => {
    updateCourse(data.courseid, {
      name: data.coursename,
      description: data.description,
    });
    alert("Course Updated!");
  };

  // -------------------------------------------------------------
  // FULL SCREEN BACKGROUND (same as CourseRegistration)
  // -------------------------------------------------------------
  const containerStyle = {
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at center, #39373a, #c3bdc4)",
    color: "white",
  };

  // -------------------------------------------------------------
  // CARD (Enlarged, Glass Effect, Rounded, Shadow)
  // -------------------------------------------------------------
  const cardStyle = {
    width: "600px",
    background: "rgba(255,255,255,0.15)",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
  };

  // -------------------------------------------------------------
  // INPUT FIELD
  // -------------------------------------------------------------
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  // -------------------------------------------------------------
  // BUTTON
  // -------------------------------------------------------------
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

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Update Course</h2>

        {/* Update Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={inputStyle}
            {...register("courseid")}
            placeholder="Course ID"
          />

          <input
            style={inputStyle}
            {...register("coursename")}
            placeholder="New Course Name"
          />

          <textarea
            style={inputStyle}
            {...register("description")}
            placeholder="New Description"
          />

          <button style={buttonStyle}>Update</button>
        </form>
      </div>
    </div>
  );
}
