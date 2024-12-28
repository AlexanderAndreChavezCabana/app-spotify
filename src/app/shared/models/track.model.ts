export interface TrackModel {
  _id: number;
  name: string;
  album: string;
  cover: string;
  artist: {
    name: string;
    nickname: string;
    nationality: string;
  };
  duration: {
    start: number;
    end: number;
  };
  url: string;
}
