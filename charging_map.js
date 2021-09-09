// Store Charging API as queryURL

var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&state=CA&limit=all"

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(chargingData) {

  function onEachFeature(feature, layer) {
    layer.bindPopup(feature.fuel_stations.street_address)
  }

  var chargeStations = L.geoJSON(chargingData, {
    onEachFeature: onEachFeature
  })
};


function createMap(chargeStations) {

  // Create the tile layer that will be the background of our map.
  var chargeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  // Create a baseMaps object to hold the chargeMap layer.
  var baseMaps = {
    "Charger Map": chargeMap
  };
  // Create an overlayMaps object to hold the chargeStations layer.
  var overlayMaps = {
    "Charging Stations": chargeStations
  };

  var myMap = L.map("map", {
    center: [36.44, -119.46],
    zoom: 6.4,
    layers: [chargeMap,chargeStations]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap)

  console.log(myMap)
};

