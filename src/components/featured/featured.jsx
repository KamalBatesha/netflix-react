import React from "react";
import "./featured.css";
import matrix_poster from "../../images/matrix-poster.jpg";
import matrix from "../../images/matrix.webp";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

function Featured(props) {
  return (
    <div className="featured">
      {props.type && (
        <div className="category">
          <span>{props.type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={matrix_poster} alt="" />
      <div className="info">
        <img src={matrix} alt="" className="w-100" />
        <span className="des d-block w-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons w-100">
          <button className="play">
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
