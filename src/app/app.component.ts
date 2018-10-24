import { Component } from '@angular/core';

import { Album } from './models/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPlayingSong: string = "test";
  album: Array<Album> = [
    {
      artist: 'Ariana Grande',
      coverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png',
      title: 'Sweetener',
      releaseDate: new Date('9/18/2018'),
      owned: false,
      trackList: [
        'Raindrops (An Angel Cried)',
        'Blazed',
        'The Light Is Coming',
        'R.E.M',
        'God Is A Woman',
        'Sweetener',
        'Successful',
        'Everytime',
        'Breathin',
        'No Tears Left to Cry',
        'Borderline',
        'Better Off',
        'Goodnight n Go',
        'Pete Davidson',
        'Get Well Soon'
      ]
    }
  ];



}
