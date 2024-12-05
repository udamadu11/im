import Icon from "@/components/Icon";
import "./BackToTopButton.scss";
import React from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`top-link ${isVisible ? "show" : "hide"}`}
      type="button"
      onClick={scrollToTop}
    >
      <Icon icon="/icons/chevron-up-solid.svg" />
    </button>
  );
};

export default BackToTopButton;
