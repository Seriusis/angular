import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';


@Component({
  selector: '.films',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  description: string = 'Middle card description';
  films;
  bookmarksTotal:number = 0;
  sortingMethod:string = '';
  
  constructor(private filmsService: FilmService) {}
  
  ngOnInit() { 
    this.films = this.filmsService.getFilms();
  }

  getUpdated(){
    this.bookmarksTotal += 1;
  }
  
  sortItems(direct) {
    return this.films.sort((a,b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1*direct;}
      if (x > y) {return 1*direct;}
      return 0;
    })
  }


}
