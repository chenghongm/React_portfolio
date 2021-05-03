import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
       <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/homedesk.jpg`}
          alt="person picture"
        />
      </div>
      <div className="title">
        <h1>
          <p> Hi,</p>
        </h1>
        <h1>
          <p>
            I am <b>Chenghong Meng</b>
          </p>

          <p style={{ color: "Background" }}>Full Stack developer</p>
        </h1>

        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
     
    </div>
  );
};

export default Home;
