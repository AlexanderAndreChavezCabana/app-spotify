import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@shared/models/track.model';
import * as dataRaw from '@data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent implements OnInit {
  @Input() Tracks: TrackModel[] = [];
  optionSort: {
    property: string | null;
    order: string;
  } = {
    property: null,
    order: 'asc',
  };

  tracks: TrackModel[] = [];

  constructor() {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
    // console.log(this.optionSort);
  }
}
