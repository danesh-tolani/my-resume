import React, { useContext, useState } from "react";
import { ThemeContext } from "../context";

const Navbar = ({ setTheme}) => {
  const theme = useContext(ThemeContext);
  const textColor = theme === "light" ? "#212121" : "#f8f8f8";
  // console.log(theme)

  return (
    <div className="flex flex-col lg:flex-row sm:border sm:border-red-400 justify-between items-center py-5 ">
      {theme === "dark" ? (
        <img
          src="./logo_dark.png"
          className="w-20"
          alt="logo"></img>
      ) : (
        <img
          src="./logo_light.png"
          className="w-20"
          alt="logo"></img>
      )}
      <ul className="flex gap-x-6 items-center">
        <li className = "cursor-pointer text-xs lg:text-lg" style={{color: textColor}}>HOME</li>
        <li className = "cursor-pointer text-xs lg:text-lg" style={{color: textColor}}>PROJECTS</li>
        <li className = "cursor-pointer text-xs lg:text-lg" style={{color: textColor}}>BLOG</li>
        <li className = "cursor-pointer text-xs lg:text-lg" style={{color: textColor}}>CONTACT ME</li>
        <button className = "cursor-pointer text-xs lg:text-lg py-1 lg:py-2 px-3 lg:px-6 rounded-lg" style={{color: textColor, border: `1px solid ${textColor}`}} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "dark".toUpperCase() : "light".toUpperCase()} Mode</button>
      </ul>
    </div>
  );
};

export default Navbar;
