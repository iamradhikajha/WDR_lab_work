import React, { useState } from "react";
import FacultyNavigationBar from "./FacultyNavigationBar";

export default function App() {
  // Array that stores all faculty records
  const [facultyData, setFacultyData] = useState([]);

  // ADD FACULTY
  const addFaculty = (faculty) => {
    setFacultyData((prev) => [...prev, faculty]);
  };

  // DELETE FACULTY
  const deleteFaculty = (facultyId) => {
    setFacultyData((prev) => prev.filter((f) => f.facultyId !== facultyId));
  };

  //UPDATE FACULTY
  const updateFaculty = (facultyId, newData) => {
    setFacultyData((prev) =>
      prev.map((f) => (f.facultyId === facultyId ? { ...f, ...newData } : f))
    );
  };

  return (
    <FacultyNavigationBar
      facultyData={facultyData}
      addFaculty={addFaculty}
      deleteFaculty={deleteFaculty}
      updateFaculty={updateFaculty}
    />
  );
}
