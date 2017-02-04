let map;
let markers = [];
let current_continent;
// let image = 'http://medcitynews.com/wp-content/uploads/twitter-blue-bird.png'
//load map, default to world map
function initMap(geo = {lat: 48, lng: 67}, zoom = 2) {
  // var uluru = {lat: -25.363, lng: 131.044};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: geo
  });

  const continents = {
    48: 'world',
    7: 'africa',
    34: 'asia',
    50: 'europe',
    39: 'us'
  }
  current_continent = continents[geo.lat];
}

function placeMark(geo) {
  marker = new google.maps.Marker({
    position: geo,
    map: map,
    animation: google.maps.Animation.DROP
    // icon: image
  });

  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
