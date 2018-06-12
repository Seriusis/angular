import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FormsModule } from '@angular/forms';
import { FilmItemComponent } from './film-list/film-item/film-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule
  ],
  declarations: [
    MainComponent, 
    FilmListComponent, 
    FilmItemComponent
  ]
})
export class FilmCatalogModule { }
