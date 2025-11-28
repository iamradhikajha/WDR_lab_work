import React, { useState } from "react";

export default function FacultyUpdate({ facultyData, updateFaculty }) {
  const [selectedId, setSelectedId] = useState("");
  const [newData, setNewData] = useState({
    facultyName: "",
    age: "",
    qualification: "",
    status: "",
  });

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateFaculty(selectedId, newData);
    alert("Faculty Updated!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Faculty</h2>

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

      {selectedId && (
        <form onSubmit={handleUpdate} style={{ marginTop: "20px" }}>
          <input
            name="facultyName"
            placeholder="New Name"
            onChange={handleChange}
          /><br />

          <input
            name="age"
            placeholder="New Age"
            type="number"
            onChange={handleChange}
          /><br />

          <input
            name="qualification"
            placeholder="New Qualification"
            onChange={handleChange}
          /><br />

          <select
            name="status"
            onChange={handleChange}
          >
            <option value="">Change Status</option>
            <option value="active">Active</option>
            <option value="left">Left</option>
          </select><br /><br />

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}
