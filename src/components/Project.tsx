import React from "react";
import mock01 from '../assets/images/hive.jpeg';
import mock02 from '../assets/images/infralayer.jpeg';
import mock03 from '../assets/images/happypaws.jpeg';
import mock05 from '../assets/images/carina.jpeg';
import mock11 from '../assets/images/joesventure.jpeg';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Highlights</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.hiveanalytics.com/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom mock01" alt="thumbnail" width="100%" /></a>
          <a href="https://www.hiveanalytics.com/" target="_blank" rel="noreferrer"><h2>Hive Analytics</h2></a>
          <p>Rebuilding the website for Eagle Travel Egypt with improved UI, load times and more.</p>
        </div>
        <div className="project">
          <a href="https://www.infralayer.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom mock02" alt="thumbnail" width="100%" /></a>
          <a href="https://www.infralayer.com/" target="_blank" rel="noreferrer"><h2>Infralayer</h2></a>
          <p>High Performance Defensive Programming business website.</p>
        </div>
      </div>
      <h1>Portfolio</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://carina.eg/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom mock05" alt="thumbnail" width="100%" /></a>
          <a href="https://carina.eg/" target="_blank" rel="noreferrer"><h2>Carina</h2></a>
          <p>Lead developer working on Carina's online store, a womens clothing brand based in Egypt</p>
        </div>
        <div className="project">
          <a href="https://joesventure.com/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom mock04" alt="thumbnail" width="100%" /></a>
          <a href="https://joesventure.com/" target="_blank" rel="noreferrer"><h2>Joe's Venture</h2></a>
          <p>Created a stylish and beautiful shopify store for Joe's Venture, a premium leather goods seller</p>
        </div>

        <div className="project">
          <a href="https://happy-walks.netlify.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom mock03" alt="thumbnail" width="100%" /></a>
          <a href="https://happy-walks.netlify.app/" target="_blank" rel="noreferrer"><h2>Happy Paws</h2></a>
          <p>A project for connecting dog walkers to people who need them, based in Cairo.</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
