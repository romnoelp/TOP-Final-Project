// Button declarations.
const buttons = document.querySelectorAll("button");
const calculatorScreen = document.querySelector(".screen");

// Value initializations.
let firstAddend = 0;
let newValue = "";

// Selects all the buttons that don't have the span tag inside.
const numericalButtons = Array.from(buttons).filter(
   (button) => !button.querySelector("span")
);

// Reference to the existing <p> element on the screen.
let existingPElement = null;

// On click event for the numerical buttons.
numericalButtons.forEach((element) => {
   element.addEventListener("click", () => {
      if (!existingPElement) {
         // If there's no existing <p> element, create one and add it to the screen.
         existingPElement = document.createElement("p");
         existingPElement.style.color = "#edf1f4";
         calculatorScreen.appendChild(existingPElement);
      }

      // Update the content of the existing <p> element.
      newValue += element.innerText;
      existingPElement.textContent = newValue;
      firstAddend = Number(newValue);
   });
});
