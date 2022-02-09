


window.addEventListener('DOMContentLoaded', ()=>{
    // 1 : création
let maCarte = L.map('carte_france');

    // 2 : choix du fond de carte
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(maCarte);
  
    // 3 : réglage de la partie visible (centre, niveau de zoom)
maCarte.setView([46.950, 2.450], 5.5);

   // ...
});

L.marker([45.299, 3.4]).addTo(maCarte)
    .bindPopup('Le texte du marker<br> On peut y mettre du code HTML');