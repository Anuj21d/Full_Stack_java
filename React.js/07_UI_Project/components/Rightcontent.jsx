import React from "react";
import RightContentCard from "./RightContentCard";

const Rightcontent = (props) => {
  console.log(props.user);
  return (
    <div className="overflow-hidden w-3/5 h-full">
      <div
        id="rightCard"
        className="h-full flex rounded-4xl p-6 gap-10 min-w-max animate-scroll"
      >
        {
          props.user.map(function(elem ,idx) {
            return <RightContentCard id = {idx} img = {elem.img} tag={elem.tag} key ={idx}/>;
          })
        }
      </div>
    </div>
  );
};

export default Rightcontent;
