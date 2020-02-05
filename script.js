function GetDireccion(){
  var casa = new google.maps.LatLng(6.1440983, -75.6079558);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('map'), {center: casa, zoom: 15});

  var direccion = document.getElementById('direccion').value;

  var request = {
    query: direccion,
    fields: ['name', 'geometry'],
  };

  console.log(direccion);

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      /*for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }*/
      var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: results[0].geometry.location
      });
      var marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map
      });
      //map.setCenter(results[0].geometry.location);
    }
  });  

}
    
function iniciarMap(lat, lng){
    var coord = {lat:6.1440983 ,lng: -75.6079558};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}