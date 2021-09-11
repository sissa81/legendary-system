var myMap = L.map("map-id", {
  center: [36.44, -119.46],
  zoom: 6.4,
  // layers: [chargeMap, fuel_stations]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&status=E&access=public&state=CA&limit=all"

d3.json(url).then(function(response) {
  console.log(response);
  
  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var fuel_stations = data[i].fuel_stations;
    if (fuel_stations) {
      heatArray.push([fuel_stations.latitude, fuel_stations.longitude]);
    }
  }
  
  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(myMap);

});

//   var baseMaps = {
//     "Charge Map": chargeMap
//   };

//   var overlayMaps = {
//     "Supercharger Stations": fuel_stations
//   };

//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(map);
// }

// function createMarkers(response) {

//   var stations = response.data.stations;

//   var fuelMarkers = [];

//   for (var index = 0; index < stations.length; index++) {
//     var station = stations[index];

//     var fuelMarker = L.marker([station.lat, station.lon])
//       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

//     fuelMarkers.push(fuelMarker);
//   }

//   createMap(L.layerGroup(fuelMarkers));
// }

// d3.json(queryURL).then(createMarkers);