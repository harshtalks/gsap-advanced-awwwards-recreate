import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
//importing pictures
import curologyMin from "../assets/curology-min.png";
import yourspaceMin from "../assets/yourspace-min.png";
import luminMin from "../assets/lumin-min.png";

const caseStudies = [
  {
    id: 1,
    subTitle: "React JS",
    title: "Covid-19 API Project using Graph.js",
    img: curologyMin
  },
  {
    id: 2,
    subTitle: "JavaScript",
    title: "Map Project using LeatFlat Library",
    img: yourspaceMin
  },
  {
    id: 3,
    subTitle: "React JS",
    title: "Covid-19 API Project using Graph.js",
    img: luminMin
  }
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((el) => {
            return (
              <div className="case" key={el.id}>
                <div className="case-details">
                  <span>{el.subTitle}</span>
                  <h2>{el.title}</h2>
                </div>
                <div className="case-image">
                  <img src={el.img} alt={el.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cases;
