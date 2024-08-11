const Resume = () => {
  return (
    <>
      {/* <div className="resume1"> */}
      <section ref={Resume} className="resume1">
        <h1>RESUME</h1>

        <div className="resume-container">
          <div className="resumes">
            <h1>About My self</h1>

            <ul>
              <li>Md Sohail</li>
              <li>
                I Have completed my 10 in <br />
                CBSE From SHININH STAR PUBLIC SCHOOL
              </li>
              <li>
                {" "}
                I Have completed my 12 in <br />
                BSEB From D.A.V POST GRADUATE COLLDGE{" "}
              </li>
              <li> I M' BCA First year Student</li>
              <li> CONTECT = 9546012336</li>
              <li> G-MAIL = mdsohail@15426gmail.com</li>
            </ul>
          </div>
          <div className="resumes">
            <h1>Skills</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVA SCRIPT</li>
              <li>BOOTSTRAP</li>
              <li>REACT JS</li>
              <li> C LANGUAGE</li>
            </ul>
          </div>
          <div className="resumes">
            <h1> Work And Expreance</h1>
            <ul>
              <li>AMAZONE COLON</li>
              <li>MYNTRA CLONE</li>
              <li> RESPONSIVE CALCULATER</li>
              <li>LEZARAV.AGENCY</li>
              <li>FOOD APP</li>
              <li>POTRFOLIO WEBSITE</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resume;
