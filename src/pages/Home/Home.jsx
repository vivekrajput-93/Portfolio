import Hero from "../../assets/27.png";
import "./Home.css";
import DownloadButton from "../../components/DownloadButton";
import hand from "../../assets/waving-hand-sign.svg" ;

export default function Home() {
  return (
    <div id="home" className="contain">
      <div className="item one">
        <h1 className="title">Hi! Vivek Singh
        </h1>
        <p className="desc">
          Front-end Developer 
          <br />
          High level experience in web-design and web developmnt knowledge, producing quality work
        </p>
        <DownloadButton />
      </div>
      <div className="item two">
        <img src={Hero} alt="hero" className="img" />
      </div>
    </div>
  );
}
