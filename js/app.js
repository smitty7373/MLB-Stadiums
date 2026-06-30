const map = L.map('map').setView([39.8283, -98.5795], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{

maxZoom:18,

attribution:'© OpenStreetMap'

}).addTo(map);

const stadiums=[

{
name:"Yankee Stadium",
lat:40.8296,
lng:-73.9262
},

{
name:"Fenway Park",
lat:42.3467,
lng:-71.0972
},

{
name:"Rogers Centre",
lat:43.6414,
lng:-79.3894
},

{
name:"Wrigley Field",
lat:41.9484,
lng:-87.6553
}

];

stadiums.forEach(stadium=>{

L.marker([stadium.lat,stadium.lng])

.addTo(map)

.bindPopup(`<b>${stadium.name}</b>`);

});
