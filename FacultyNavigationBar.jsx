import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import your faculty components
import FacultyRegistration from "./FacultyRegistration";
import FacultyList from "./FacultyList";
import FacultyProfile from "./FacultyProfile";
import FacultyUpdate from "./FacultyUpdate";

export default function FacultyNavigationBar(props) {
  return (
    <Router>
      {/* -------------------- NAVIGATION BAR -------------------- */}
      <nav
        style={{
          width: "100%",
          background: "black",
          padding: "20px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px",
              }}
              to="/facultyregister"
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px",
              }}
              to="/facultyupdate"
            >
              Update
            </Link>
          </li>

          <li>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px",
              }}
              to="/facultylist"
            >
              List
            </Link>
          </li>

          <li>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px",
              }}
              to="/facultyprofile"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      {/* ---------------------- ROUTES SECTION ---------------------- */}
      <Routes>
        {/* Register new faculty */}
        <Route
          path="/facultyregister"
          element={<FacultyRegistration addFaculty={props.addFaculty} />}
        />

        {/* Update faculty information */}
        <Route
          path="/facultyupdate"
          element={<FacultyUpdate updateFaculty={props.updateFaculty} />}
        />

        {/* Show list of faculties */}
        <Route
          path="/facultylist"
          element={<FacultyList facultyData={props.facultyData} />}
        />

        {/* Show faculty profile */}
        <Route
          path="/facultyprofile"
          element={<FacultyProfile facultyData={props.facultyData} />}
        />
      </Routes>
    </Router>
  );
}
