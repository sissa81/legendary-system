// Store Charging API as queryURL

var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=1YJXSdZ3NnAyyfQjUFBbTnYFAF9lp57gm2pKe94r&fuel_type=ELEC&state=CA&limit=all"

// Perform a GET request to the query URL/
d3.json(queryURL).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.fuel_stations);
});

function createFeatures(chargingData) {
    function onEachFeature(feature, layer) {
        layer.bindPopup('<h3>${feature.fuel_stations.city}</h3>');
    }

    var chargers = L.geoJSON(chargingData, {
        onEachFeature : onEachFeature
    });

    createMap(chargers);
}

function createMap(chargers) {
    
    var myMap = L.map("map", {
        center: [36.44, -119.46],
        zoom: 6.4
      });
    
     // Add a tile layer.
     var charge = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
}
