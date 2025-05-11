import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

const HomePage = () => {
  const [projects, setProjects] = useState(["raj"]);
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Project"));
        const fetchedProjects = querySnapshot.docs.map((doc) => doc.data());
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };
    fetchProjects();
  }, []);
console.log(projects);
  return (
    <div>
      <h1>Hello</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <div>
            <pre>{project.html}</pre>
            <pre>{project.css}</pre>
            <pre>{project.js}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomePage;