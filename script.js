// Buttons
const numericalButtons = document.querySelectorAll(
   "button:not(.equal):not(:has(span))"
);
const calculatorScreen = document.querySelector(".screen");
// Operators
const operationalButtons = document.querySelectorAll(
   "button:not(.equal):has(span)"
);

const equalButton = document.querySelector(".equal");

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let result = 0;
let expression = "";

numericalButtons.forEach((button) => {
   button.addEventListener("click", () => {
      const element = document.createElement("p");
      element.textContent = button.textContent;
      expression += button.textContent;
      console.log(expression);
      calculatorScreen.appendChild(element);
   });
});

operationalButtons.forEach((button) => {
   button.addEventListener("click", () => {
      const element = document.createElement("p");
      element.textContent = button.textContent;
      element.style.color = "#f5a814";
      expression += button.textContent;
      calculatorScreen.appendChild(element);
   });
});

equalButton.addEventListener("click", () => {
   result = eval(expression);
   
   while (calculatorScreen.firstChild) {
      calculatorScreen.removeChild(calculatorScreen.firstChild);
   }

   const resultElement = document.createElement("p");
   resultElement.textContent = result;
   calculatorScreen.appendChild(resultElement);
   expression = "";   
});
