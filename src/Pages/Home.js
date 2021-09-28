import React, { useEffect, useState } from "react";
import IntroOverlay from "../Components/IntroOverlay";
import Banner from "../Components/Banner";
import Cases from "../Components/Cases";
import { gsap } from "gsap";

const tl = gsap.timeline();

const animateHome = (completeAnimation) => {
  return tl
    .from(".line span", 1.8, {
      opacity: 0,
      y: 100,
      ease: "Power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".intro-overlay", 0, {
      css: {
        display: "none"
      }
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    });
};
const Home = () => {
  //for height for banner
  const [animateCmp, setAnimateCmp] = useState(false);

  const completeAnimation = () => {
    setAnimateCmp(!animateCmp);
  };
  useEffect(() => {
    animateHome(completeAnimation);
  }, []);
  return (
    <>
      {animateCmp === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
