'use strict'

const init = (function () {
    const input = document.querySelector(".input")
    const button = document.querySelector(".cta__button")
    const errorMessage = document.querySelector(".error-message")
    const errorIcon = document.querySelector(".error__icon")

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const inputValidationCheck = (e) => {
        e.preventDefault()
        if (!(validateEmail(input.value))) {
            input.style.border = "2px solid hsl(0, 93%, 68%)"
            errorMessage.classList.add("error")
            errorIcon.style.visibility = "visible"
        }
        else {
            location.reload()
        }
    }
    button.addEventListener("click", inputValidationCheck);
})();