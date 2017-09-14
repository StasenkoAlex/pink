function initialize() {
  var mapCanvas = document.getElementById('map');

  var mapOptions = {
    scrollwheel: false,
    center: new google.maps.LatLng(59.9388218,30.3230753),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var image = "./img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9388218,30.3230753);
  var pinkMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: {
      url: image/*,
      scaledSize: new google.maps.Size(36,36)*/
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);