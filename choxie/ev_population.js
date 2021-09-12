// Read in csv from git
const csvdata = "https://raw.githubusercontent.com/sissa81/legendary-system/main/choxie/Data/yearly_data.csv";

// Fetch csv data and console log it
// Convert # of vehicles to number instead of string
d3.csv(csvdata).then(function(data) {
  data.forEach(function(d){d['no_vehicles'] = +d['no_vehicles']; });
  console.log(data);

  x = [data[0]['reg_year'], data[1]['reg_year'], data[2]['reg_year'], data[3]['reg_year'], data[4]['reg_year'], 
    data[5]['reg_year'], data[6]['reg_year'], data[7]['reg_year'], data[8]['reg_year'], data[9]['reg_year'], data[10]['reg_year']]
  y = [data[0]['no_vehicles'], data[1]['no_vehicles'], data[2]['no_vehicles'], data[3]['no_vehicles'], data[4]['no_vehicles'], 
    data[5]['no_vehicles'], data[6]['no_vehicles'], data[7]['no_vehicles'], data[8]['no_vehicles'], data[9]['no_vehicles'], data[10]['no_vehicles']]

// Create Bar Chart
  function barchart () {    
    var bardata = [{
        x: x,
        y: y,
        text: y.map(String),
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

barchart();
});