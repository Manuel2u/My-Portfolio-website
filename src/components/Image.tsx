import React from "react";

interface ImageProps {
  link: string;
  className?: string;
  alternative?: string;
  height?: string;
  width?: string;
  alt?: string;
}

function Image({ link, className, alternative, height, width, alt }: ImageProps) {
  return (
    <img
      src={link}
      className={className}
      alt={alternative || alt}
      height={height}
      width={width}
    />
  );
}

export default Image;
