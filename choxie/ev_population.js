// Read in csv from git
const csvdata = "https://raw.githubusercontent.com/sissa81/legendary-system/main/choxie/Data/Zip_Pop_04-30-2021.csv";

// Fetch csv data and console log it
// Convert # of vehicles to number instead of string
var yearlyData = d3.csv(csvdata).then(function(data) {
  data.forEach(function(d){d['novehicles'] = +d['novehicles']; });
  console.log(data);



// Attempt to nest and group by year. Will also need to pull out by fuel type eventually, but one step at a time.

var groupedData = d3.nest()
.key(function(d) {return d.fueltype; })
.key(function(d) {return d.datayear; })
.rollup(function(v) {return d3.sum(v, function(d) {return d.novehicles; }); })
.map(data);
console.log(groupedData);





});


