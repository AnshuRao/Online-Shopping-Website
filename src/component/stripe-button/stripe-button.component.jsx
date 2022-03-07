import React from "react";
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price})=>{
    const priceForStripe = price* 100;
    const publishableKey = 'pk_test_51KajhbSJxCC2iQACrtpQkSzJNegpCeOAYAjU2otCxFl3x6lE7CKgmKF668tGtZQ6HPONlRpWuCbSZ77rR8RBEaxg000fUH0ZWW'
 const onToken = token =>{
     console.log(token);
     alert('Payment Successful');
 }


    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price} `}
        amount={priceForStripe}
        panelLable = 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}

         />
    )


}

export default StripeCheckoutButton;