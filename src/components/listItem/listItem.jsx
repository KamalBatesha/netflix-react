import React, { useRef, useState } from "react";
import "./listItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

function ListItem(props) {
  // const hoverRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video src={trailer} autoPlay={true} loop />
      ) : (
        <img src={props.image[props.num]} alt="" />
      )}

      <div className="item-info">
        <div className="item-data">
          <span>Time : {props.time}</span>
          <span>Year : {props.year}</span>
          <span>Ratting : {props.ratting}</span>
        </div>
        <div className="item-icons">
          <PlayArrowIcon
            className="icon"
            onClick={() => (window.location.href = "/Watch")}
          />
          <AddIcon className="icon" />
          <ThumbUpOutlinedIcon className="icon" />
          <ThumbDownOffAltOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ListItem;

// onMouseOver={() => {
//   hoverRef.current.style.display = "block";
//   hoverRef.current.style.visibility = "visible";
// }}
// onMouseOut={() => {
//   hoverRef.current.style.display = "none";
//   hoverRef.current.style.visibility = "hidden";
// }}
