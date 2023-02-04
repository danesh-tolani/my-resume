import React, { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

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
        <li>HOME</li>
        <li>PROJECTS</li>
        <li>BLOG</li>
        <li>CONTACT ME</li>
      </ul>
    </div>
  );
};

export default Navbar;
