import { Component, OnInit } from '@angular/core';
import { LocacionService } from '../services/locacion.service';
import { Marker , WayPoint  } from '../Interface/general';

declare var google;
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  map : any;
 
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  origin = { lat: -11.944030, lng: -77.039274 };  
  destination = { lat: -11.9411975, lng: -77.044046};
  markers: Marker[] = [];

  // wayPoints: WayPoint[] =[]; lo ideal

  // lo q no se deberia hacer pero funciona xD
  wayPoints: WayPoint[] = [
    {
      location: { lat: -11.9424502, lng: -77.042493},
      stopover: true,
    },
    {
      location: { lat: -11.9413847, lng: -77.0456427},
      stopover: true,
    },
   
  ];
  
  constructor( private location: LocacionService) { }

  ngOnInit() {
    this.markers = this.location.markers;
    this.loadMap();
  }
  
  async loadMap() {
    // creacion del mapa
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    
   //  const myLatLng = {lat: -11.944030, lng:-77.039274}
    
      this.map = new google.maps.Map(mapEle, {
        center: this.origin,
        disableDoubleClickZoom: true,
        zoom: 16,       
      });   

      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.setPanel(indicatorsEle);

      google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
        mapEle.classList.add('show-map');
        this.calculateRoute();
        this.renderMarkers();       
      
      });
       
     
    // });
    
  }
  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination, 
      waypoints: this.wayPoints,     
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
   
   addMarker(markerObj: Marker) {
    return new google.maps.Marker({
      position: markerObj.position,
      map: this.map,
      title: markerObj.title
    });
  }

}