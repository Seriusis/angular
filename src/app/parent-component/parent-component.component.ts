import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChildComponent2Component } from './child-component2/child-component2.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  @Input() childEmitter;
  @ViewChild (ChildComponent2Component) child : ChildComponent2Component;
  textColor:string;
  constructor() { }

  ngOnInit() {
  }

  getChildData(data){
    data.radioValue && this.child.changeFontSize(data.radioValue);
    data.selectValue && (this.textColor = data.selectValue);
  }


}
