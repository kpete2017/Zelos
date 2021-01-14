import React from "react";
import "./Store-Page.css";
import Item from "../components/Item";

export default function StoreContent({ items }) {
  return (
    <>
      <div className="store-page2">
        <div className="store-background-section">
          {items.map((item) => {
            return (
              <div className="item">
                <h1>{item.name}</h1>
                <Item store={item} key={item.id}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
