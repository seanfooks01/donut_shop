window.onload = function(){
var StoreLocation = function(name, hours, avgDonutsPerCust, minCust, maxCust){
  this.name = name;
  this.hours = hours;
  this.avgDonutsPerCust = avgDonutsPerCust;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.donutsPerHour = [];
  for(var i = 0; i < this.hours.length; i++){
    var custPerHour = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust));
    this.donutsPerHour[i] = custPerHour * this.avgDonutsPerCust;
  }
}

var hours=["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

var downtown = new StoreLocation("Downtown", hours, 3, 10, 25);
var caphill = new StoreLocation("Capitol Hill", hours, 4, 15, 50);
var bothell = new StoreLocation("Bothell", hours, 2, 5, 27);
var auburn = new StoreLocation("Auburn", hours, 3, 8, 15);
var bellevue = new StoreLocation("Bellevue", hours, 4, 15, 40);

var locations=[downtown, caphill, bothell, auburn, bellevue];

var hoursOperation = document.getElementById("hours_operation");
for(var i = 0; i < hours.length; i++){
  var tableHead = document.createElement("th");
  hoursOperation.appendChild(tableHead);
  tableHead.textContent = hours[i];
}

var locationsTable = document.getElementById("locations_table");
for(var i = 0; i < locations.length; i++){
  var row = document.createElement("tr");
  locationsTable.appendChild(row);
  var column = document.createElement("td");
  row.appendChild(column);
  column.textContent = locations[i].name;
}

var locationName = document.createElement("td");


}








