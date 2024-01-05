import React, { useRef, useState, useEffect } from "react";
import "./list.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../listItem/listItem";
import axios from "axios";

function List(props) {
  const [data, setData] = useState([]);
  const listRef = useRef();
  const [slideNum, setSlideNum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handelArrow = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNum > 0) {
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
      setSlideNum(slideNum - 1);
    }
    if (direction === "right" && 10 > slideNum) {
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
      setSlideNum(slideNum + 1);
    }
  };

  return (
    <div className="list">
      <span className="list-title">continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="slider-arrow left"
          onClick={() => handelArrow("left")}
        />
        <div className="content" ref={listRef}>
          {data.map((item) => (
            <ListItem
              image={item.Images}
              key={item.imdbID}
              num={props.num}
              time={item.Runtime}
              year={item.Released}
              ratting={item.imdbRating}
            />
          ))}
        </div>
        <ArrowForwardIosIcon
          className="slider-arrow right"
          onClick={() => {
            handelArrow("right");
          }}
        />
      </div>
    </div>
  );
}

export default List;
