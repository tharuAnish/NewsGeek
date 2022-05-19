import React from "react";
import "./newsitem.style.css";

const Newsitem = (props) => {
  return (
    <>
      <div className="card-containner">
        <div className="card">
          <img
            src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0202%2Fr968838_1296x729_16%2D9.jpg"
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <div className="details">
            <h4>
              <b>{props.title}</b>
            </h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsitem;
