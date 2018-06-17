import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';


@Component({
  selector: '.films',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  description: string = 'Middle card description';
  films = []; 
  favorites:number;
  //searchResults = [];
  sortingMethod:number;
  
  constructor(private filmsService: FilmService) {}
  
  getFilms(start = null){
    this.films = this.filmsService.getFilms(this.sortingMethod, start);
  }
  
  ngOnInit() { 
    this.getFilms('start');
    this.updateFavorites();
  }

  onUpdateFavorite(index){
    this.films[index].favorite = !this.films[index].favorite;
    this.updateFavorites();
  }

  updateFavorites(){
    this.favorites = this.films.filter(item => item.favorite).length;
  }



  searchFilm(value){
    if(value.length > 2){
      let exp = new RegExp(value, "i")
      this.films = this.filmsService.getFilms(this.sortingMethod).filter(item => {
        return exp.test(item['name']);//item.name дает ошибку "Свойство "name" не существует в типе "object"."
      })
    } else {
      this.getFilms('start');
    }
  }

  isLastPage(){
    return this.filmsService.isLastPage();
  }
  showMore(){
    this.getFilms();
  }

  trackByFn(index, item) {
    return item.id;
  }

}
