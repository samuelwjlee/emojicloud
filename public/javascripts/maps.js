let map;
let markers = [];
// let image = 'http://medcitynews.com/wp-content/uploads/twitter-blue-bird.png'

function initMap(geo={lat: 39, lng: -98}) {
  // var uluru = {lat: -25.363, lng: 131.044};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: geo
  });
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
