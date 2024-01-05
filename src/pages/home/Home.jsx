import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Featured from "../../components/featured/featured";
import List from "../../components/list/list";
// import Navbar from '../../components/navbar/navbar'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List num={0} />
      <List num={1} />
      <List num={2} />
      <List num={3} />
    </div>
  );
}

export default Home;
