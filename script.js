const buttons = document.querySelectorAll("button");
const calculatorScreen = document.querySelector(".screen");

let firstAddend = 0;
let newValue = "";
let newOperationalValue = "";
let existingPElement = null;
let existingOPElement = null;

// Selects all the buttons that don't have the span tag inside.
const numericalButtons = Array.from(buttons).filter(
   (button) => !button.querySelector("span")
);

const operationalButtons = Array.from(buttons).filter(
   (button) => button.querySelector("span")
);

numericalButtons.forEach((element) => {
   element.addEventListener("click", () => {
      if (!existingPElement) {
         // If there's no existing <p> element, create one and add it to the screen.
         existingPElement = document.createElement("p");
         existingPElement.style.color = "#edf1f4";
         calculatorScreen.appendChild(existingPElement);
      }

      newValue += element.innerText;
      existingPElement.textContent = newValue;
      firstAddend = Number(newValue);
   });
});


operationalButtons.forEach((element) => {
   element.addEventListener("click", () => {
      if (!existingOPElement) {
         existingOPElement = document.createElement("p");
         existingOPElement.style.color = "#f5a814";
         calculatorScreen.appendChild(existingOPElement);
      }

      newOperationalValue += element.innerText;
      existingOPElement.textContent = newOperationalValue;
   });
});
