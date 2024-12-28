import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@shared/models/track.model';

@Component({
  selector: 'app-play-list-header',
  templateUrl: './play-list-header.component.html',
  styleUrls: ['./play-list-header.component.css'],
})
export class PlayListHeaderComponent implements OnInit {
  tracks: TrackModel[] = [
    {
      _id: 1,
      name: 'Getting Over',
      album: 'One Love',
      cover:
        'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
      artist: {
        name: 'David Guetta',
        nickname: 'David Guetta',
        nationality: 'FR',
      },
      duration: {
        start: 0,
        end: 333,
      },
      url: 'http://localhost:3000/track.mp3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
