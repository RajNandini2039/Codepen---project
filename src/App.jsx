// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./components/Layout";
// import Project from "./components/Project";
// import SignUp from "./components/SignUp";
// import NewProject from "./components/NewProject";
// // import SavedProject from "./components/SavedProject"; // <-- Add this import
// import PrivateRoute from "./PrivateRoute";

// function App() {
//   return (
//     <Routes>
//       {/* Redirect root to /home */}
//       <Route path="/" element={<Navigate to="/home" replace />} />

//       {/* Routes that use Layout */}
//       <Route path="/home" element={<Layout />}>
//         <Route index element={<Project />} /> {/* /home */}
//         <Route path="projects" element={<Project />} /> {/* /home/projects */}
//         {/* <Route path="savedProjects" element={<SavedProject />} /> /home/savedProjects */}

//         <Route path="/auth" element={<SignUp />} />
//       </Route>

//       {/* Route WITHOUT layout */}
//       <Route path="/newProject" element={<PrivateRoute><NewProject /></PrivateRoute>} /> {/* new full-page route */}
//     </Routes>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Project from "./components/Project";
import SignUp from "./components/SignUp";
import NewProject from "./components/NewProject";
// import SavedProject from "./components/SavedProject"; // <-- Add this import
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Routes>
      {/* Redirect root to /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Routes that use Layout */}
      <Route path="/home" element={<Layout />}>
        <Route index element={<Project />} /> {/* /home */}
        <Route path="projects" element={<Project />} /> {/* /home/projects */}
        {/* <Route path="/newProject" element={<NewProject />} /> /home/savedProjects */}
        
        {/* Now nested SignUp inside /home */}
        <Route path="auth" element={<SignUp />} /> {/* /home/auth */}
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Route>

      {/* Route WITHOUT layout */}
      <Route path="/newProject" element={<PrivateRoute><NewProject /></PrivateRoute>} /> 
      {/* new full-page route */}
      
    </Routes>
  );
}

export default App;

