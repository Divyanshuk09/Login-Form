const sign_in_button = document.querySelector("#sign-in-button");
const sign_up_button = document.querySelector("#sign-up-button");
const sign_in_button2 = document.querySelector("#sign-in-button2");
const sign_up_button2 = document.querySelector("#sign-up-button2");
const container = document.querySelector(".container");

sign_up_button.addEventListener("click", ()=> {
    container.classList.add("sign-up-mode")
})
sign_up_button2.addEventListener("click", ()=> {
    container.classList.add("sign-up-mode2")
})

sign_in_button.addEventListener("click", ()=> {
    container.classList.remove("sign-up-mode")
})
sign_in_button2.addEventListener("click", ()=> {
    container.classList.remove("sign-up-mode2")
})
