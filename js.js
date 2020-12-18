function taoBanDo() {
    // Loading Google Maps
    var num = new google.maps.LatLng(21.0097893, 105.7985517);
    var myOptions = {
      zoom: 16,
      center: num,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    var mymap = new google.maps.Map(
      document.getElementById("d1"),
      myOptions
    );
    var marker = new google.maps.Marker({
      position: num,
      map: mymap,
      title: "Ban do cua toi",
    });
  }