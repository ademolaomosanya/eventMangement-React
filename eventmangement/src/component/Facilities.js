import React from "react";
import { Link } from "react-router-dom";
export default function Facilities() {
  return (
    <div>
      <div  class="facilities-grid">
        <div className="img--link">
          <Link  to="detailpage">
            <img style={{width:"100%"}} src="./images/images.jpg" alt="sometext" />
          </Link>
         <p>Events Hall(250 capacity)</p>
        </div>

        <div className="img--link">
          <Link  to="detailpage">
            <img
              src="./images/istockphoto-1151361779-170667a.jpg"
              alt="sometext"
            />
          </Link>
          <p>Hall(1000 capacity)</p>
        </div>

        <div className="img--link">
          <Link to="detailpage">
            <img src="./images/download2.jpg" alt="sometext" />
          </Link>
          <p>Hall with projectors</p>
        </div>

        <div className="img--link">
          <Link to="detailpage">
            <img src="./images/download (3).jpg" alt="sometext" />
          </Link>
          <p>Tents</p>
        </div>

        <div className="img--link">
          <Link  to="detailpage">
            <img src="./images/50474824_147695916242838_576054173647272351_n.jpg" alt="sometext" />
          </Link>
          <p>Couple's Tents</p>
        </div>

        <div className="img--link">
          <Link  to="detailspage">
            <img src="./images/istockphoto-516590951-612x612.jpg" alt="sometext" />
          </Link>
          <p>Festival Tents</p>
        </div>
       
      </div>
    </div>
  );
}
