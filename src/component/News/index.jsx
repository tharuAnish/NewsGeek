import React from "react";
import Newsitem from "../Newsitem";
import "./news.style.css";

const News = () => {
  return (
    <>
      <div className="wrapper">
        <h1>NewsGeek - Top Headlines</h1>
        <div className="item-container">
          <div className="item">
            <Newsitem title="my title" description="my description" />
          </div>
          <div className="item">
            <Newsitem title="my title 2" description="my description 2" />
          </div>
          <Newsitem />
          <Newsitem />
          <Newsitem />
          <Newsitem />
        </div>
      </div>
    </>
  );
};

export default News;
