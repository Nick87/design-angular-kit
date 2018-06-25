import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-checkbox-index',
  templateUrl: './checkbox-index.component.html',
  styleUrls: ['./checkbox-index.component.scss']
})
export class CheckboxIndexComponent implements OnInit {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'CheckboxComponent');
  }

  ngOnInit() {
  }

}
