import React from "react";
import Hero from "../../assets/27.png";
import "./Home.css";
import DownloadButton from "../../components/DownloadButton";
import hand from "../../assets/waving-hand-sign.svg";

export default function Home() {
  return (
    <div id="home" className="contain">
      <div className="item-one">
        <h1 className="title">Hi! Vivek Singh</h1>
        <h3>Mern-Developer</h3>
        <p className="desc">
          High-level experience in web design and web development, producing
          quality work
        </p>
        <DownloadButton />
      </div>
      <div className="item-two">
        <img src={Hero} alt="Hero" className="img" />
      </div>
    </div>
  );
  
}
