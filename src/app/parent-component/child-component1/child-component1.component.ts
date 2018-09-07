import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.css']
})
export class ChildComponent1Component implements OnInit {
  constructor() { }
  @Output() childEmitter = new EventEmitter();
  ngOnInit() {
  }

  radioHandler(value){
    this.childEmitter.emit({
      radioValue : value
    });
  }

  selectHandler(value){
    this.childEmitter.emit({
      selectValue : value
    });
  }
}
