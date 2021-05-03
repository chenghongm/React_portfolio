import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        height="300"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBNjV6owDpm4G_dqWzKY9fEOyiC3vfdwPg&q=Queens+Public+Library+at+Queensboro+Hill&zoom=12&center=40.7434349,-73.8324473"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    
      <h4>Email</h4>
      <p>menglydia6@gmail.com</p>

      <h4>Address</h4>
      <p>60-05 Main St, Flushing, NY, 11355</p>
     
     
    </div>
  );
};

export default About;