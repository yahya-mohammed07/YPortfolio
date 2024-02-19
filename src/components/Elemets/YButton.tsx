import React, { ReactNode } from "react";

interface YButtonType {
  children: ReactNode
}

const YButton:React.FC<YButtonType> = ({children}) => {
  return (
    <button className="border p-2 rounded-sm cursor-pointer bg-gray-50 hover:bg-blue-500 hover:text-white transition duration-200 font-Roboto text-xl">
      {children}
    </button>
  );
};

export default YButton;
