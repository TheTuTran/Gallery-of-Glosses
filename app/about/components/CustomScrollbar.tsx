"use client";

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface CustomScrollbarProps {
  scroll: number; // Current position of the scroll
  total: number; // Total scrollable distance
}

// CustomScrollbar is a reusable component that represents a visual scroll bar.
// The scroll bar's progress is controlled by the `scroll` and `total` props.
const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ scroll, total }) => {
  return (
    <>
      <div className="flex text-white items-center gap-2 pb-2">
        <span>Scroll down while over cards</span>

        <AiOutlineArrowRight className="arr-1" />

        <AiOutlineArrowRight className="arr-2" />
      </div>
      <div
        style={{
          // Dimensions and appearance of the scrollbar background
          height: "1px",
          background: "#d3d3d3",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div
          style={{
            // Dimensions and appearance of the scrollbar thumb
            // Its width is dynamically calculated based on the scroll position
            height: "100%",
            width: `${(scroll / total) * 100}%`,
            background: "#912727",
            borderRadius: "10px",
          }}
        />
      </div>
    </>
  );
};

export default CustomScrollbar;
