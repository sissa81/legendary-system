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
}



// Create the tile layer that will be the background of our map.


//console.log(myMap)
// Create the markers for chargeStations

var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&status=E&access=public&state=CA&limit=all"

// Perform a GET request to the query URL/
d3.json(queryURL).then(function(response) {
//  console.log(response)
  var chargeMarkers = L.markerClusterGroup();

  for (var i = 0; i < response.length; i++) {

    var fuel_stations = response[i].fuel_stations;
//    console.log(fuel_stations)
   if (fuel_stations) {
      chargeMarkers.addLayer(L.marker([fuel_stations.latitude, fuel_stations.longitude]).bindPopup(fuel_stations.station_name));
   }   
 }

 myMap.addLayer(chargeMarkers);
});

//function createMarkers(response) {

//  var chargeStations = response.fuel_stations;

  //var chargeMarkers = L.markerClusterGroup();

  //for (var index = 0; index < chargeStations.length; index++) {
    //var chargeStation = chargeStations[index].fuel_stations;

   // if (chargeStation) {
     // chargeMarkers.addLayer(L.marker([chargeStation.latitude, chargeStation.longitude]))
       // .bindPopup("<h3>" + chargeStation.station_name + "</h3>");
    //}
    //console.log(chargeStation.longitude)
    //var chargeMarker = L.marker([chargeStation.latitude, chargeStation.longitude])
    //  .bindPopup("<h3>" + chargeStation.station_name + "</h3>");
    
    //chargeMarkers.push(chargeMarker);
  //}
  
  //createMap(L.layerGroup(chargeMarkers));
  //console.log(chargeMarkers)
//}

//d3.json(queryURL).then(createMarkers);