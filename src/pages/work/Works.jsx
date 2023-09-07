import React, { useState } from "react";
import { data, ProjectNav } from "./data";
import WorkItems from "./workItems";

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleNavClick = (category) => {
    setSelectedCategory(category);
  };


  const filteredData = selectedCategory === "All"
    ? data
    : data.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="work__filters">
        {ProjectNav.map((nav, index) => (
          <span
            onClick={() => handleNavClick(nav.name)}
            className={`work__nav ${nav.name === selectedCategory ? "active-work" : ""}`}
            key={index}
          >
            {nav.name}
          </span>
        ))}
      </div>

      <div className="work__container">
        {filteredData.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Works;
