//import { Component } from '@angular/core';

//@Component({
 // selector: 'app-root',
 // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
//})
//export class AppComponent {
 // title = 'angular-binding';
//}

//@Component({
  //selector: 'app-root',
  //templateUrl: './app/app.component.html',
  //styleUrls: ['./app/app.component.css']
//})

import {Component} from '@angular/core';
import {Employee} from './employee';
@Component({
    selector: 'app-root',
    //selector: 'two-way-binding',
    templateUrl: 'app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
        //Property for MsgComponent and AliasComponent
	msg = 'Hello World';

        //Property for AliasComponent
	city = 'Varanasi';	
	
	//Property for TextSizeComponent
	textSize = 20;
	
	//Property for SelectBoxComponent
	colors = ['RED', 'GREEN', 'YELLOW'];
	
	//Property for CaseComponent
	emp = new Employee(1, 'Mohan Das');
}   