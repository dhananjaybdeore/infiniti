var plotSizes = document.getElementById("plot-sizes");
var floors = document.getElementById("floors");
var city = document.getElementById("city");
var constructionType = document.getElementById("construction-type");
var stiltYes = document.getElementById("stilt-yes");
var maxGroundCoverage = document.getElementsByClassName("max-ground-coverage");
var constructionCost = document.getElementsByClassName("construction-cost")[0];
// console.log(constructionCost);
var outputPlotSize = document.getElementsByClassName("output-plot-size")[0];
var outputFloors = document.getElementsByClassName("output-floors")[0];
var outputCity = document.getElementsByClassName("output-city")[0];
var outputConstructionType = document.getElementsByClassName(
  "output-construction-type"
)[0];
var outputMaxGroundCoverage = document.getElementsByClassName(
  "output-max-ground-coverage"
)[0];
var outputStilt = document.getElementsByClassName("output-stilt")[0];

// console.log(selectedPlotSize);
document.addEventListener("change", function () {
  var selectedPlotSize = plotSizes.options[plotSizes.selectedIndex].text;
  var selectedFloor = floors.options[floors.selectedIndex].value;
  var selectedCity = city.options[city.selectedIndex].text;
  var stiltValue = 0;
  // stiltValue = 0;
  console.log(typeof stiltValue);
  if (stiltYes.checked) {
    stiltValue += 1000;
  } else {
    stiltValue = 0;
  }

  var selectedConstructionType =
    constructionType.options[constructionType.selectedIndex].value;

  //   console.log(selectedConstructionType);
  if (selectedPlotSize == 100) {
    maxGroundCoverage[0].innerHTML = 90;
  }
  if (selectedPlotSize > 100 && selectedPlotSize < 501) {
    var maxGroundCoverageValue = 0.75 * selectedPlotSize;
    maxGroundCoverage[0].innerHTML = maxGroundCoverageValue;
  }
  //   console.log(maxGroundCoverage[0].innerHTML,selectedFloor,selectedConstructionType);
  var constructionCostInRupees =
    maxGroundCoverage[0].innerHTML *
    10 *
    selectedFloor *
    (parseInt(selectedConstructionType) + stiltValue);
  constructionCost.innerHTML = "Rs " + constructionCostInRupees;
  outputPlotSize.innerHTML = selectedPlotSize;
  outputFloors.innerHTML = floors.options[floors.selectedIndex].text;
  outputCity.innerHTML = selectedCity;
  outputConstructionType.innerHTML =
    constructionType.options[constructionType.selectedIndex].text;
  outputMaxGroundCoverage.innerHTML = maxGroundCoverage[0].innerHTML;
  if (stiltYes.checked) {
    outputStilt.innerHTML = "Yes";
  } else {
    outputStilt.innerHTML = "No";
  }
});
