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
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
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
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Saved Projects</h1>
      {projects.map((project) => {
        const fullOutput = `
          <html>
            <head>
              <style>${project.css}</style>
            </head>
            <body>
              ${project.html}
              <script>${project.js}</script>
            </body>
          </html>
        `;

        return (
          <div key={project.id} style={{ marginBottom: "2rem" }}>
            <h2>{project.title || "Untitled Project"}</h2>
            <iframe
              srcDoc={fullOutput}
              title={project.title}
              style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Project;
