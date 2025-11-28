import React from "react";

export default function FacultyList({ facultyData }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAllign: "center" }}>Faculty List</h2>

      {facultyData.length === 0 ? (
        <p>No faculty added yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            background: "linear-gradient(135deg, #0b0606, #000000)",
            color: "white",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Qualification</th>
              <th>Joined At</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {facultyData.map((f, index) => (
              <tr key={index}>
                <td>{f.facultyId}</td>
                <td>{f.facultyName}</td>
                <td>{f.age}</td>
                <td>{f.qualification}</td>
                <td>{f.joinedAt}</td>
                <td>{f.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
