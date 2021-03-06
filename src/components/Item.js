import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import SimpleImageSlider from "react-simple-image-slider";
import "./items.css";

const stripePromise = loadStripe(
  "pk_live_51HvTH9BzBvvjMwb2ZxV2DjniRbTrNMrYskiWWoPbTqfXlxJyvqefA6hIkHBuV2MkYavx4nCWmG4edhM6aRN04tO300uz6oNXiJ"
);

const Checkout = ({ store }) => {
  const images = [{ url: store.picture_1 }, { url: store.picture_2 }];

  const [activeSize, setActiveSize] = useState("");

  const handleClick = async () => {
    console.log(store)
    let item;
    if (activeSize) {
      switch (activeSize) {
        case "Small":
          item = store.small_id;
          break;
        case "Medium":
          item = store.med_id;
          break;
        case "Large":
          item = store.large_id;
          break;
        case "ExtraLarge":
          item = store.xl_id;
          break;
        case "TwoExtraLarge":
          item = store.two_xl_id;
          break;
        default:
          item = "Error";
          break;
      }

      const stripe = await stripePromise;
      await stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: item,
              quantity: 1,
            },
          ],
          mode: "payment",
          successUrl: "https://www.zelosesports.com/success",
          cancelUrl: "https://www.zelosesports.com/store",
          shippingAddressCollection: {
            allowedCountries: ["US", "CA"],
          },
        })
    } else {
      alert("Please enter a size before proceeding to checkout");
    }
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  let width = window.innerWidth;

  return (
    <div className="sr-root">
      <p>{store.ship}</p>
      <div className="size-radio-input">
        {store.small_stock ? (
          activeSize === "Small" ? (
            <p className="size-button-active">S</p>
          ) : (
            <p className="size-button" onClick={() => handleSizeClick("Small")}>
              S
            </p>
          )
        ) : (
          <p className="size-button-dim">S</p>
        )}
        {store.med_stock ? (
          activeSize === "Medium" ? (
            <p className="size-button-active">M</p>
          ) : (
            <p
              className="size-button"
              onClick={() => handleSizeClick("Medium")}
            >
              M
            </p>
          )
        ) : (
          <p className="size-button-dim">M</p>
        )}
        {store.large_stock ? (
          activeSize === "Large" ? (
            <p className="size-button-active">L</p>
          ) : (
            <p className="size-button" onClick={() => handleSizeClick("Large")}>
              L
            </p>
          )
        ) : (
          <p className="size-button-dim">L</p>
        )}
        {store.xl_stock ? (
          activeSize === "ExtraLarge" ? (
            <p className="size-button-active">XL</p>
          ) : (
            <p
              className="size-button"
              onClick={() => handleSizeClick("ExtraLarge")}
            >
              XL
            </p>
          )
        ) : (
          <p className="size-button-dim">XL</p>
        )}
        {store.two_xl_stock ? (
          activeSize === "TwoExtraLarge" ? (
            <p className="size-button-active">2XL</p>
          ) : (
            <p
              className="size-button"
              onClick={() => handleSizeClick("TwoExtraLarge")}
            >
              2XL
            </p>
          )
        ) : (
          <p className="size-button-dim">2XL</p>
        )}
      </div>
      <h4 className="submit-button" role="link" onClick={handleClick}>
        Buy ${store.price}
      </h4>
      {width > 800 ? (
        <SimpleImageSlider
          style={{ margin: ".5rem" }}
          height="55vh"
          width="25vw"
          images={images}
          showNavs={true}
          showBullets={true}
        />
      ) : (
        <img
          alt="Zelos Esports"
          height="35%"
          width="95%"
          style={{ marginTop: "10%" }}
          src={images[0].url}
        />
      )}
    </div>
  );
};

export default Checkout;
