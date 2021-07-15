import DesignMainPic from "../../assets/design-main-pic.jpg";
import DesignMiniPic1 from "../../assets/design-mini-pic1.jpg";
import DesignMiniPic2 from "../../assets/design-mini-pic2.jpg";

import "./Sections.scss";

export default function Sections() {
  return (
    <div className="sections">
      <section className="design">
        <h2 className="design__title">Design</h2>
        <span className="design__ability">
          <p className="design__ability__display">Designer</p>
          <span className="design__ability__line"></span>
          <p className="design__ability__soft">Programmer</p>
        </span>
        <p className="design__text">
          t volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie c
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
