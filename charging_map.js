// Create Map
function createMap(charging) {
  
  var chargeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var myMap = L.map("map", {
    center: [36.44, -119.46],
    zoom: 6.4,
    layers: [chargeMap, charging]
  });
};

// Create the markers for chargeStations

var queryURL = 
    "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&status=E&access=all&state=CA&limit=200"

// Perform a GET request to the query URL
function createMarkers(response) {
  console.log(response)
  // Pull down to the fuel_stations level for information
  var chargeStations = response.fuel_stations;
  console.log(chargeStations)
  // Initialize array for Charger Markers
  var chargeMarkers = [];
  // Set icon style
  var myIcon = L.icon({
    iconUrl: 'markers/lightning.png',
    shadowUrl: 'markers/markers-shadow.png'
  });
  //Loop through the Stations array
  for (var i = 0; i < chargeStations.length; i++) {
    var charger = chargeStations[i];
    // For each station, create marker, and bind a pop-up
    var chargeMarker = L.marker([charger.latitude, charger.longitude], {icon: myIcon})
      .bindPopup("<h4>" + charger.station_name + "<h/4><br><h5>" + charger.street_address + 
        "<br> " + charger.city + ", " + charger.state + " " + charger.zip + "<h5/>");
    // Add marker to the chargeMarkers array
    chargeMarkers.push(chargeMarker);
  }
  // Create a layer group from Markers and pass to createMap
  createMap(L.layerGroup(chargeMarkers));
};
d3.json(queryURL).then(createMarkers);
