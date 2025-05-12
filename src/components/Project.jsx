// import { useSelector } from "react-redux";

// const Project = () => {
//     const projects = useSelector((state) => state.Project?.projects);
//     return(
//         <div className="w-full py-6 flex items-center justify-center gap-6 flex-wrap">
//           {projects && projects.map((project, index) => (
//   <ProjectCard key={project.id} project={project} index={index} />
// ))}

//         </div>
//     )

// }
// const ProjectCard = ({ project, index }) => {
//   return (
//     <motion.div
//       key={index}
//       className="w-full cursor-pointer md:w-[450px] h-[375px] bg-slate-500 rounded-md p-4 flex flex-col items-center justify-center gap-4"
//     >
//       <div className="bg-black w-full h-full rounded-md overflow-hidden">
//         <iframe
//           title="Result"
//           srcDoc={project.output}
//           style={{ border: "none", width: "100%", height: "100%" }}
//         />
//       </div>
//       <div className="flex items-center justify-between w-full">
//         <h3 className="text-white font-semibold">{project.title}</h3>
//         <p className="text-gray-300 text-sm">
//           {project.user?.displayName || project.user?.email.split("@")[0]}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Project;
// import { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/firebase.config";

// const Project = () => {
//   const [projects, setProjects] = useState(["raj"]);
  

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Project"));
//         const fetchedProjects = querySnapshot.docs.map((doc) => doc.data());
//         setProjects(fetchedProjects);
//       } catch (error) {
//         console.error("Error fetching projects: ", error);
//       }
//     };
//     fetchProjects();
//   }, []);
// console.log(projects);
//   return (
//     <div>
//       <h1>Saved Projects</h1>
//       {projects.map((project) => (
//         <div key={project.id}>
//           <h2>{project.title}</h2>
//           <div>
//             <pre>{project.ouptput}</pre>
//             {/* <pre>{project.css}</pre>
//             <pre>{project.js}</pre> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Project;
// import { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/firebase.config";

// const Project = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Project"));
//         const fetchedProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(fetchedProjects);
//       } catch (error) {
//         console.error("Error fetching projects: ", error);
//       }
//     };
//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h1>Saved Projects</h1>
//       {projects.map((project) => {
//         const fullOutput = `
//           <html>
//             <head>
//               <style>${project.css}</style>
//             </head>
//             <body>
//               ${project.html}
//               <script>${project.js}</script>
//             </body>
//           </html>
//         `;

//         return (
//           <div key={project.id} style={{ marginBottom: "2rem" }}>
//             <h2>{project.title || "Untitled Project"}</h2>
//             <iframe
//               srcDoc={fullOutput}
//               title={project.title}
//               style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
//               sandbox="allow-scripts allow-same-origin"
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Project;
// import { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../config/firebase.config";

// const Project = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Project"));
//         const fetchedProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(fetchedProjects);
//       } catch (error) {
//         console.error("Error fetching projects: ", error);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, "Project", id));
//       setProjects(projects.filter((project) => project.id !== id));
//     } catch (error) {
//       console.error("Error deleting project: ", error);
//     }
//   };

//   const handleEdit = (project) => {
//     // You can implement navigation or modal logic here
//     alert(`Edit project: ${project.title}`);
//     // For example, navigate(`/edit/${project.id}`) or open a modal
//   };

//   return (
//     <div>
//       <h1 className="text-bold text-center text-amber-400">Saved Projects</h1>
//       {projects.map((project) => {
//         const fullOutput = `
//           <html>
//             <head>
//               <style>${project.css}</style>
//             </head>
//             <body>
//               ${project.html}
//               <script>${project.js}</script>
//             </body>
//           </html>
//         `;

//         return (
//           <div key={project.id} style={{ marginBottom: "2rem", border: "1px solid #ddd", padding: "1rem" }}>
//             {/* <h2>{project.title || "Untitled Project"}</h2> */}
//             <h2 style={{ color: "#5A67D8" }}>{project.title || "Untitled Project"}</h2>

