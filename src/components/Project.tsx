import React from "react";
import mock01 from '../assets/images/hive.jpeg';
import mock02 from '../assets/images/infralayer.jpeg';
import mock03 from '../assets/images/happypaws.jpeg';
import mock04 from '../assets/images/myoclinic.jpeg';
import mock05 from '../assets/images/carina.jpeg';
import mock06 from '../assets/images/glide.jpeg';
import mock11 from '../assets/images/joesventure.jpeg';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Portfolio</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.hiveanalytics.com/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom mock01" alt="thumbnail" width="100%" /></a>
          <a href="https://www.hiveanalytics.com/" target="_blank" rel="noreferrer"><h2>Hive Analytics</h2></a>
          <p>Renovated main website for Hive Analytics, one of the biggest marketing agencies in Cairo</p>
        </div>
        <div className="project">
          <a href="https://www.infralayer.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom mock02" alt="thumbnail" width="100%" /></a>
          <a href="https://www.infralayer.com/" target="_blank" rel="noreferrer"><h2>Infralayer</h2></a>
          <p>High Performance Defensive Programming business website.</p>
        </div>
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
          <a href="https://myoclinic.me/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom mock06" alt="thumbnail" width="100%" /></a>
          <a href="https://myoclinic.me/" target="_blank" rel="noreferrer"><h2>Myo Clinic</h2></a>
          <p>Website for Myo clinic who wanted a clean online presence and online booking system</p>
        </div>

        <div className="project">
          <a href="https://gounacarwash.netlify.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom mock07" alt="thumbnail" width="100%" /></a>
          <a href="https://gounacarwash.netlify.app/" target="_blank" rel="noreferrer"><h2>Glide</h2></a>
          <p>Upcoming project for Glide, a carwash service with a dynamic booking schedule and modern UI</p>
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
