import React from "react";
import { useForm } from "react-hook-form";

export default function CourseDelete({ deleteCourse }) {
  const { register, handleSubmit } = useForm();

  // -------------------------------------------------------------
  // When form is submitted → delete the selected course
  // -------------------------------------------------------------
  const onSubmit = (data) => {
    deleteCourse(data.courseid);
    alert("Course Deleted");
  };

  // -------------------------------------------------------------
  // FULL SCREEN BACKGROUND (same grey–white gradient theme)
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
  // CARD (bigger, centered, glass effect, shadow)
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
  // INPUT FIELD STYLE
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
  // DELETE BUTTON STYLE
  // -------------------------------------------------------------
  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "#white",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Delete Course</h2>

        {/* Delete Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={inputStyle}
            {...register("courseid")}
            placeholder="Enter Course ID"
          />

          <button style={buttonStyle}>Delete</button>
        </form>
      </div>
    </div>
  );
}
