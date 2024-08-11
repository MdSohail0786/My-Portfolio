const About = () => {
  // import { forwardRef } from "react";
  return (
    <>
      <section ref={About} className="About">
        {/* <h1>ABOUT</h1> */}

        <div className="left1">
          <img src="mypic2.png" alt="" />
        </div>
        <div className="Right">
          <h1>ABOUT</h1>
          <h2>Hello, I'm FRONT ENFD DEVLOPER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            repellat modi dolore numquam doloremque recusandae voluptas, quam
            quo suscipit esse et culpa ipsa beatae vel animi. Cumque doloremque
            quidem quam alias corporis commodi dicta modi, ipsum ex, vel nisi
            debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptate, quaerat.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
