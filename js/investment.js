var principalAmount = document.getElementById("principal-amount");
var maturityAmountDiv = document.getElementById("maturity-amount");
var interestAmountDiv = document.getElementById("interest-amount");
var amountInvestedInput = document.getElementById("amount-invested-input");
var amountInvestedSlider = document.getElementById("amount-invested-slider");
amountInvestedInput.addEventListener("change", updateAmountInvested);
amountInvestedSlider.addEventListener("change", updateAmountInvested2);

function updateAmountInvested() {
  amountInvestedSlider.value = amountInvestedInput.value;
  displayCalculatedValues();
}
function updateAmountInvested2() {
  amountInvestedInput.value = amountInvestedSlider.value;
  displayCalculatedValues();
}

var investmentPeriodInput = document.getElementById("investment-period-input");
var investmentPeriodSlider = document.getElementById(
  "investment-period-slider"
);
investmentPeriodInput.addEventListener("change", updateInvestmentPeriod);
investmentPeriodSlider.addEventListener("change", updateInvestmentPeriod2);

function updateInvestmentPeriod() {
  investmentPeriodSlider.value = investmentPeriodInput.value;
  displayCalculatedValues();
}
function updateInvestmentPeriod2() {
  investmentPeriodInput.value = investmentPeriodSlider.value;
  displayCalculatedValues();
}

var rateOfReturnInput = document.getElementById("rate-of-return-input");
var rateOfReturnSlider = document.getElementById("rate-of-return-slider");
rateOfReturnInput.addEventListener("change", updateRateOfReturn);
rateOfReturnSlider.addEventListener("change", updateRateOfReturn2);

function updateRateOfReturn() {
  rateOfReturnSlider.value = rateOfReturnInput.value;
  displayCalculatedValues();
}
function updateRateOfReturn2() {
  rateOfReturnInput.value = rateOfReturnSlider.value;
  displayCalculatedValues();
}
// function displayCalculatedValues() {
//   principalAmount.innerHTML = rateOfReturnInput.value;
// }
function displayCalculatedValues() {
  // var second = Math.pow(
  //   1 + rateOfReturnInput.value / 100,
  //   (investmentPeriodInput.value / 12).toFixed(5)
  // ).toFixed(5);
  // var maturityAmount = amountInvestedInput.value * second;

  // principalAmount.innerHTML = amountInvestedInput.value;
  // maturityAmountDiv.innerHTML = maturityAmount.toFixed(0);
  // interestAmountDiv.innerHTML =
  //   maturityAmountDiv.innerHTML - principalAmount.innerHTML;
  principalAmount.innerHTML = amountInvestedInput.value;
  let second = parseInt(
    amountInvestedInput.value *
      (rateOfReturnInput.value / 1200) *
      investmentPeriodInput.value
  ).toFixed(0);
  interestAmountDiv.innerHTML = second;
  console.log(second);
  let ans = parseInt(second) + parseInt(amountInvestedInput.value);
    
  maturityAmountDiv.innerHTML = ans;
}
