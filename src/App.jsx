import React, { useState } from "react";
import CourseNavigationBar from "./coursemanagement/CourseNavigationBar";

export default function App() {
  const [courses, setCourses] = useState([]);

  // ADD COURSE
  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  // DELETE COURSE
  const deleteCourse = (courseId) => {
    setCourses((prev) => prev.filter((c) => c.id !== courseId));
  };

  // UPDATE COURSE
  const updateCourse = (courseId, newData) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, ...newData } : c))
    );
  };

  return (
    <CourseNavigationBar
      courses={courses}
      addCourse={addCourse}
      deleteCourse={deleteCourse}
      updateCourse={updateCourse}
    />
  );
}
