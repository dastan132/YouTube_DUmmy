import React from "react";
import Buttons from "./Buttons";

const buttonsList = [
  "All",
  "Watches",
  "Music",
  "Podcasts",
  "Gaming",
  "Mixes",
  "Combat Sports",
  "SuperHero",
  "Test drive",
  "Superhero movies",
  "Cricket",
  "UFC",
  "WWE"
];

const ShortButtons = () => {
  return (
    <div className="flex">
      {buttonsList.map((button,index) => {
       return <Buttons key={index} name={button} />;
      })}
    </div>
  );
};

export default ShortButtons;
