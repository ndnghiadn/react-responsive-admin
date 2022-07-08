import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import "../../sass/login.scss";
import InputForm from "../Elements/Input/InputForm";
import InputFormPassword from "../Elements/Input/InputPassword";
function Login() {
 

  return (
    <div className="authentication-bg authentication-bg-pattern">
      <div className="account-pages pt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card bg-pattern">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <div className="auth-logo">
                      <a
                        href="index.html"
                        className="logo logo-dark text-center"
                      >
                        <span className="logo-lg">
                          <img
                            src="assets/images/logo-dark.png"
                            alt
                            height={22}
                          />
                        </span>
                      </a>
                      <a
                        href="index.html"
                        className="logo logo-light text-center"
                      >
                        <span className="logo-lg">
                          <img
                            src="assets/images/logo-light.png"
                            alt
                            height={22}
                          />
                        </span>
                      </a>
                    </div>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                  </div>
                  <form action="#">
                    <div className="mb-3">
                     <InputForm label="Email Address" type="email" id="emailaddress" placeHolder="Please enter your email"/>
                    </div>
                    <div className="mb-3">
                   <InputFormPassword />
                     
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-signin"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-signin"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="text-center d-grid">
                      <button className="btn btn-primary" type="submit">
                        Log In
                      </button>
                    </div>
                  </form>
                
                </div>
               
              </div>
             
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p>
                   
                    <a
                      href="auth-recoverpw.html"
                      className="text-white-50 ms-1"
                    >
                      Forgot your password?
                    </a>
                  </p>
               
                </div>
              
              </div>
            
            </div>
            
          </div>

        </div>
    
      </div>
    </div>
  );
}

export default Login;
