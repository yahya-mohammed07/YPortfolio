import React from "react";
import { ElementType } from "../../Utils/ElementType";

const YButton: React.FC<ElementType> = ({ children }) => {
  return (
    <button className="border p-2 rounded-sm cursor-pointer  hover:bg-orange-800 hover:text-white transition duration-200 font-Roboto text-xl">
      {children}
    </button>
  );
};

export default YButton;
