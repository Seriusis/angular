import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Output() update = new EventEmitter<string>();
  @Input() film: object;
  //@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

  favoriteHandler(index){
    this.update.emit();
  }

}
