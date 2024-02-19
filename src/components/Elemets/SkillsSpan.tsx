import React from "react";
import { ElementType } from "../../Utils/ElementType";

const SkillSpan: React.FC<ElementType> = ({ children }) => {
  return (
    <span className="p-5 hover:bg-gray-50 transition duration-200 hover:-translate-y-1 text-gray-900 font-bold text-sm md:text-lg font-Nunito">
      {children}
    </span>
  );
};

export default SkillSpan;
