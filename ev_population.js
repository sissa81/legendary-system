// Read in csv from git
const csvdata = "https://raw.githubusercontent.com/sissa81/legendary-system/choxie1/Data/Zip_Pop_04-30-2021.csv";

// Fetch csv data and console log it

var yearlydata = d3.csv(csvdata).then(function(data) {
  console.log(data);

// Attempt to nest and group by year. Will also need to pull out by fuel type eventually, but one step at a time.
var groupedData = d3.nest()
.key(function(d) {return d.novehicles; })
.rollup(function(v) {return d3.sum(v, function(d) {return d.amount; }); })
.object(yearlydata);
console.log(groupedData);

});


