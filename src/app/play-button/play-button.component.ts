import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlayButtonComponent {
  @Output() selected = new EventEmitter<boolean>();

  songSelect(select: boolean) {
    this.selected.emit(select);
  }
}
