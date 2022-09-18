// Create the map object with center and zoom level.
let map = L.map("mapid").setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Accessing the airport GeoJSON URL
let airportData =
  "https://raw.githubusercontent.com/RVP97/Mapping_Earthquakes/master/majorAirports.json";

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

d3.json(airportData).then((data) => {
  console.log(data);
  L.geoJSON(data, { onEachFuture: (layout, dh) => layout.addTo(map) });
});
