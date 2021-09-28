import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>I like making websites and cool web apps,</span>
            </div>
            <div className="line">
              <span>I love being called Frontend Engineer</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More About Me
              <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
