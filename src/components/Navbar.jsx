import React, { useContext, useState } from "react";
import { ThemeContext } from "../context";

const Navbar = ({ setTheme}) => {
  const theme = useContext(ThemeContext);
  const textColor = theme === "light" ? "#212121" : "#f8f8f8";
  // console.log(theme)

  return (
    <div className="flex  justify-between items-center py-5 ">
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
      <ul className="flex gap-x-6">
        <li style={{color: textColor}}>HOME</li>
        <li style={{color: textColor}}>PROJECTS</li>
        <li style={{color: textColor}}>BLOG</li>
        <li style={{color: textColor}}>CONTACT ME</li>
        <li style={{color: textColor}} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</li>
      </ul>
    </div>
  );
};

export default Navbar;
