import React from "react";
import ImageCard from "./ImageCard";


const GetImage = (props) => {
    const images = props.images;
  return (
    <div className="w-full h-full px-70 flex flex-wrap items-center justify-center gap-8">
      {images.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
};

export default GetImage;
