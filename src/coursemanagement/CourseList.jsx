import React from "react";

export default function CourseList({ courses }) {

  /* -----------------------------------------------------------------------
     OUTER BACKGROUND + CENTERING
     Reusing same layout theme as CourseRegistration
  ------------------------------------------------------------------------ */
  const containerStyle = {
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // Gradient background (same vibe)
    background: "radial-gradient(circle at center, #39373a, #c3bdc4)",
    color: "white",
  };

  /* -----------------------------------------------------------------------
     CARD (BOX AROUND TABLE)
     Matching size + shadow + glass effect styling from CourseRegistration
  ------------------------------------------------------------------------ */
  const cardStyle = {
    width: "600px",                        // Bigger width like registration form
    background: "rgba(255,255,255,0.15)",  // Glassy
    padding: "40px",
    borderRadius: "20px",

    backdropFilter: "blur(14px)",

    // Border + shadow for premium UI
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
  };

  /* -----------------------------------------------------------------------
     TABLE STYLING
     Larger rows + spacing + rounded corners
  ------------------------------------------------------------------------ */
  const tableStyle = {
    width: "100%",
    background: "white",
    color: "black",
    borderRadius: "12px",
    overflow: "hidden", // makes rounded corners work
    fontSize: "18px",
  };

  const thTdStyle = {
    padding: "12px 10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>All Courses</h2>

        {/* Table styled to match theme */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>ID</th>
              <th style={thTdStyle}>Name</th>
              <th style={thTdStyle}>Duration</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td style={thTdStyle}>{c.id}</td>
                <td style={thTdStyle}>{c.name}</td>
                <td style={thTdStyle}>{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
