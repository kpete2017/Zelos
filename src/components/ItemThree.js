import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import SimpleImageSlider from "react-simple-image-slider";
import './items.css'

const stripePromise = loadStripe('pk_live_51HvTH9BzBvvjMwb2ZxV2DjniRbTrNMrYskiWWoPbTqfXlxJyvqefA6hIkHBuV2MkYavx4nCWmG4edhM6aRN04tO300uz6oNXiJ');

const Checkout = ({store}) => {

  const images = [
    { url: store.item3_picture1 },
    { url: store.item3_picture2 }
  ];
  

  const [activeSize, setActiveSize] = useState("");

  const handleClick = async () => {
    if(activeSize) {

      let item;

      switch(activeSize) {
        case "Small":
           item = "price_1HyPz6BzBvvjMwb2xge1jLZk";
          break;
        case "Medium":
          item = "price_1HyPzOBzBvvjMwb2LZLBSsy8";
          break;
        case "Large":
          item = "price_1HyPzgBzBvvjMwb2cjZGNaiP";
          break;
        case "ExtraLarge":
          item = "price_1HyPzsBzBvvjMwb2NnwxdeuL";
          break;
        case "TwoExtraLarge":
          item = "price_1HyQ01BzBvvjMwb2CQrh0nwu"
          break;
        default:
          item = "Error"
          break;
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        lineItems: [{
          price: item,
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: 'https://www.zelosesports.com/',
        cancelUrl: 'https://www.zelosesports.com/store',
        shippingAddressCollection: {
          allowedCountries: ['US', 'CA'],
        }
      });
    } else {
      alert("Please enter a size before proceeding to checkout")
    }
  };

  const handleSizeClick = (size) => {
    setActiveSize(size)
  };
  
  let width = window.innerWidth;
  return (
    <div className="sr-root">
      <p>{store.item3_ship}</p>
      <div className="size-radio-input">
        {activeSize === "Small" ? <p className="size-button-active">S</p> : <p className="size-button" onClick={() => handleSizeClick("Small")}>S</p>}  
        {activeSize === "Medium" ? <p className="size-button-active">M</p> : <p className="size-button" onClick={() => handleSizeClick("Medium")}>M</p>}  
        {activeSize === "Large" ? <p className="size-button-active">L</p> : <p className="size-button" onClick={() => handleSizeClick("Large")}>L</p>}  
        {activeSize === "ExtraLarge" ? <p className="size-button-active">XL</p> : <p className="size-button" onClick={() => handleSizeClick("ExtraLarge")}>XL</p>}  
        {activeSize === "TwoExtraLarge" ? <p className="size-button-active">2XL</p> : <p className="size-button" onClick={() => handleSizeClick("TwoExtraLarge")}>2XL</p>}  
      </div>
      <h4 className="submit-button" role="link" onClick={handleClick}>
        Buy {store.item3_price}$
      </h4>
      {width > 800 ? 
      <SimpleImageSlider
        style={{margin: ".5rem", }}
        height="60%"
        width="32%"
        images={images}
        showNavs={true}
        showBullets={true}
        />
      :
        <img alt="Zelos Esports" height="50%" width="95%" style={{marginTop: "10%"}} src={images[0].url}/>
      }
    </div>
  ); 
};

export default Checkout;
