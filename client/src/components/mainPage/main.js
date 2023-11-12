import { useEffect, useState } from "react";
import "./main.css";
import MainCategory from "./category/maincategory";
import IntroSlider from "./introSlider/introSlider";
import SlideShow from "./imageScroll/image";
import { Issue } from "./issue/issue";
import Addask from "./addask/addask";
import slider1 from "./../image/slider1.png";
import slider2 from "./../image/slider2.png";
import slider3 from "./../image/slider3.png";

function Main() {
  const [sections, setSections] = useState([]);
  const sectionPoint = 100;

  useEffect(() => {
    const allSections = document.querySelectorAll("section");
    setSections(allSections);

    function revealSections() {
      const windowHeight = window.innerHeight;

      allSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - sectionPoint) {
          section.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealSections);

    return () => {
      window.removeEventListener("scroll", revealSections);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const images = [slider1, slider2, slider3];

  return (
    <div className="backGround">
      <IntroSlider />
      <div className="container">
        <section>
          <MainCategory />
        </section>
        <section>
          <Issue />
        </section>
        <section>
          <SlideShow images={images} />
        </section>
        <section>
          <Addask />
        </section>
      </div>
    </div>
  );
}

export default Main;
