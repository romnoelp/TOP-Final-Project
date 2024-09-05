// Button declations.
const buttons = document.querySelectorAll("button");
const calculatorScreen = document.querySelector(".screen");

// Selects all the buttons that doesn't have the span tag inside.
const numericalButtons = Array.from(buttons).filter(
   (button) => !button.querySelector("span")
);
let firstAddend = 0;
let secondAdded = 0;

// On click event for the numerical buttons.
numericalButtons.forEach((element) => {
   element.addEventListener("click", () => {
      let firstValue = document.createElement("p");
      firstValue.style.color = "#edf1f4";
      firstValue.textContent = element.innerText;
      console.log(firstValue);

      calculatorScreen.appendChild(firstValue);
   });
});
