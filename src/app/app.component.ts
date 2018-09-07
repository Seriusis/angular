import { Component, ViewChild } from '@angular/core';
//import { FormsModule, FormControl, FormGroup }   from '@angular/forms';
//import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('userForm') userForm: NgForm;
  model = {};

  ngOnInit(){
    console.log(this.userForm)
  }


}
