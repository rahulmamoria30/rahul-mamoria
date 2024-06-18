import React from "react";
import style from "./Hobbies.module.css";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import BookIcon from "@mui/icons-material/Book";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CreateIcon from "@mui/icons-material/Create";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

export default function Hobbies() {
  const hobbies = [
    { icon: <SportsCricketIcon />, text: "Watching and playing cricket" },
    { icon: <BookIcon />, text: "Reading books" },
    { icon: <TravelExploreIcon />, text: "Traveling" },
    { icon: <FitnessCenterIcon />, text: "Gym" },
    { icon: <CreateIcon />, text: "Pencil drawing" }
  ];

  return (
    <div className={style.hobbies}>
      <h1 className="heading">
        {" "}
        <EmojiObjectsIcon className={style.headingIcon} /> My Hobbies
      </h1>

      <div className={style.hobbies_container}>
        {hobbies.map((hobby, index) => (
          <div key={index} className={style.listItem}>
            <p className={style.icon}>{hobby.icon} </p>
            <p className={style.hobby_name}>{hobby.text}</p>
        
          </div>
        ))}
      </div>
    </div>
  );
}
