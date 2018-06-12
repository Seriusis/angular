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
  favorites = [];
  searchResults = [];
  sortingMethod:string = '';
  
  constructor(private filmsService: FilmService) {}
  
  getFilms(){
    this.films = this.filmsService.getFilms();
  }
  
  ngOnInit() { 
    this.getFilms();
    this.updateFavorites();
    console.log(this.filmsService.pageConfig)
  }

  onUpdateFavorite(index){
    this.films[index].favorite = !this.films[index].favorite;
    this.updateFavorites();
  }

  updateFavorites(){
    this.favorites = this.films.filter(item => item.favorite && item);
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

  searchFilm(value){
    if(value.length > 2){
      let exp = new RegExp(value, "i")
      this.films = this.filmsService.getFilms().filter(item => {
        return exp.test(item['name']);//item.name дает ошибку "Свойство "name" не существует в типе "object"."
      })
    } else {
      this.filmsService.updatePage();
      this.getFilms();
    }
  }

  isLastPage(){
    return this.filmsService.isLastPage();
  }
  showMore(){
    this.filmsService.updatePage();
    this.getFilms();
   // this.sortItems(this.sortingMethod)
  }

  trackByFn(index, item) {
    return item.id;
  }

}
