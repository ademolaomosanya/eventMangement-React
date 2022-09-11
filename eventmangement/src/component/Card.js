import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img alt="" src={""} className="myImage"  />
      <div className="display">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
