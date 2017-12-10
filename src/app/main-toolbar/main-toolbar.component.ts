import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
	selector: 'app-main-toolbar',
	templateUrl: './main-toolbar.component.html',
	styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent  {
	mode = new FormControl('over');
	
	constructor() { }

	
}
