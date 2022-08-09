import React from 'react';
import '../styles/Login.scss';


const Login =()=>{
    return(
        <div className="login">
        <div className="form-container">
            <img src="./logo/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
            <label for="pasword" className="label">password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
        
            <label for="new-pasword" className="label">password</label>
            <input type="password" id="new-password" placeholder="*********" className="input input-new-password"/>

            <input type="submit" value="Confirm" className="primary-button"/>

            </form>

        </div>
    </div>


    );

    
}

export default Login;

