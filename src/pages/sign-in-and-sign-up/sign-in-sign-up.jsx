import React from "react";

import './sign-in-and-sign-up.scss';
import SignIN from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.compnent";

const SignInAndSignUpPage =()=>{

    return(
        <div className="sign-in-sign-up">
         <SignIN/>
        <SignUp/>

        </div>
       
    )
}

export default SignInAndSignUpPage;
