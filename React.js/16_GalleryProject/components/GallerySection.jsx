import React from "react";

const GallerySection = (props) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>{props.printImage}</div>
    </div>
  );
};

export default GallerySection;
