import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit {
  tracks = [
    {
      name: 'Si supieras',
      album: 'Manuel Turizo',
    },
    {
      name: 'Si supieras',
      album: 'Manuel Turizo',
    },
    {
      name: 'Si supieras',
      album: 'Manuel Turizo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
