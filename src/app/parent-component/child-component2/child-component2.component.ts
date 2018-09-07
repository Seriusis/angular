import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component implements OnInit {

  constructor() { }
 
  msg:string = 'Текст дочернего компонента'
  fontSize = {
    small : false,
    medium : false,
    large : false
  }
  @Input () color;
  fontColor:string;
  ngOnInit() {
  }

  ngOnChanges(changes): void {
      this.fontColor = changes.color.currentValue;
    
  }

  changeFontSize(size){
    this.fontSize.small =  this.fontSize.medium = this.fontSize.large = false;
    switch(size){
      case 'small' : this.fontSize.small = true;
      break;
      case 'medium' : this.fontSize.medium = true;
      break;
      case 'large' : this.fontSize.large = true;
      break;
    }
  }
}
