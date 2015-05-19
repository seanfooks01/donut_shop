var StoreLocation = function(name, hours, avgDonutsPerCust, minCust, maxCust){
  this.name = name;
  this.hours = hours;
  this.avgDonutsPerCust = avgDonutsPerCust;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.custPerHour = [];
  for(var i = 0; i < this.hours.length; i++){
    this.custPerHour[i] = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust));
  }
}

var hours=["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"]

var downtown = new StoreLocation("Downtown", hours, 3, 10, 25);
var caphill = new StoreLocation("Capitol Hill", hours, 4, 15, 50);
