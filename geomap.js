document.addEventListener('DOMContentLoaded', () => {

const map = L.map('map').setView([42.861691234471536, 74.60331469678937], 13);

const osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([42.861691234471536, 74.60331469678937]).addTo(map)
    .bindPopup(' Business center Triump.')
    .openPopup();

const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
});

const greenIcon = L.icon({
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});

L.marker([42.861691234471536, 74.60331469678937], { icon: greenIcon })
    .bindPopup('Triumph<br> best business.')
    .addTo(map);

    L.geoJson(adm).addTo(map);

const myStyle = {
    color: "#ff7800",
    weight: 5,
    opacity: 0.65,
    dashArray: '3,5',
    lineJoin: 'miter',
    lineCap: 'square',
    fillColor: "#800026",
    fillOpacity: 0.65
};

const adm = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        // Array of features
    ]
};

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
    layer.on({ click: zoomToFeature });
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

L.geoJSON(adm, {
    style: myStyle,
    onEachFeature: onEachFeature
}).addTo(map);

const baseMaps = {
    "OpenStreetMap": osm,
    "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
};

const overlayMaps = {
    "Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
});