import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {MatIconRegistry} from '@angular/material/icon';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit  {
	title = 'app';

	

	constructor(private matIconRegistry:MatIconRegistry ) {
		/* Rien .. pour l'instant */
		//matIconRegistry.addSvgIcon('lightbulb','https://materialdesignicons.com/api/download/icon/svg/ECC94305-DFA6-4D9B-85C8-CC79F3F05FB5');
		/* Permet d'utiliser le set d'Icon Material Design installé en local depuis 'npm install mdi'*/
		matIconRegistry.registerFontClassAlias('Material Design Icons','mdi');
	}

	ngOnInit():void {

	}
}
