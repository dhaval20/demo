import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  numbers: Number[] = Array(10).map((x,i)=>i)
  displayView = "list";
  
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markers: google.maps.LatLngLiteral[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
	 },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
	  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  switchView(view: string) {
    this.displayView = view;
  }

}
