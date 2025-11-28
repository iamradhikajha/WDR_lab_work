import React from "react";

function StudentProfile({ name, email, course, pendingFees }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>Student Profile</h3>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>C</p>
    </div>
  );
}

export default StudentProfile;
