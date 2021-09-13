import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/image-zoom">Image Zoom</Link>
          </li>
          <li>
            <Link to="/scroll-top-bar">Scroll top bar</Link>
          </li>
          <li>
            <Link to="/react-table">React Table</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>
      </nav>

      <div className="homeBanner">
        This is home page. There are all react packages link show
      </div>
    </div>
  );
};

export default Home;
