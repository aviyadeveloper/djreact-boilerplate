import React, { useState } from "react";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState<Boolean>(false);
  window.addEventListener("scroll", function(this, event) {
    this.scrollY > window.innerHeight ? setShow(true) : setShow(false);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button className="button back-to-top fadeIn" onClick={scrollToTop}>
        top
      </button>
    )
  );
};

export default BackToTop;
