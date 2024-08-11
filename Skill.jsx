const Skill = () => {
  return (
    <>
      {/* <div className="skill"> */}
      <section ref={Skill} className="skill">
        <h1>MY SKILLS</h1>

        <div className="boxes">
          <div className="box1">
            <img src="html..png" alt="" />
            <div className="contenerstext">
              <h3>HTML</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar">75%</div>
              </div>
            </div>
          </div>

          <div className="box1">
            <img src="css..webp" alt="" />
            <div className="contenerstext">
              <h3>CSS</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-barcss">70%</div>
              </div>
            </div>
          </div>
          <div className="box1">
            <img src="javascript-Photoroom.png" alt="" />
            <div className="contenerstext">
              <h3>JAVASCRIPT</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-barjs">50%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxes1">
          <div className="box2">
            <img src="bootstrap.png" alt="" />
            <div className="contenerstext1">
              <h3>BOOTSRAP</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-barbs">75%</div>
              </div>
            </div>
          </div>
          <div className="box2">
            <img src="react.png" alt="" />
            <div className="contenerstext">
              <h3>REACT JS</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-barrjx">50%</div>
              </div>
            </div>
          </div>
          <div className="box2">
            <img src="C_Logo.png" alt="" />
            <div className="contenerstext">
              <h3>C-LANDGUAGE</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-barc">55%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skill;
