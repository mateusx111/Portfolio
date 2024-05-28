import React from "react";

const BordersButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700 
      rounded-lg"
      />
      <div
        className=" px-6 py-2  bg-black rounded-[6px]  relative  transition
       duration-200 text-white hover:bg-transparent flex items-center justify-center gap-2"
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default BordersButton;
