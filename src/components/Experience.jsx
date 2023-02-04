import React, { useContext } from "react";
import { ThemeContext } from "../context";


const Experience = () => {

  const theme = useContext(ThemeContext);
  const textColor = theme === "light" ? "#212121" : "#f8f8f8";

  return (
    <div className="py-20" style={{ color: textColor }}>
      <h2 className="h2 text-4xl font-medium mb-10">Experience</h2>
      <div className="flex flex-col gap-y-5">
        <h3 className="text-xl lg:text-2xl font-medium">Systems Engineer - Infosys Pvt. Ltd. (August 2021 - Present)</h3>
        <p className="w-[100%] lg:w-[80%] pb-5">Working as a PeopleSoft Developer for a US based client.
          We get requests from the client about new features and fixes in their system and we build interfaces according to the requirement.
          I have been doining coding in PeopleCode language and SQL for database operations. </p>
      </div>
      <div className="w-[100%]  border "></div>
    </div>
  )
}

export default Experience