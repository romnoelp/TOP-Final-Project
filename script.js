// Button declations
const buttons = document.querySelectorAll("button")
const numericalButtons = Array.from(buttons).filter(button => !button.querySelector('span'));
let value = "";
numericalButtons.forEach(element => {
    element.addEventListener("click", () => {
        value = element.innerHTML;
    })
});


