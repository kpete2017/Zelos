import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import SimpleImageSlider from "react-simple-image-slider";
import './items.css'

const stripePromise = loadStripe('pk_live_51HvTH9BzBvvjMwb2ZxV2DjniRbTrNMrYskiWWoPbTqfXlxJyvqefA6hIkHBuV2MkYavx4nCWmG4edhM6aRN04tO300uz6oNXiJ');

const images = [
  { url: "https://i.imgur.com/3V6UJqb.jpg" },
  { url: "https://i.imgur.com/nizozNy.jpg" }
];

const Checkout = () => {

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1HwZrXBzBvvjMwb283H3Smj0',
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'https://www.zelosesports.com/',
      cancelUrl: 'https://www.zelosesports.com/store',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA'],
      }
    });
  };
  return (
    <div className="sr-root">
      <p>Estimated ship time: 2 weeks</p>
      <h4 className="submit-button" role="link" onClick={handleClick}>
        Buy 30$
      </h4>
      <SimpleImageSlider
        style={{margin: ".5rem"}}
        className="slider"
        height="60%"
        width="32%"
        images={images}
        showNavs={true}
        showBullets={true}
      />
    </div>
  );
};

export default Checkout;
