import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;

  constructor() { }


  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // Create a map after the view is ready and the native platform is ready.
    this.map = GoogleMaps.create('map_canvas');

    // No longer wait GoogleMapsEvent.MAP_READY event
    // ( except you use map.getVisibleRegion() )
  }



}
