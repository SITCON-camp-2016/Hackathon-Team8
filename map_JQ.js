
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$('#s').change(function() {
  var val = $('#s').val().split(',');
  var latLng = [val[1], val[2]];
  map.setView(latLng, 30);
  L.marker(latLng).addTo(map);
});


$('#submit').on('click', function(event){
$.ajax({
url: "",
data: $('form').serialize(),
type: "POST",
dataType: "json"
})
})
