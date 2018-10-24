import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent{

  @Input('songName') name: string;
  @Output() songSelected = new EventEmitter<string>();

  emitSongSelection(select: boolean)
  {
    this.songSelected.emit(this.name);
  }
}
