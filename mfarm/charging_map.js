// Store Charging API as queryURL



//function createFeatures(chargingData) {

 // function onEachFeature(feature, layer) {
 //   layer.bindPopup(feature.fuel_stations.street_address)
 // }

 // var chargeStations = L.geoJSON(chargingData, {
 //   onEachFeature: onEachFeature
//  })
//};


// Create Map
var myMap = L.map("map", {
  center: [36.44, -119.46],
  zoom: 6.4,
});

// Create the tile layer that will be the background of our map.
var chargeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

console.log(myMap)
// Create the markers for chargeStations

var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&status=E&access=public&state=CA&limit=all"

// Perform a GET request to the query URL/
d3.json(queryURL).then(function(response) {
  console.log(response)
 for (var i = 0; i < response.length; i++) {

   var fuel_stations = response[i].fuel_stations;
    
   if (fuel_stations) {
     L.marker([fuel_stations.latitude, fuel_stations.longitude]).addTo(myMap);
   }   
 }
});

  // Create an overlayMaps object to hold the chargeStations layer.
 // var overlayMaps = {
 //   "Charging Stations": chargeStations
  //};

//  var myMap = L.map("map", {
 //   center: [36.44, -119.46],
 //   zoom: 6.4,
 //   layers: [chargeMap,chargeStations]
 // });

 // L.control.layers(baseMaps, overlayMaps, {
  //  collapsed: false
//  }).addTo(myMap)

//  console.log(myMap)
//};