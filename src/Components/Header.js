import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-cirlce.svg";
import { gsap } from "gsap";

const tl = gsap.timeline();
const Header = ({ history, dim }) => {
  const [menuState, setMenuState] = useState({
    menuOpened: false
  });
  useEffect(() => {
    //bringing history

    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened) {
      //run open menu animation
      tl.to("body", {
        duration: 0.01,
        css: {
          overflow: "hidden"
        }
      });

      tl.to(".App", 1, {
        y: dim.height,
        ease: "expo.inOut"
      })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scale: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut"
        })
        .to("#path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5
          }
        })
        .to("#path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20
          }
        })
        .to("#line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18
          }
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0
          }
        })
        .to(".hamburger-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block"
          }
        });
    } else {
      //run close menu animation
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut"
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          strokeDashoffset: -193,
          strokeDasharray: 227
        })
        .to("#path_1", {
          duration: 0.4,
          delay: -0.6,
          strokeDashoffset: 10,
          strokeDasharray: 10
        })
        .to("#path_2", {
          duration: 0.4,
          delay: -0.6,
          strokeDashoffset: 10,
          strokeDasharray: 10
        })
        .to("#line_1", {
          duration: 0.4,
          delay: -0.6,
          strokeDashoffset: 40,
          strokeDasharray: 40
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scale: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut"
        })
        .to(".hamburger-close", {
          duration: 0,
          css: {
            display: "none"
          }
        })
        .to("body", {
          css: {
            overflow: "auto"
          }
        });
    }
  }, [menuState.menuOpened]);
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">Harsh</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => {
                (function smoothscroll() {
                  var currentScroll =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                  if (currentScroll > 0) {
                    window.requestAnimationFrame(smoothscroll);
                    window.scrollTo(0, currentScroll - currentScroll / 20);
                  }
                })();
                return setMenuState({ menuOpened: true });
              }}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
