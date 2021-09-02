// Store Charging API as queryURL

var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&state=CA&limit=all"

var myMap = L.map("map", {
    center: [36.44, -119.46],
    zoom: 6.4
  });

function createMap(chargers) {
    
    
    
     // Add a tile layer.
     var charge = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
}


// Perform a GET request to the query URL/
d3.json(queryURL).then(function (response) {
    // Once we get a response, send the data.features object to the createFeatures function.
    // Create a new marker cluster group.
     
    var markers = L.marker([
        L.latLng(
            parseFloat(item['latitude']),
            parseFloat(item['longitude'])
        )
    ]);

    // Loop through the data.
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable.
      var location = response[i].fuel_stations;
  
      // Check for the location property.
      if (location) {
  
        // Add a new marker to the cluster group, and bind a popup.
        markers.addLayer(L.marker([fuel_stations.latitude, fuel_stations.longitude])
          .bindPopup(response[i].city));
      }

  }

  // Add our marker cluster layer to the map.
  myMap.addLayer(markers);

});

function createFeatures(chargingData) {
    function onEachFeature(feature, layer) {
        layer.bindPopup('<h3>${feature.fuel_stations.city}</h3>');
    }

    var chargers = L.geoJSON(chargingData, {
        onEachFeature : onEachFeature
    });

    createMap(chargers);
};

console.log(myMap)