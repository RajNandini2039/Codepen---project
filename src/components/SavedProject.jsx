// import React, { useEffect, useState } from "react";
// import { db } from "../config/firebase.config";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../config/firebase.config";

// const SavedProject = () => {
//   const [user] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     if (!user) return;

//     // Fetch the user's projects from Firestore
//     const fetchProjects = async () => {
//       const q = query(collection(db, "projects"), where("uid", "==", user.uid));
//       const querySnapshot = await getDocs(q);
//       const data = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProjects(data);
//     };

//     fetchProjects();
//   }, [user]);

//   return (
//     <div>
//       <h2>Your Saved Projects</h2>
//       {projects.length > 0 ? (
//         projects.map((project) => (
//           <div key={project.id} className="project">
//             <h3>Project {project.id}</h3>
//             <div>
//               <h4>HTML:</h4>
//               <pre>{project.html}</pre>
//               <h4>CSS:</h4>
//               <pre>{project.css}</pre>
//               <h4>JS:</h4>
//               <pre>{project.js}</pre>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No projects found.</p>
//       )}
//     </div>
//   );
// };

// export default SavedProject;
// import React, { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/";

// const SavedProject = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetchSavedProjects();
//   }, []);

//   // Fetch saved projects from Firestore
//   const fetchSavedProjects = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "projects"));
//       const fetchedProjects = querySnapshot.docs.map((doc) => doc.data());
//       setProjects(fetchedProjects);
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Saved Projects</h1>
//       {projects.map((project, index) => (
//         <div key={index} className="project-card">
//           <h2>Project {index + 1}</h2>
//           <div className="code-display">
//             <h3>HTML</h3>
//             <pre>{project.htmlCode}</pre>
//             <h3>CSS</h3>
//             <pre>{project.cssCode}</pre>
//             <h3>JavaScript</h3>
//             <pre>{project.jsCode}</pre>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SavedProject;

