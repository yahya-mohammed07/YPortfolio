import React from "react";
import { ElementType } from "../../Utils/ElementType";

const SkillSpan: React.FC<ElementType> = ({ children }) => {
  return (
    <span className="justify-center items-center flex p-5 shadow-md transition duration-200 hover:-translate-y-1 text-lg md:text-xl min-h-24 font-Fredoka overflow-auto rounded-sm bg-neutral-50 border text-orange-950">
      {children}
    </span>
  );
};

export default SkillSpan;
