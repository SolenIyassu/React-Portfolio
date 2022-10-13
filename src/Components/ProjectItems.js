import React from "react";
// import NuRoute from "../assets/Nuroute.png";
// import KnowledgeBase from "../assets/KnowledgeBase.png";
function ProjectItems({ name, img }) {
  return (
    <>
      <div className="project">
        <img src={img} alt="" />
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default ProjectItems;
