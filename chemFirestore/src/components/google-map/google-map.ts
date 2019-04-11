import { Component, ViewChild } from '@angular/core';
import { convertUrlToDehydratedSegments } from 'ionic-angular/umd/navigation/url-serializer';


@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})

export class GoogleMapComponent {

  @ViewChild("map") mapElement;

  map: any;
  constructor() {
    
  }
  ngOnInit(){
    this.initMap();
  }

  initMap(){
     // LATS LNG : Nyeri Cordinates: -.4169, 36.951  Nairobi Coords:  -1.2833, 36.8167

    let coords =  new google.maps.LatLng(-1.2833, 36.8167);
    let mapOptions: google.maps.MapOptions  = {
      center:coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)

    let marker : google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })
    
  }
}
