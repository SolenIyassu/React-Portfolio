import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Home() {
  return (
    <>
      <div className="about">About</div>;<h2> Hi, My name Solen </h2>
      <div>
        <p>
          I am a recent graduate from a coding Bootcamp. I am excited to become
          a full stack developer and I am willing to learn all there is about
          developing!
          <GithubIcon />
          <LinkedIn />
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="skillList">
          <li className="listItems">
            <p> Front-End</p>
            <span></span>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Home;
