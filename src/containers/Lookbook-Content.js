import React from "react";
import "./lookbook.css";
import Fade from "react-reveal/Fade";

const Lookbook = ({ images }) => {
  let list = [];

  list.push(
    images.lookbook1,
    images.lookbook2,
    images.lookbook3,
    images.lookbook4,
    images.lookbook5,
    images.lookbook6,
    images.lookbook7,
    images.lookbook8,
    images.lookbook9,
    images.lookbook10,
    images.lookbook11,
    images.lookbook12,
    images.lookbook13,
    images.lookbook14,
    images.lookbook15,
    images.lookbook16,
    images.lookbook17,
    images.lookbook18,
    images.lookbook19,
    images.lookbook20
  );

  let width = window.innerWidth;

  return (
    <Fade>
      <div className="lookbook">
        <h1>Lookbook</h1>
        {list.map((image) => {
          if (image) {
            if (width > 800) {
              return (
                <img
                  alt="Zelos-Esports"
                  style={{
                    backgroundSize: "cover",
                    width: "70%",
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "0 auto",
                    marginTop: "1rem",
                  }}
                  src={image}
                  key={image}
                />
              );
            } else {
              return (
                <img
                  alt="Zelos-Esports"
                  style={{
                    backgroundSize: "cover",
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "0 auto",
                    marginTop: "1rem",
                  }}
                  src={image}
                  key={image}
                />
              );
            }
          } else {
            return null;
          }
        })}
      </div>
    </Fade>
  );
};

export default Lookbook;
