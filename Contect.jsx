const Contect = () => {
  return (
    // <div className="contect">
    <section ref={Contect} className="contect">
      <h1> CONTECT ME</h1>
      <h2>
        Let's make somthing <br />
        awesome togather
      </h2>

      <div className="form">
        <h4>NAME</h4>
        <input
          type="
        text"
          placeholder="Your name"
        />
        <h4>Email</h4>
        <input type="text" placeholder="Your email" />
        <h4>Phone(optional)</h4>
        <input type="count" placeholder="your phone" />
        <h4>Subject:</h4>
        <input type="text" placeholder="your subject" />
        <h4>Massage:</h4>
        <input type="text" placeholder="Type your masage...." />
        <br />
        <button className="submit">Submit</button>
      </div>
      <div className="icons">
        <a href="#">linkdin</a>
        <a href="#">contect</a>
        <a href="#"> twitter</a>
        <a href="#">github</a>
      </div>
      <div className="copyright">
        <p>© Copyright 2024 Web Addicted All right reserved</p>
      </div>
    </section>
  );
};
export default Contect;
