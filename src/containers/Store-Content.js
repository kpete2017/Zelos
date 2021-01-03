import React from "react";
import "./Store-Page.css";
import FooterContent from "./Footer-Content";
import ItemOne from "../components/ItemOne";
import ItemTwo from "../components/ItemTwo";
import ItemThree from "../components/ItemThree";

export default function StoreContent({ store }) {
  let width = window.innerWidth;
  return (
    <>
      <div className="store-page2">
        <div className="black-background2">
          <div className="store-background-section">
            <div className="item-one">
              <h1>{store.item1_name}</h1>
              <ItemOne store={store} />
            </div>
            <div className="item-two">
              <h1>{store.item2_name}</h1>
              <ItemTwo store={store} />
            </div>
            <div className="item-three">
              <h1>{store.item3_name}</h1>
              <ItemThree store={store} />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Has issues on the store screen within mobile view heights */}
      {width > 800 ? <FooterContent /> : null}
    </>
  );
}