//             <iframe
//               srcDoc={fullOutput}
//               title={project.title}
//               style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
//               sandbox="allow-scripts allow-same-origin"
//             />
//             <div style={{ marginTop: "1rem" }}>
//               <button onClick={() => handleEdit(project)} style={{ marginRight: "1rem" }}>Edit</button>
//               <button onClick={() => handleDelete(project.id)} style={{ color: "red" }}>Delete</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Project;
// import { useEffect, useState } from "react";
// import {
//   getDocs,
//   collection,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "../config/firebase.config";

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editTitle, setEditTitle] = useState("");

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Project"));
//         const fetchedProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(fetchedProjects);
//       } catch (error) {
//         console.error("Error fetching projects: ", error);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, "Project", id));
//       setProjects((prev) => prev.filter((project) => project.id !== id));
//     } catch (error) {
//       console.error("Error deleting project: ", error);
//     }
//   };

//   const startEdit = (project) => {
//     setEditId(project.id);
//     setEditTitle(project.title || "");
//   };

//   const saveEdit = async (id) => {
//     try {
//       await updateDoc(doc(db, "Project", id), { title: editTitle });
//       setProjects((prev) =>
//         prev.map((p) => (p.id === id ? { ...p, title: editTitle } : p))
//       );
//       setEditId(null);
//     } catch (error) {
//       console.error("Error saving title: ", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center text-amber-400 mb-6">
//         Saved Projects
//       </h1>

//       {projects.map((project) => {
//         const fullOutput = `
//           <html>
//             <head><style>${project.css}</style></head>
//             <body>
//               ${project.html}
//               <script>${project.js}</script>
//             </body>
//           </html>
//         `;

//         return (
//           <div
//             key={project.id}
//             className="mb-6 border border-gray-300 p-4 rounded shadow"
//           >
//             {editId === project.id ? (
//               <div className="flex items-center gap-2 mb-2">
//                 <input
//                   type="text"
//                   value={editTitle}
//                   onChange={(e) => setEditTitle(e.target.value)}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//                 <button
//                   onClick={() => saveEdit(project.id)}
//                   className="bg-green-500 text-white px-3 py-1 rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             ) : (
//               <h2 className="text-indigo-600 font-semibold text-lg mb-2">
//                 {project.title || "Untitled Project"}
//               </h2>
//             )}

//             <iframe
//               srcDoc={fullOutput}
//               title={project.title}
//               className="w-full h-72 border"
//               sandbox="allow-scripts allow-same-origin"
//             />

//             <div className="mt-4 flex gap-2">
//               <button
//                 onClick={() => startEdit(project)}
//                 className="bg-blue-500 text-white px-4 py-1 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(project.id)}
//                 className="bg-red-500 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Project;
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../config/firebase.config";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchProjects(); // only fetch when user is authenticated
      } else {
        setProjects([]); // clear projects when logged out
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Project"));
      const fetchedProjects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Project", id));
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  const startEdit = (project) => {
    setEditId(project.id);
    setEditTitle(project.title || "");
  };

  const saveEdit = async (id) => {
    try {
      await updateDoc(doc(db, "Project", id), { title: editTitle });
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, title: editTitle } : p))
      );
      setEditId(null);
    } catch (error) {
      console.error("Error saving title: ", error);
    }
  };

  if (!user) {
    return (
      <div className="text-center text-gray-600 mt-10">
        Please sign in to view your saved projects.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-amber-400 mb-6">
        Saved Projects
      </h1>

      {projects.map((project) => {
        const fullOutput = `
          <html>
            <head><style>${project.css}</style></head>
            <body>
              ${project.html}
              <script>${project.js}</script>
            </body>
          </html>
        `;

        return (
          <div
            key={project.id}
            className="mb-6 border border-gray-300 p-4 rounded shadow"
          >
            {editId === project.id ? (
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
                <button
                  onClick={() => saveEdit(project.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <h2 className="text-indigo-600 font-semibold text-lg mb-2">
                {project.title || "Untitled Project"}
              </h2>
            )}

            <iframe
              srcDoc={fullOutput}
              title={project.title}
              className="w-full h-72 border"
              sandbox="allow-scripts allow-same-origin"
            />

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => startEdit(project)}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;



