function createMap(fuel_stations) {

  var chargeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var baseMaps = {
    "Charge Map": chargeMap
  };

  var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&status=E&access=public&state=CA&limit=all"

  d3.json(queryURL).then(function (data) {    
   for (var = 0; i < data.length; i++) {
     var fuel_stations = data[i].fuel_stations;
     if (fuel_stations) {
       L.marker([fuel_stations.latitude, fuel_stations.longitude]).addTo(myMap);
     }
   }
  });

  var overlayMaps = {
    "Supercharger Stations": fuel_stations
  };

  var map = L.map("map-id", {
    center: [36.44, -119.46],
    zoom: 6.4,
    layers: [chargeMap, fuel_stations]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {

  var stations = response.data.stations;

  var fuelMarkers = [];

  for (var index = 0; index < stations.length; index++) {
    var station = stations[index];

    var fuelMarker = L.marker([station.lat, station.lon])
      .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

    fuelMarkers.push(fuelMarker);
  }

  createMap(L.layerGroup(fuelMarkers));
}

d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);
