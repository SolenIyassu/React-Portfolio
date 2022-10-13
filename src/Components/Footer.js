import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="myLinks">
          <GithubIcon />
          <LinkedInIcon />
        </div>
        <p>&copy; 2022 </p>
      </div>
    </>
  );
}

export default Footer;
