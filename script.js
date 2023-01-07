// input fields
let billInput = document.getElementById("bill-input"); // bill input element
let peopleInput = document.getElementById("people-number"); //people number input element

// final numbers
let totalTip = document.getElementById("total-tip"); //final tip element
let totalBill = document.getElementById("total-bill"); //final bill element

// percent buttons/input
let initialTip = 0; // initial
let percentageButtons = document.querySelectorAll(".percent-button"); // all percent buttons
let customPercentage = document.getElementById("custom-percent"); // custom input field

// reset button
let resetButton = document.getElementById("reset"); // reset button

// event listeners
billInput.addEventListener("change", calculate); // event listener & run calculate() on change

percentageButtons.forEach(function (button) {
  button.addEventListener("focus", function () {
    buttonVal = button.innerHTML;
    floatedButtonVal = parseFloat(buttonVal);
    console.log(floatedButtonVal);
  });
});

let finalBillValue;
let peopleValue = 1;

function calculate() {
  totalTip.innerHTML;
  console.log("running calculate");
}

console.log(totalTip.innerHTML);
