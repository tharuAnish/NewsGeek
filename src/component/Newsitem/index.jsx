import React from "react";
import "./newsitem.style.css";

const Newsitem = () => {
  return (
    <>
      <p>This is a news item</p>
      <div className="wrapper">
        <div className="card-containner">
          <div className="card">
            <img src=".." alt="Avatar" style={{ width: "100%" }} />
            <div className="details">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect &amp; Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsitem;
