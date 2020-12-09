import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import demo from '../assets/jersey_back.png'
import './ItemOne.css'

const stripePromise = loadStripe('pk_live_51HvTH9BzBvvjMwb2ZxV2DjniRbTrNMrYskiWWoPbTqfXlxJyvqefA6hIkHBuV2MkYavx4nCWmG4edhM6aRN04tO300uz6oNXiJ');

const Checkout = () => {

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1HwZeABzBvvjMwb2t2bc2ULu',
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
      <img id="jersey_image" src={demo} alt="Zelos Esports"></img>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
