import React, { useState } from "react";

export default function FacultyProfile({ facultyData }) {
  const [selectedId, setSelectedId] = useState("");

  const faculty = facultyData.find((f) => f.facultyId === selectedId);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Faculty Profile</h2>

      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">Select Faculty</option>
        {facultyData.map((f) => (
          <option key={f.facultyId} value={f.facultyId}>
            {f.facultyName}
          </option>
        ))}
      </select>

      {faculty && (
        <div
          style={{
            marginTop: "20px",
            borderRadius: "10px",
            height: "350px",
            width: "500px",
            paddingLeft: "25px",
            textAllign: "center",
            background: "linear-gradient(135deg, #292929, #8b7f7f)",
            color: "white",
            paddingTop: "10px",
            fontSize: "25px",
          }}
        >
          <h3>Details</h3>
          <p>
            <b>ID:</b> {faculty.facultyId}
          </p>
          <p>
            <b>Name:</b> {faculty.facultyName}
          </p>
          <p>
            <b>Age:</b> {faculty.age}
          </p>
          <p>
            <b>Qualification:</b> {faculty.qualification}
          </p>
          <p>
            <b>Joined At:</b> {faculty.joinedAt}
          </p>
          <p>
            <b>Status:</b> {faculty.status}
          </p>
        </div>
      )}
    </div>
  );
}
