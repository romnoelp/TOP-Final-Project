const buttons = document.querySelectorAll("button");
const calculatorScreen = document.querySelector(".screen");

let firstAddend = 0;
let newValue = "";
let newOperationalValue = "";
let newLastValue = "";
let existingPElement = null;
let existingOPElement = null;
let existingLastPElement = null;

let operationalButtonClicked = false; // Flag to track if an operational button has been clicked.

// Selects all the buttons that don't have the span tag inside.
const firstNumericalButton = Array.from(buttons).filter(
   (button) => !button.querySelector("span")
);

const operationalButtons = Array.from(buttons).filter((button) =>
   button.querySelector("span")
);

const secondNumericalButton = Array.from(buttons).filter(
   (button) => !button.querySelector("span")
);

function handleFirstNumericalButtonClick(event) {
   if (!existingPElement) {
      // If there's no existing <p> element, create one and add it to the screen.
      existingPElement = document.createElement("p");
      existingPElement.style.color = "#edf1f4";
      calculatorScreen.appendChild(existingPElement);
   }

   newValue += event.target.innerText;
   existingPElement.textContent = newValue;
}

// Attach the function as the event listener to the numerical buttons.
firstNumericalButton.forEach((element) => {
   element.addEventListener("click", handleFirstNumericalButtonClick);
});

function handleOperationalButtonClick(event) {
   if (!existingOPElement) {
      existingOPElement = document.createElement("p");
      existingOPElement.style.color = "#f5a814";
      calculatorScreen.appendChild(existingOPElement);
   }

   newOperationalValue += event.target.innerText;
   existingOPElement.textContent = newOperationalValue;

   // Disable numerical buttons after an operational button is pressed.
   firstNumericalButton.forEach((element) => {
      element.removeEventListener("click", handleFirstNumericalButtonClick);
   });

   // Activate second numerical buttons.
   operationalButtonClicked = true;
   secondNumericalButton.forEach((element) => {
      if (!element.hasAttribute("data-clicked")) {
         element.addEventListener("click", handleSecondNumericalButtonClick);
         element.setAttribute("data-clicked", "true");
      }
   });
}

// Attach the function as the event listener to the operational buttons.
operationalButtons.forEach((element) => {
   element.addEventListener("click", handleOperationalButtonClick);
});

function handleSecondNumericalButtonClick(event) {
   if (!existingLastPElement) {
      existingLastPElement = document.createElement("p");
      existingLastPElement.style.color = "#edf1f4";
      calculatorScreen.appendChild(existingLastPElement);
   }

   newLastValue += event.target.innerText;
   existingLastPElement.textContent = newLastValue;

   // Disable second numerical buttons after they are clicked.
   secondNumericalButton.forEach((element) => {
      element.removeEventListener("click", handleSecondNumericalButtonClick);
   });
}
