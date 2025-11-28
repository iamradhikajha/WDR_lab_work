import React, { useState } from "react";

export default function FacultyRegistration({ addFaculty }) {
  const [faculty, setFaculty] = useState({
    facultyId: "",
    facultyName: "",
    age: "",
    qualification: "",
    joinedAt: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFaculty(faculty);
    alert("Faculty Registered!");
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        height: "500px",
        width: "500px",

        marginTop: "20px",
        background: "linear-gradient(135deg, #1d1b1b, #e9e9e9)",
      }}
    >
      <h2>Faculty Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={{ fontSize: "25px" }}
          name="facultyId"
          placeholder="Faculty ID"
          value={faculty.facultyId}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          style={{ fontSize: "25px" }}
          name="facultyName"
          placeholder="Faculty Name"
          value={faculty.facultyName}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          style={{ fontSize: "25px" }}
          name="age"
          placeholder="Age"
          type="number"
          value={faculty.age}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          style={{ fontSize: "25px" }}
          name="qualification"
          placeholder="qualification"
          type="text"
          value={faculty.qualification}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          style={{ fontSize: "25px" }}
          name="joinedAt"
          placeholder="joinedAt"
          value={faculty.joinedAt}
          onChange={handleChange}
        />

        <br />
        <br />

        <select
          name="status"
          value={faculty.status}
          onChange={handleChange}
          style={{ fontSize: "20px" }}
        >
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>
        <br />
        <br />

        <button type="submit" style={{ fontSize: "20px" }}>
          Register
        </button>
      </form>
    </div>
  );
}
