import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./Components/Header";
import { gsap } from "gsap";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Navigation from "./Components/Navigation";
//Defining Router

const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home
  },
  {
    path: "/about",
    name: "About",
    Component: About
  },
  {
    path: "/services",
    name: "Services",
    Component: Services
  },
  {
    path: "/contact",
    name: "Contact",
    Component: Contact
  }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  //for height for banner
  const [dim, setDim] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {
    gsap.to("body", 0, {
      css: {
        visibility: "visible"
      }
    });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //to avoid flash

    const debounceHandler = debounce(function handleResize() {
      setDim({
        height: window.innerHeight,
        widt: window.innerWidth
      });
    }, 1000);
    window.addEventListener("resize", debounceHandler);

    return () => {
      window.removeEventListener("resize", debounceHandler);
    };
  });
  return (
    <>
      <Header dim={dim} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
