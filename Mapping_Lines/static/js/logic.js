// Create the map object with center at the San Francisco airport.
let map = L.map("mapid").setView([37.6213, -100.379], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
//   console.log(city);
//   L.circle(city.location, {
//     radius: (city.population - 200000) / 15,
//     weight: 04,
//     color: "orange",
//   })
//     .bindPopup(
//       "<h2>" +
//         city.city +
//         ", " +
//         city.state +
//         "</h2> <hr> <h3>Population " +
//         city.population.toLocaleString() +
//         "</h3>"
//     )
//     .addTo(map);
// });

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.379],
  [32.015644, -81.143127],
  [41.978611, -87.904724],
  [40.6413, -73.7781],
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  dashArray: "10",
  weight: 2,
  opacity: 0.5,
}).addTo(map);
