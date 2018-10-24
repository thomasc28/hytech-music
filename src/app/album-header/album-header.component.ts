import { Component} from '@angular/core';

@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.css']
})
export class AlbumHeaderComponent {
  nowPlaying: string;
}
