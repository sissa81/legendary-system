// Read in csv from git
const csvdata = "https://raw.githubusercontent.com/sissa81/legendary-system/main/choxie/Data/yearly_data.csv";

// Fetch csv data and console log it
// Convert # of vehicles to number instead of string
d3.csv(csvdata).then(function(data) {
  data.forEach(function(d){d['no_vehicles'] = +d['no_vehicles']; });
  console.log(data);
  var temp = data[0]['reg_year']
  console.log(temp)


// Create Bar Chart
  function barchart () {    
    var bardata = [{
        x: data[0]['reg_year'],
        y: data[0]['no_vehicles'],
        type: 'bar'        
    }];
  
    var barlayout = {                
        hovermode: 'closest',        
        height: 600,
        width: 350,
        showlegend: false
    };
  
    Plotly.newPlot('bar', bardata, barlayout);
};
  
// // Create Bar Chart
// function barchart () {  
//   var bardata = [{
//       x: data.reg_year,
//       y: data.no_vehicles,
//       type: 'bar',            
//       marker: {
//           color: 'rgb(0,65,130)'
//       }
//   }];

//   var barlayout = {              
//       hovermode: 'closest',
//       yaxis: {
//           type: 'category',
          
//       },
//       height: 600,
//       width: 350,
//       showlegend: false
//   };

//   Plotly.newPlot('bar', bardata, barlayout);
// };

barchart();

});