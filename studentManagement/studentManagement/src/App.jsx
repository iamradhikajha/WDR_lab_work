import React from "react";
import StudentRegistration from "./StudentRegistration";
import DeleteStudent from "./DeleteStudent";
import StudentList from "./StudentList";
import UpdateStudent from "./UpdateStudent";
import StudentProfile from "./StudentProfile";

function App() {
  return (
    <div>
      <StudentRegistration />
      <DeleteStudent />
      <UpdateStudent />
      <StudentList />
      <StudentProfile />
    </div>
  );
}

export default App;
