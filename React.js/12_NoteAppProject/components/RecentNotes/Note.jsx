import React from "react";
import Notsdots from "./Notsdots";

import Deletebutton from "./Deletebutton";

const Note = (props) => {
  return (
    <div className="relative bg-yellow-400 h-60 w-50 rounded-lg p-4 text-black flex flex-col gap-2 rotate-2">
      <Notsdots />
      <Deletebutton idx = {props.idx} task = {props.task}  setTask={props.setTask}/>
      <div className="p-3 pt-0 pl-3.5 flex flex-col gap-2">
        <h3 className="text-xl rotate-2 font-bold text-black">
          {props.title}
        </h3>
        <p className="text-gray-500 rotate-2 font-medium text-lg">
          {props.details}
        </p>
      </div>
    </div>
  );
};

export default Note;
