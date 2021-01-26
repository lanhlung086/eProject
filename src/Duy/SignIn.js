import React, {useEffect} from 'react';
import './css/SignIn.css';
import {useHistory} from 'react-router-dom';

function SignIn() {
    const history = useHistory();
    useEffect(() => {
        const toHomePage = () => {
            const homeLink = document.querySelector(".login__logo");
            homeLink.addEventListener("click", () => {
                history.push("/")
            })
        }
        toHomePage();

        const activateButton = () => {
            const signInButton = document.querySelector(".login__signInButton");
            const signUpButton = document.querySelector(".login__signUpButton");

            signInButton.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("login__signInButton--active")
            })
            signUpButton.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("login__signUpButton--active")
            })
            signUpButton.addEventListener("click", () => {
                history.push("/signup");
            })
            window.addEventListener("mouseup", () => {
                signInButton.classList.remove("login__signInButton--active");
                signUpButton.classList.remove("login__signUpButton--active")
            })
        }
        activateButton();

        const inputValidity = () => {
            const emailInput = document.querySelector(".login__loginForm > input[type='email']");
            const passwordInput = document.querySelector(".login__loginForm > input[type='password']");
            const emailMessage = document.querySelector(".login__loginForm > input[type='email'] + p");
            const passwordMessage = document.querySelector(".login__loginForm > input[type='password'] + p");

            emailInput.addEventListener("invalid", (event) => {
                event.preventDefault();
                event.target.classList.add("input--invalid");
                if(event.target.validity.valueMissing) {
                    emailMessage.style.display = "block";
                    emailMessage.innerHTML = `<i class="fas fa-exclamation"></i> Enter your email`;
                }
                else if(event.target.validity.typeMismatch) {
                    emailMessage.style.display = "block";
                    emailMessage.innerHTML = `<i class="fas fa-exclamation"></i> Enter a valid email address`;
                }
            })
            emailInput.addEventListener("input", (event) => {
                event.target.classList.remove("input--invalid");
                emailMessage.style.display = "none";
            })

            passwordInput.addEventListener("invalid", (event) => {
                event.preventDefault();
                event.target.classList.add("input--invalid");
                if(event.target.validity.valueMissing) {
                    passwordMessage.style.display = "block";
                    passwordMessage.innerHTML = `<i class="fas fa-exclamation"></i> Enter your password`;
                }
            })
            passwordInput.addEventListener("input", (event) => {
                event.target.classList.remove("input--invalid");
                passwordMessage.style.display = "none";
            })
        }
        inputValidity();
    })
    return (
        <>
            <div className="login">
                <div className="login__logo">
                    Fan<img src="imgs/fan-logo.png" alt=""/>Fan
                </div>
                <div className="login__signIn">
                    <h3>Sign-In</h3>
                    <form className="login__loginForm" method="post" action="">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" required autoFocus/>
                        <p><i className="fas fa-exclamation"></i></p>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" required/>
                        <p><i className="fas fa-exclamation"></i></p>
                        <button className="login__signInButton" type="submit">Sign In</button>
                    </form>
                    <p className="login__rules">By signing-in, you agree to FANoFAN's Conditions of Use and Privacy Notice.</p>
                </div>
                <p className="login__newToFOF">New to FANoFAN?</p>
                <button className="login__signUpButton" type="button">Create your FANoFAN account</button>
            </div>
        </>
    )
}

export default SignIn;