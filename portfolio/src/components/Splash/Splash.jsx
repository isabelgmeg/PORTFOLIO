import "./Splash.scss";

import StickerSun from "../../assets/sticker-sun.png";
import StickerEye from "../../assets/sticker-eye.png";
import PersonalPic from "../../assets/personalPic.png";

export default function Splash() {
  return (
    <div className="splash">
      <div className="hello">
        <section className="hello__arrow"></section>
        <section className="hello__text">
          <span className="hello__text__text">Hello</span>
          <span className="hello__text__sticker">
            <img src={StickerEye} alt="sticker"></img>
          </span>
        </section>
        <section className="hello__world">
          <span className="hello__world__text">World</span>
          <span className="hello__world___dot"></span>
        </section>
        <section className="hello_about">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamco
          </p>
        </section>
        <section className="abilities">
          <span>
            <p className="abilities__display">Designer</p>
            <span className="abilities__line"></span>
            <p className="abilities__soft">Developer</p>
          </span>
          <span>
            <p className="abilities__display">Programming</p>
            <span className="abilities__line"></span>
            <p className="abilities__soft">Designing</p>
          </span>
        </section>
        <section className="sticker">
          <img src={StickerSun} alt="sun Sticker" />
        </section>
      </div>
      <div className="welcome">
        <section className="welcome__pic">
          <img src={PersonalPic} alt="personal Pic" />
        </section>
        <section className="welcome__text">
          <p>welcome</p>
        </section>
      </div>
    </div>
  );
}
