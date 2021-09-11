// Read in csv from git
const csvdata = "https://raw.githubusercontent.com/sissa81/legendary-system/main/choxie/Data/yearly_data.csv";

// Fetch csv data and console log it
// Convert # of vehicles to number instead of string
d3.csv(csvdata).then(function(data) {
  console.log(data);



// Attempt to nest and group by year. Will also need to pull out by fuel type eventually, but one step at a time.

var byYear = data.filter(year => year.datayear == '2010' && year.fueltype == 'Electric').map(data.novehicles);
console.log(byYear);


// var groupedData = d3.nest()
// .key(function(d) {return d.fueltype; })
// .key(function(d) {return d.datayear; })
// .rollup(function(v) {return d3.sum(v, function(d) {return d.novehicles; }); })
// .map(data);
// console.log(groupedData);



// Create Line Chart
function barchart () {
  console.log(groupedData.Electric)    
  var bardata = [{
      x: groupedData.d.datayear,
      y: groupedData.d.novehicles,
      type: 'bar',            
      marker: {
          color: 'rgb(0,65,130)'
      }
  }];

  var barlayout = {        
      title: 'Electric Vehicle Registration 2010-2020',
      hovermode: 'closest',
      yaxis: {
          type: 'category',
          tickprefix: 'OTU '
      },
      height: 600,
      width: 350,
      showlegend: false
  };

  Plotly.newPlot('bar', bardata, barlayout);
};

barchart();

});


