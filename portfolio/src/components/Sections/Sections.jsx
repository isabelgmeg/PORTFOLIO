import DesignMainPic from "../../assets/design-main-pic.jpg";
import DesignMiniPic1 from "../../assets/design-mini-pic1.jpg";
import DesignMiniPic2 from "../../assets/design-mini-pic2.jpg";
import Circle from "../../assets/circle.png";
import "./Sections.scss";

export default function Sections() {
  return (
    <div className="sections">
      <section className="design">
        <h2 className="design__title">design</h2>
        <section className="design__decorative">
          <img src={Circle} alt="decorative element"></img>
        </section>
        <span className="design__ability">
          <p className="design__ability__display">
            <strong>Designer</strong>
          </p>
          <span className="design__ability__line"></span>
          <p className="design__ability__soft">Programmer</p>
        </span>
        <p className="design__text">
          for the past 8 years I have been working as a{" "}
          <em>
            <strong>GRAPHIC DESIGNER</strong>
          </em>{" "}
          AND{" "}
          <em>
            {" "}
            <strong>design project manager </strong>
          </em>
          for Springfield, a retail company present in 68 countries with{" "}
          <em>931 points of sale.</em>
        </p>
      </section>
      <section className="pics">
        <section className="pics__main">
          <img src={DesignMainPic} alt="Design section" />
        </section>
        <section className="pics__mini">
          <section className="pics__mini__wrapper">
            <img src={DesignMiniPic1} alt="Design mini section" />
          </section>
          <section className="pics__mini__wrapper">
            <img src={DesignMiniPic2} alt="Design mini section" />
          </section>
        </section>
      </section>
    </div>
  );
}
