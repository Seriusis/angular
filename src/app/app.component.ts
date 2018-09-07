import { Component } from '@angular/core';
//import { FormsModule, FormControl, FormGroup }   from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  userForm = new FormGroup({
    name : new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
      Validators.pattern("[a-zA-Z0-9]*")
    ]),
    lastName : new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
      Validators.pattern("[a-zA-Z0-9]*")
    ]),
    telephone1 : new FormControl('', [
    //  Validators.pattern(new RegExp ('^\\+38\\(0\\d{2}\\)\\s\\d{3}\\s\\d{2}\\s\\d{2}$')),
      Validators.pattern(/^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/)
    ]),
    address : new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(200),
      Validators.pattern("[a-zA-Z0-9,./]*")
    ]),
    email : new FormControl('', [
      Validators.pattern(/[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)
    ]),

  });

  formErrors = {
    'name':'',
    'lastName' : '',
    'telephone1' : '',
    'email' : '',
    'address' : ''
  }

  errorMessage = {
    'name' : {
      'required' : 'Имя обязательно к заполнению!',
      'minlength' : 'Имя должно быть от 2 символов',
      'maxlength' : 'Имя должно быть до 25 символов',
      'pattern' : 'Имя некоректно'
    },
    'lastName' : {
      'required' : 'Фамилия обязательна к заполнению!',
      'minlength' : 'Фамилия должна быть от 2 символов',
      'maxlength' : 'Фамилия должна быть до 25 символов',
      'pattern' : 'Фамилия некоректна'
    },
    'email' : {
      'required'  : "Email обязателен к заполнению",
      'pattern' : 'Email в некорректном формате'
    },
    'telephone1' : {
     'pattern' : 'Телефон в некорректном формате',
     'minlength' : 'test min',
     'maxlength' : 'test max'
    }, 
    'address' : {
      'minlength' : 'Адрес должен быть от 2 символов',
      'maxlength' : 'Адрес должен быть до 200 символов',
      'pattern' : 'Адрес некорректен'
    },
  
  }

  ngOnInit(){
    this.buildForm();
  }

  buildForm(){


    //подписка на изменение формы
    this.userForm.valueChanges.subscribe(
      data => {
        //console.log(data) 
        //console.log( this.userForm)
        this.validateForm()
      }
  )
  }

  validateForm(){
    if(!this.userForm) return;
    
    for(let item in this.formErrors){
      this.formErrors[item] = '';

      let control = this.userForm.get(item);
      if (control && control.dirty && !control.valid) {
        let msg = this.errorMessage[item];
        for(let key in control.errors){
          this.formErrors[item] += msg[key] + " ";
        }
        console.log(control)
      }

     
    }
  }

}
