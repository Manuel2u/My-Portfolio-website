import { useState, useEffect, useRef } from "react";

interface CarouselProps {
  img1: string;
  img2: string;
  img3: string;
  className?: string;
  alternative?: string;
}

let count = 0;
let slideInterval: NodeJS.Timeout;

function Carousel({ img1, img2, img3, className, alternative }: CarouselProps) {
  const featuredProducts = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

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
    slideRef.current?.classList.add("fade-anim");
  };

  useEffect(() => {
    const currentSlide = slideRef.current;
    if (currentSlide) {
      currentSlide.addEventListener("animationend", removeAnimation);
      currentSlide.addEventListener("mouseenter", pauseSlider);
      currentSlide.addEventListener("mouseleave", startSlider);
    }

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img
          height="500px"
          width="500px"
          src={featuredProducts[currentIndex]}
          className={className}
          alt={alternative}
        />
      </div>
    </div>
  );
}

export default Carousel;
