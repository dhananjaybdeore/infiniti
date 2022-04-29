var amount = document.querySelector("#amount");
var amountInput = document.querySelector("#amount-input");
amount.addEventListener("onchange", updateAmount);
amountInput.addEventListener("onchange", updateAmount2);
var Principal = amount.value;

function updateAmount() {
  amountInput.value = amount.value;
  // console.log(amountInput.value);
  displayMonthlyEmi();
  hello();
  // console.log("reached above hello function call");
  // console.log("update amount function called");

  // chartDraw();
}
function updateAmount2() {
  amount.value = amountInput.value;
  displayMonthlyEmi();
  console.log("reached above hello function call");

  hello();
}

var period = document.querySelector("#period");
var periodInput = document.querySelector("#period-input");
period.addEventListener("onchange", updatePeriod);
periodInput.addEventListener("onchange", updatePeriod2);

function updatePeriod() {
  periodInput.value = period.value;
  displayMonthlyEmi();
  hello();
}
function updatePeriod2() {
  period.value = periodInput.value;
  displayMonthlyEmi();
  hello();
}
var interestRate = document.querySelector("#interest-rate");
var interestRateInput = document.querySelector("#interest-rate-input");
interestRate.addEventListener("onchange", updateInterestRate);
interestRateInput.addEventListener("onchange", updateInterestRate2);

function updateInterestRate() {
  interestRateInput.value = interestRate.value;
  displayMonthlyEmi();
  hello();
}
function updateInterestRate2() {
  interestRate.value = interestRateInput.value;
  displayMonthlyEmi();
  hello();
}
var emi;
var monthlyEmi = document.querySelector(".monthly-emi");
var totalInterestPayableDiv = document.querySelector(
  ".total-interest-payable-div"
);
function displayMonthlyEmi() {
  var bigValue = Math.pow(interestRate.value / 1200 + 1, period.value * 12);

  emi =
    ((amountInput.value * interestRate.value) / 1200) *
    (bigValue / (bigValue - 1));
  var totalInterestPayable = emi * period.value * 12;

  monthlyEmi.innerHTML = `Monthly EMI : Rs ${emi.toFixed(0)}`;
  totalInterestPayableDiv.innerHTML = `<div><span> <img src="img/Ellipse-168.svg" alt="" /> Principal</span><span>: Rs ${
    amountInput.value
  }</span></div>
  <div><span><img src="img/Ellipse-169.svg" alt="" />Interest Payable</span><span>: Rs <span id="total-interest-payable">${(
    totalInterestPayable - amountInput.value
  ).toFixed(0)}</span></span></div>
 <div><span>Total Amount Payable</span><span> : Rs ${totalInterestPayable.toFixed(
   0
 )}</span></div>
 <br>
 <div class="main-button">
 <a href="#">Apply Now</a>
 <img src="img/Vector-submit.svg" alt="">
</div>
  `;
}

// adding a pie chart
function hello() {
  // creating table
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var table = document.getElementsByClassName("table");
  console.log("Hello function called");
  table = table[0];
  table.innerHTML = `<tr>
  <th class="year">Year</th>
  <th>Principal Paid(A)</th>
  <th>Interest Paid(B)</th>

  <th>Total Payment(A+B)</th>
  <th>Outstanding Loan Balance</th>
</tr> `;

  // console.log(table[0].innerHTML);
  // var newRow = document.createElement("tr");
  // newRow.innerHTML = " ";
  var monthlyPrincipalEmi = 0;
  var monthlyInterestEmi = 0;
  var outstandingBalance = amount.value;
  var i = 0;
  // loop
  while (outstandingBalance - monthlyInterestEmi > 0) {
    var d = new Date();
    if (i + d.getMonth() == 12) {
      i = -d.getMonth();
    }
    // console.log(d.getMonth() + i);
    var name = month[d.getMonth() + i];
    i++;
    var newRow = document.createElement("tr");
    // newRow.innerHTML = " ";

    var td1 = document.createElement("td");
    td1.innerHTML = name;
    newRow.appendChild(td1);

    monthlyInterestEmi = (
      outstandingBalance *
      (interestRate.value / 1200)
    ).toFixed(0);
    monthlyPrincipalEmi = (emi - monthlyInterestEmi).toFixed(0);
    outstandingBalance = outstandingBalance - monthlyPrincipalEmi;

    var td2 = document.createElement("td");
    td2.innerHTML = monthlyPrincipalEmi;
    newRow.appendChild(td2);
    var td3 = document.createElement("td");
    td3.innerHTML = monthlyInterestEmi;
    newRow.appendChild(td3);
    var td4 = document.createElement("td");
    td4.innerHTML = emi.toFixed(0);
    newRow.appendChild(td4);
    var td5 = document.createElement("td");
    if (outstandingBalance < 0 || outstandingBalance < 1000) {
      outstandingBalance = 0;
    }
    td5.innerHTML = outstandingBalance.toFixed(0);
    newRow.appendChild(td5);
    table.appendChild(newRow);
  }
  console.log("reached above chart");
  // pie chart code   example
  var pieChartValue1 = document.getElementById("amount-input").value;
  // console.log(pieChartValue1);

  var ctx = document.getElementById("myChart").getContext("2d");

  // ctx.destroy();
  // const myChart = null;
  // console.log(myChart);
  var totalInterestPayable = document.getElementById(
    "total-interest-payable"
  ).innerHTML;
  console.log(totalInterestPayable);
  document.addEventListener("change", function () {
    var data = [
      {
        data: [amountInput.value, totalInterestPayable],
        backgroundColor: ["rgba(0, 162, 199, 1)", "rgba(16, 55, 92, 1)"],

        // labels: ["India", "China", "US", "Canada"],

        borderColor: "#fff",
      },
    ];
    var options = {
      tooltips: {
        enabled: false,
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map((data) => {
              sum += data;
            });
            let percentage = ((value * 100) / sum).toFixed(2) + "%";
            return percentage;
          },
          color: "#fff",
        },
      },
    };
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Principal", "Interest Payable"],
        datasets: data,
      },
    });
    myChart.destroy();
    myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Principal", "Interest Payable"],
        datasets: data,
      },
    });
  });

  // myChart.destroy();
  // myChart = new Chart(ctx, {
  //   type: "pie",
  //   data: {
  //     labels: ["Principal", "Interest Payable"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [
  //           amountInput.value,
  //           (totalInterestPayable - amountInput.value).toFixed(0),
  //         ],

  //         // options: {
  //         //   legend: {
  //         //     display: false,
  //         //   },
  //         //   scales: {
  //         //     y: {
  //         //       display: false,
  //         //     },
  //         //   },
  //         //   tooltips: {
  //         //     callbacks: {
  //         //       label: function (tooltipItem) {
  //         //         return tooltipItem.yLabel;
  //         //       },
  //         //     },
  //         //   },
  //         // },
  //         backgroundColor: ["rgba(0, 162, 199, 1)", "rgba(16, 55, 92, 1)"],

  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  // });
  // console.log("reached below chart");

  // console.log(myChart);
  // console.log(myChart2);
  // myChart.destroy();
  // ctx.destroy();

  // myChart.destroy();
}
