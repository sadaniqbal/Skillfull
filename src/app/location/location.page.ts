import { Component, OnInit } from "@angular/core";
declare var google: any;

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"],
})
export class LocationPage implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initMap();
  }
  // Initialize and add the map
  initMap(): void {
    // The location of Uluru
    const csulb = { lat: 37.4850772, lng: -122.1504711 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 14,
        center: csulb,
      }
    );

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: csulb,
      map: map,
    });
  }
}
