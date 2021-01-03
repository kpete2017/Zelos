import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const handleScrollClick = (element) => {
    const findElement = document.getElementById(element);
    var offSet = getOffset(findElement).top;
    window.scrollTo({
      top: offSet - 60,
      left: 0,
      behavior: "smooth",
    });
  };

  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  };

  return (
    <div className="sidebar">
      <div className="dot">
        <li onClick={() => handleScrollClick("title")}>
          <span className="dot-text">Title</span>
        </li>
      </div>
      <div className="dot">
        <li onClick={() => handleScrollClick("about")}>
          <span className="dot-text">About</span>
        </li>
      </div>
      <div className="dot">
        <li onClick={() => handleScrollClick("store")}>
          <span className="dot-text">Store</span>
        </li>
      </div>
      <div className="dot">
        <li onClick={() => handleScrollClick("team")}>
          <span className="dot-text">The Elite</span>
        </li>
      </div>
    </div>
  );
}
