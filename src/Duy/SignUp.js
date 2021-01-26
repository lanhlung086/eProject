import React, {useEffect} from "react";
import './css/SignUp.css';
import {useHistory, Link} from "react-router-dom";
import {returnTrue} from "react-currency-format/lib/utils";

function SignUp() {
    const history = useHistory();

    useEffect(() => {
        const toHomePage = () => {
            const homeLink = document.querySelector(".signUp__logo");
            homeLink.addEventListener("click", () => {
                history.push("/")
            })
        }
        toHomePage();

        const activateButton = () => {
            const signUpButton = document.querySelector(".signUp__createAccButton");

            signUpButton.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("signUp__createAccButton--active");
            })
            window.addEventListener("mouseup", () => {
                signUpButton.classList.remove("signUp__createAccButton--active");
            })
        }
        activateButton();

        const inputValidity = () => {
            const inputForm = document.querySelector(".signUp__form");
            const nameInput = document.querySelector(".signUp__form > input[id='userName']");
            const nameMessage = document.querySelector(".signUp__form > input[id='userName'] + p");
            const emailInput = document.querySelector(".signUp__form > input[id='userEmail']");
            const emailMessage = document.querySelector(".signUp__form > input[id='userEmail'] + p");
            const passwordInput = document.querySelector(".signUp__form > input[id='userPassword']");
            const passwordMessage = document.querySelector(".signUp__form > input[id='userPassword'] + p");
            const confirmPasswordInput = document.querySelector(".signUp__form > input[id='confirmPassword']");
            const confirmPasswordMessage = document.querySelector(".signUp__form > input[id='confirmPassword'] + p");

            inputForm.addEventListener("submit", (event) => {
                event.preventDefault();
                if(confirmPasswordInput.value !== passwordInput.value) {
                    confirmPasswordMessage.style.display = "block";
                    confirmPasswordMessage.innerHTML = `<i class="fas fa-exclamation"></i> Passwords must match`;
                }
            })

            nameInput.addEventListener("invalid", (event) => {
                event.preventDefault();
                event.target.classList.add("input--invalid");
                if(event.target.validity.valueMissing) {
                    nameMessage.style.display = "block";
                    nameMessage.innerHTML = `<i class="fas fa-exclamation"></i> Enter your name`;
                }
            })
            nameInput.addEventListener("input", (event) => {
                event.target.classList.remove("input--invalid");
                nameMessage.style.display = "none";
            })

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
                else if(event.target.validity.patternMismatch) {
                    passwordMessage.style.display = "block";
                    passwordMessage.innerHTML = `<i class="fas fa-exclamation"></i> Passwords must be at least 8 characters and 1 special character`;
                }
            })
            passwordInput.addEventListener("input", (event) => {
                event.target.classList.remove("input--invalid");
                passwordMessage.style.display = "none";
            })

            confirmPasswordInput.addEventListener("invalid", (event) => {
                event.preventDefault();
                event.currentTarget.classList.add("input--invalid");
                if(event.currentTarget.validity.valueMissing) {
                    confirmPasswordMessage.style.display = "block";
                    confirmPasswordMessage.innerHTML = `<i class="fas fa-exclamation"></i> Type your password again`;
                }
            })
            confirmPasswordInput.addEventListener("input", (event) => {
                event.currentTarget.classList.remove("input--invalid");
                confirmPasswordMessage.style.display = "none";
            })
        };
        inputValidity();
    })
    return (
        <>
            <div className="signUp">
                <div className="signUp__logo">
                    Fan<img src="imgs/fan-logo.png" alt=""/>Fan
                </div>
                <div className="signUp__createAcc">
                    <h3>Create account</h3>
                    <form className="signUp__form" method="post" action="">
                        <label htmlFor="userName">Your name</label>
                        <input id="userName" type="text" required autoFocus/>
                        <p><i className="fas fa-exclamation"></i></p>
                        <label htmlFor="userEmail">Email</label>
                        <input id="userEmail" type="email" required/>
                        <p><i className="fas fa-exclamation"></i></p>
                        <label htmlFor="userPassword">Password</label>
                        <input id="userPassword" type="password" title="Passwords must be at least 8 characters and 1 special character" pattern="^(?=.*[`!@#$%^&*])(?=.*[a-zA-Z\d]).{8,}$" required/>
                        <p><i className="fas fa-exclamation"></i></p>
                        <label htmlFor="confirmPassword">Re-enter password</label>
                        <input id="confirmPassword" type="password" required/>
                        <p><i className="fas fa-exclamation"></i></p>
                        <button className="signUp__createAccButton" type="submit">Create your FANoFAN account</button>
                    </form>
                    <p className="signUp__rules">By creating an account, you agree to FANoFAN's Conditions of Use and Privacy Notice.</p>
                    <p className="signUp__toSignIn">Already have an account? <Link to="/signin">Sign-In</Link></p>
                </div>
            </div>
        </>
    )
}

export default SignUp;