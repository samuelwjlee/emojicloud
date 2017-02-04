function initMap(geo) {
  // var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: geo
  });
  var marker = new google.maps.Marker({
    position: geo,
    map: map
  });
}
