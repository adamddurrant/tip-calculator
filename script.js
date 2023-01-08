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
billInput.addEventListener("input", calculate); // runs calculate() on change on input
resetButton.addEventListener("click", reset); // resets on click

let finalTipValue = 0;
let finalBillValue = 0;
let peopleValue = 1;
let floatedButtonVal;

// get values from percentage buttons
percentageButtons.forEach(function (button) {
  button.addEventListener("focus", function () {
    buttonVal = button.innerHTML;
    floatedButtonVal = parseFloat(buttonVal);
    calculate();
  });
});

function calculate() {
  // getting input to be number
  let billEntry = parseFloat(billInput.value);

  if (floatedButtonVal === undefined) {
    totalTip.innerHTML = "0.00";
    totalBill.innerHTML = `£${Math.round(billEntry * 1e2) / 1e2}`;
  } else {
    let TipValue = (billEntry / 100) * Math.round(floatedButtonVal);
    let tipCalc = (billEntry / 100) * floatedButtonVal;
    totalTip.innerHTML = `£${tipCalc.toFixed(2)}`;
    //bill
    let billCalc = tipCalc + billEntry;
    totalBill.innerHTML = `£${billCalc.toFixed(2)}`;
  }
}

function reset() {
  totalTip.innerHTML = "0.00";
  totalBill.innerHTML = "0.00";
  billInput.value = "0.00";
  percentageButtons.forEach(function (button) {
    button.blur();
  });
}
