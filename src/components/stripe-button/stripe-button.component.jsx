import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePublishableKey = "pk_test_nISLfgLJADv9CbW962PO5QpV00NqmHWsiV";
  const onToken = token => {
    console.log(token);
    alert("Pago exitoso");
  };

  return (
    <StripeCheckout
      label='Pagar Ahora'
      name='React Ecommerce'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`El total es $${price}`}
      amount={priceForStripe}
      panelLabel='Pagar Ahora'
      token={onToken}
      stripeKey={stripePublishableKey}
    />
  );
};

export default StripeButton;
