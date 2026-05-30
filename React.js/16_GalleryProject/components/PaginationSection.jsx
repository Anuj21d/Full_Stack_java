import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const PaginationSection = (props) => {
  return (
    <div
      className="flex justify-center gap-3 items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-slate-200/50 shadow-lg"
    >
      <button
        className="group p-3 rounded-full flex justify-center items-center"
        onClick={() => {
          props.count > 2 ? props.setCount(props.count - 1) : props.setCount(2);
          props.setImages([]);
        }}
        style={{
          pointerEvents: props.count === 2 ? "none" : "auto",
          opacity: props.count === 2 ? 0.5 : 1,
        }}
      >
        <ChevronLeft
          size={16}
          className="text-[#0F172A]"
        />
      </button>
      <span className="font-bold text-lg py-3 px-5 rounded-full flex justify-center items-center bg-[#0F172A] text-white">{props.count-1}</span>
      <button
        className="group p-3 rounded-full flex justify-center items-center"
        onClick={() => {
          if (props.count < props.totalPages) {
            props.setCount(props.count + 1);
            props.setImages([]);
          }
        }}
        style={{
          pointerEvents: props.count === props.totalPages ? "none" : "auto",
          opacity: props.count === props.totalPages ? 0.5 : 1,
        }}
      >
        <ChevronRight
          size={16}
          className="text-[#0F172A]"
        />
      </button>
    </div>
  );
};

export default PaginationSection;
