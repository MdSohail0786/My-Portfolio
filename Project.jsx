const Project = () => {
  return (
    // <div className="project">
    <section ref={Project} className="project">
      <h1>MY WORKS</h1>
      <h5>Here are some of my works</h5>

      <div className="projectboxes">
        <div className="project-box">
          <img src="amazone0-Photoroom.png" alt="" />
          <a className="nav-link1" href="#">
            Amazone Clone Website
          </a>
        </div>
        <div className="project-box">
          <img src="caculator.webp" alt="" />
          <a className="nav-link1" href="#">
            Responsive Calculator
          </a>
        </div>
        <div className="project-box">
          <img src="Portfolio2-Photoroom.png" alt="" />
          <a className="nav-link1" href="#">
            My Portfolio Website
          </a>
        </div>
        <div className="project-box">
          <img src="Ailleron-AI-ML.png" alt="" />
          <a className="nav-link1" href="#">
            Lezarav.Agency Clone Website
          </a>
        </div>
        <div className="project-box">
          <img src="myntra.png.png" alt="" />
          <a className="nav-link1" href="#">
            Myntra Clone Website
          </a>
        </div>
        <div className="project-box">
          <img src="healthyfood-Photoroom.png" alt="" />
          <a className="nav-link1" href="#">
            Halthy Food Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
