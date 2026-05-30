import React from "react";

const ImageCard = (props) => {
  return (
    <div
      className="relative group rounded-2xl w-[230px] h-[289px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <img
        className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        src={props.download_url}
        alt={props.author}
      />
      <h2 className="text-shadow-lg/30 absolute top-0 left-0 p-5 text-white font-bold text-lg">
        Author Name : {props.author}
      </h2>
    </div>
  );
};

export default ImageCard;
