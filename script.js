const form = document.querySelector(".subscribe-form")
const submittedEmail = document.querySelector(".bold-email-submitted")
const email = form.querySelector(".form-input");
const subscribeCard = document.querySelector(".card-container")
const successCard = document.querySelector(".success-card-container")
const dismissBtn = document.querySelector(".dismiss-btn")
const submitBtn = document.querySelector(".form-btn")
const errorMessage = document.querySelector(".error-message")
const inputValue = document.querySelector(".form-input")


function updateSubmittedEmail(email) {
    submittedEmail.textContent = email;
  }

const toggleHiddenClass = () => {
    subscribeCard.classList.toggle("hidden")
    successCard.classList.toggle("hidden")
}

const checkValidEmail = (str) => {
    const valid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    return valid.test(str);
}

const showErrorMessage = () => {
    errorMessage.classList.remove("hidden")
    inputValue.classList.add("input-error")
}

form.addEventListener("submit", (e) => {
   e.preventDefault()

    const validEmail = checkValidEmail(email.value);

    if(!validEmail) {
        return showErrorMessage()
    }
    if (validEmail) {
        updateSubmittedEmail(email.value);
        toggleHiddenClass()
    }
})

dismissBtn.addEventListener("click", () => {
    toggleHiddenClass()
    email.value = ""
})