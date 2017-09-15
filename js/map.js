function initMap() {
  var uluru = {lat:59.9388218, lng:30.3230753};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: {
      url: "./img/map-marker.png"
    }
  });
}
