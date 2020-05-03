
            // On initialise la latitude et la longitude de Paris (centre de la carte)
            var lat = 34.7277523;
            var lon = -86.5932014;
            var macarte = null;
            // Fonction d'initialisation de la carte
            var villes = {
	"Paris": { "lat": 48.852969, "lon": 2.349903 },
	"Brest": { "lat": 48.383, "lon": -4.500 },
	"Quimper": { "lat": 48.000, "lon": -4.100 },
	"Bayonne": { "lat": 43.500, "lon": -1.467 }
};
            
            function initMap() {
                // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                macarte = L.map('map').setView([lat, lon], 11);
                var marker = L.marker([48.9180, 2.2934]).addTo(macarte);
                for (ville in villes) {
	            var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
                marker.bindPopup(ville);
                }  
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // Il est toujours bien de laisser le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(macarte);
            }
            window.onload = function(){
		// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
		initMap(); 
            };
    // Requete
var request = new XMLHttpRequest()

// Ouverture connection

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var zipcode = getUrlParam('zip','Empty');
var search = getUrlParam('q','Empty');
var mytext = getUrlParam('text','Empty');
var customIcon = L.icon({
    iconUrl: 'images/beer48.png',
    //shadowUrl: 'icon-shadow.png',
    iconSize:     [48, 48], // taille de l'icone
    //shadowSize:   [50, 64], // taille de l'ombre
    iconAnchor:   [24, 48], // point de l'icone qui correspondra à la position du marker
    //shadowAnchor: [32, 64],  // idem pour l'ombre
    popupAnchor:  [-3, -76] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
});


if(zipcode = 'Empty') {
  if(search = 'Empty') {

    request.open('GET', 'https://api.openbrewerydb.org/breweries?per_page=50', true)
// https://api.openbrewerydb.org/breweries?page=15

request.onload = function() {
  // JSON
  var data = JSON.parse(this.response)
  console.log(data)


 data.forEach(brewery => {
     console.log(brewery.longitude)
     console.log(brewery.latitude)
     console.log(brewery.name)
     console.log("------------------------------------")
    var marker = L.marker([brewery.latitude, brewery.longitude], {icon: customIcon}).addTo(macarte);
    marker.bindPopup(`${brewery.name} | Street : ${brewery.street} | City : ${brewery.city}\nType : ${brewery.brewery_type}`);
    })




  //document.write(`<div class="card"><h3>Film : </h3><br><p class="soustitre">Titre : </p><p>${mobile.title}<p></div> <br>`)
}

  }

  if(search != 'Empty') {
    request.open('GET', `https://api.openbrewerydb.org/breweries/search?query=${search.replace(/ /g,"_")}`, true)
// https://api.openbrewerydb.org/breweries?page=15

request.onload = function() {
  // JSON
  var data = JSON.parse(this.response)
  console.log(data)


 data.forEach(brewery => {
     console.log(brewery.longitude)
     console.log(brewery.latitude)
     console.log(brewery.name)
     console.log(brewery.street)
     console.log("------------------------------------")
    var marker = L.marker([brewery.latitude, brewery.longitude], {icon: customIcon}).addTo(macarte);
    marker.bindPopup(`${brewery.name} | Street : ${brewery.street} | City : ${brewery.city}\nType : ${brewery.brewery_type}`);
    })




  //document.write(`<div class="card"><h3>Film : </h3><br><p class="soustitre">Titre : </p><p>${mobile.title}<p></div> <br>`)
}
  }
}
var zipcode = getUrlParam('zip','Empty');

if(zipcode != 'Empty') {
  request.open('GET', `https://api.openbrewerydb.org/breweries?by_postal=${zipcode}`, true)
// https://api.openbrewerydb.org/breweries?page=15

request.onload = function() {
  // JSON
  var data = JSON.parse(this.response)
  console.log(data)


 data.forEach(brewery => {
     console.log(brewery.longitude)
     console.log(brewery.latitude)
     console.log(brewery.name)
     console.log("------------------------------------")
    var marker = L.marker([brewery.latitude, brewery.longitude], {icon: customIcon}).addTo(macarte);
    marker.bindPopup(`${brewery.name} | Street : ${brewery.street} | City : ${brewery.city}\nType : ${brewery.brewery_type}`);
    })




  //document.write(`<div class="card"><h3>Film : </h3><br><p class="soustitre">Titre : </p><p>${mobile.title}<p></div> <br>`)
}
}
var city = getUrlParam('city','Empty');

if(city != 'Empty') {
  request.open('GET', `https://api.openbrewerydb.org/breweries?by_city=${city}`, true)
// https://api.openbrewerydb.org/breweries?page=15

request.onload = function() {
  // JSON
  var data = JSON.parse(this.response)
  console.log(data)


 data.forEach(brewery => {
     console.log(brewery.longitude)
     console.log(brewery.latitude)
     console.log(brewery.name)
     console.log("------------------------------------")
    var marker = L.marker([brewery.latitude, brewery.longitude], {icon: customIcon}).addTo(macarte);
    marker.bindPopup(`${brewery.name} | Street : ${brewery.street} | City : ${brewery.city}\nType : ${brewery.brewery_type}`);
    })




  //document.write(`<div class="card"><h3>Film : </h3><br><p class="soustitre">Titre : </p><p>${mobile.title}<p></div> <br>`)
}
}

var zipcode = getUrlParam('zip','Empty');
var city = getUrlParam('city','Empty');
var search = getUrlParam('q','Empty');
var mytext = getUrlParam('text','Empty');

// requete
request.send()
document.write(`<p>Debug : ${zipcode} ${city} ${mytext}</p>`)