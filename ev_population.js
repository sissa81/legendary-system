// Read in csv from git
const csvdata = "https://raw.githubusercontent.com/sissa81/legendary-system/main/Data/ZIP.csv";

// Fetch csv data and console log it
// Convert # of vehicles to number instead of string
var yearlyData = d3.csv(csvdata).then(function(data) {
  data.forEach(function(d){d['Number of Vehicles'] = +d['Number of Vehicles']; });
  data.forEach(function(d){d['ZIP'] = +d['ZIP']; });
  console.log(data);


// Nest and group by year and fuel type, sum number of vehicles
var groupedData = d3.nest()
.key(function(d) {return d['Fuel Type']; })
.key(function(d) {return d['Data Year']; })
.rollup(function(v) {return d3.sum(v, function(d) {return d['Number of Vehicles']; }); })
.entries(data);
console.log(groupedData);
// See how to pull out electric vehicle data
console.log(groupedData[2]['values'][0]['key']);

// ELECTRIC VEHICLES
// Empty arrays to hold plot points
xplots = []
yplots = []

// For loop to fill x plot point arrays
for (let i = 0; i < groupedData[2]['values'].length; i++) {
  let xplot = groupedData[2]['values'][i]['key']
  xplots.push(xplot);
};

// Make sure x plot points are working
console.log(xplots);

// For loop to fill y plot point arrays
for (let j = 0; j < groupedData[2]['values'].length; j++) {
  let yplot = groupedData[2]['values'][j]['value']
  yplots.push(yplot);
};

// Make sure y plot points are working
console.log(yplots);

// // PLUG IN HYBRID ELECTRIC VEHICLES 
// // Empty arrays to hold plot points
// xphevs = []
// yphevs = []

// // For loop to fill x plot point arrays (PHEV)
// for (let k = 0; k < groupedData[8]['values'].length; k++) {
//   let xphev = groupedData[8]['values'][k]['key']
//   xphevs.push(xphev);
// };

// // Make sure x plot points are working (PHEV)
// console.log(xphevs);

// // For loop to fill y plot point arrays (PHEV)
// for (let l = 0; l < groupedData[8]['values'].length; l++) {
//   let yphev = groupedData[8]['values'][l]['value']
//   yphevs.push(yphev);
// };

// // Make sure y plot points are working (PHEV)
// console.log(yphevs);


// Create Bar Chart
function barchart () {    
  var bardata = [{
      x: xplots,
      y: yplots,
      text: yplots.map(String),
      textposition: 'auto',
      
      marker: {
        color: ['#063734', '#004036', '#004834', '#00502f', '#005827', '#16652c', '#287331', '#398135', '#519a4e', '#6ab368', '#82cd82'],
        line: {
          color: '#146113',
          width: 2
        }
      },
      type: 'bar'        
  }];
  
  var barlayout = {                      
      hovermode: 'closest',                
      title: {
        text: 'Historical Electric Vehicle Registraiton Data from California Energy Commission',
        size: 18
      },
      xaxis: {
        type: 'category',
        title: {            
          text: 'Year of Registration',
          font: {
            size: 18,
            color: '#095907'
          }
        },
        tickangle: -45
      },
      yaxis: {
        title: {
          text: 'Number of Vehicles Registered',
          font: {
            size: 18,
            color: '#095907'
          }
        },
      },
      height: 600,
      width: 1000,        
      showlegend: false
  };
  
  var config = {responsive: true};

  Plotly.newPlot('bar', bardata, barlayout, config);
};  

// // Populate dropdown menu with names
// function assignOptions() {
//   var dropdownMenu = document.getElementById("selDataset");
//   var list = ['Electric', 'Plug-in Hybrid'];
//   for (var i = 0; i < list.length; i++) {
//       var currentOption = document.createElement("option");
//       currentOption.text = list[i];
//       dropdownMenu.appendChild(currentOption);
//   };
// };


barchart();
// assignOptions();

});


