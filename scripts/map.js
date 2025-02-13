const map = L.map('map').setView([-4.0833, 138.7500], 9);

const defaultLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com">Esri</a> & contributors'
});

const baseMaps = {
    "Peta Default": defaultLayer,
    "Peta Satelit": satelliteLayer
};

L.control.layers(baseMaps).addTo(map);

L.marker([-4.0833, 138.7500]).addTo(map)
    .bindPopup('Kabupaten Jayawijaya')
    .openPopup();
