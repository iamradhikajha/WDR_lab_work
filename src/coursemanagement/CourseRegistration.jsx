import React from "react";
import { useForm } from "react-hook-form";

// Receives addCourse() from parent
export default function CourseRegistration({ addCourse }) {
  const { register, handleSubmit } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    addCourse({
      id: data.courseid,
      name: data.coursename,
      description: data.description,
      duration: data.duration,
      min: data.min,
      max: data.max,
      date: data.date,
    });

    alert("Course Registered!");
  };

  /* -----------------------------------------------------------------------
     OUTER BACKGROUND + CENTERING
  ------------------------------------------------------------------------ */
  const containerStyle = {
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // Grey–white gradient background
    background: "radial-gradient(circle at center, #39373a, #c3bdc4)",
    color: "white",
  };

  /* -----------------------------------------------------------------------
     CARD (FORM BOX) — NOW BIGGER + ADDED SHADOW
  ------------------------------------------------------------------------ */
  const cardStyle = {
    width: "600px",                        // Increased width
    background: "rgba(255,255,255,0.15)",  // More visible glass effect
    padding: "40px",                       // Bigger padding
    borderRadius: "20px",

    backdropFilter: "blur(14px)",

    // Border + shadow for premium UI
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
  };

  /* -----------------------------------------------------------------------
     INPUT FIELD STYLING — Bigger inputs
  ------------------------------------------------------------------------ */
  const inputStyle = {
    width: "100%",
    padding: "14px",               // Bigger padding
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #aaa",
    fontSize: "16px",              // Larger text
  };

  /* -----------------------------------------------------------------------
     BUTTON STYLING — Bigger button
  ------------------------------------------------------------------------ */
  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "#ffffff",
    color: "#000000",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",              // Larger button text
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Course Registration
        </h2>

        {/* handleSubmit ensures react-hook-form validation */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* All fields made bigger */}
          <input
            style={inputStyle}
            {...register("courseid")}
            placeholder="Course ID"
          />

          <input
            style={inputStyle}
            {...register("coursename")}
            placeholder="Course Name"
          />

          <textarea
            style={{ ...inputStyle, height: "110px" }}
            {...register("description")}
            placeholder="Description"
          />

          <input
            style={inputStyle}
            type="number"
            {...register("duration")}
            placeholder="Duration (Hours)"
          />

          <input
            style={inputStyle}
            type="number"
            {...register("min")}
            placeholder="Min Enrollment"
          />

          <input
            style={inputStyle}
            type="number"
            {...register("max")}
            placeholder="Max Enrollment"
          />

          <input
            style={inputStyle}
            type="date"
            {...register("date")}
          />

          <button style={buttonStyle}>Register</button>
        </form>
      </div>
    </div>
  );
}
