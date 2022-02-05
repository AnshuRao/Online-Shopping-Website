import React  from "react";

import './custome-button.style.scss';


const CustomButton = ({children ,isGoogleSignIn, ...otherButtonProps})=>{
    return(
        <button className={` ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherButtonProps}>
        {children}

        </button>
    )
}

export default CustomButton;