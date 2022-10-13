import React, { useState, useEffect, useRef } from "react";
import todolist from "../assets/todolist.png";
import todolist1 from "../assets/todolist1.png";
import todolist2 from "../assets/todolist2.png";

const featuredProducts = [todolist, todolist1, todolist2];

let count = 0;
let slideInterval;

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
// eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img height="500px" width="500px" src={featuredProducts[currentIndex]} className={props.className} alt={props.alt} />
      </div>
    </div>
  );
}

export default Slider;