import React from "react";
import ProjectItems from "../Components/ProjectItems";
import NuRoute from "../assets/Nuroute.png";
import KnowledgeBase from "../assets/KnowledgeBase.png";
import "../styles/Project.css";

function Project() {
  return (
    <>
      <div className="projects">
        <h1>My Projects</h1>
        <div className="projectitems">
          <ProjectItems name="Excercise app" img={NuRoute} />
          <ProjectItems name="Blog Site" img={KnowledgeBase} />
        </div>
      </div>
    </>
  );
}

export default Project;
