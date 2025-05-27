import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Waves from "./Waves";

function Main() {

  return (
    <div className="container">
      <Waves/>
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/dmmapotba/image/upload/c_crop,g_auto,h_800,w_800/kxug4ej2fulrry4z8o6s" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/justinmayhew-dex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/justin-mayhew-34a035317" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Justin Mayhew</h1>
          <p>Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/justinmayhew-dex" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/justin-mayhew-34a035317" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;