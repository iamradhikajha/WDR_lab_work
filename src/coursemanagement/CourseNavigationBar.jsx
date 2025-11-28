import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing all components used in routing
import CourseRegistration from "./CourseRegistration";
import CourseUpdate from "./CourseUpdate";
import CourseDelete from "./CourseDelete";
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";

export default function CourseNavigationBar(props) {
  return (
    <Router>

      {/* -------------------- NAVIGATION BAR -------------------- */}
      <nav
        style={{
          width: "100%",          // Full width navbar
          background: "black",     // Black background
          padding: "20px",         // Spacing inside navbar
        }}
      >
        <ul
          style={{
            display: "flex",                    // Items in one row
            justifyContent: "space-around",     // Spread across full width
            listStyle: "none",                  // Remove bullets
            margin: 0,
            padding: 0,
          }}
        >
          {/* Each navigation link to different components */}
          <li>
            <Link
              style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
              to="/courseregister"
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
              to="/courseupdate"
            >
              Update
            </Link>
          </li>

          <li>
            <Link
              style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
              to="/coursedelete"
            >
              Delete
            </Link>
          </li>

          <li>
            <Link
              style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
              to="/courselist"
            >
              List
            </Link>
          </li>

          <li>
            <Link
              style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
              to="/coursedetails"
            >
              Details
            </Link>
          </li>
        </ul>
      </nav>

      {/* ---------------------- ROUTES SECTION ---------------------- */}
      <Routes>

        {/* Route for registering a new course */}
        <Route
          path="/courseregister"
          element={<CourseRegistration addCourse={props.addCourse} />}
        />

        {/* Route for updating an existing course */}
        <Route
          path="/courseupdate"
          element={<CourseUpdate updateCourse={props.updateCourse} />}
        />

        {/* Route for deleting a course */}
        <Route
          path="/coursedelete"
          element={<CourseDelete deleteCourse={props.deleteCourse} />}
        />

        {/* Route for listing all available courses */}
        <Route
          path="/courselist"
          element={<CourseList courses={props.courses} />}
        />

        {/* Route for getting details of specific course */}
        <Route
          path="/coursedetails"
          element={<CourseDetails courses={props.courses} />}
        />

      </Routes>
    </Router>
  );
}
