import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

interface NewsResponse {
	albumId:string;
	id:string;
	title:string;
	url:string;
	thumbnailUrl:string;		
}

@Component({
  selector: 'app-news-silene',
  templateUrl: './news-silene.component.html',
  styleUrls: ['./news-silene.component.css']
})
export class NewsSileneComponent implements OnInit {

	myData : Array<NewsResponse>;
	constructor(private http:HttpClient) { }

	ngOnInit() {
		/* On récupère les données mockés dans jsonplaceholder qu'on stock dans la variable privée : myData*/
		this.http.get<Array<NewsResponse>>('https://jsonplaceholder.typicode.com/photos')		
		.subscribe(
			data => {
				/*console.log(data);*/
				this.myData = data
				/*console.log("this.myData" + this.myData);*/
			});
		/*console.log(this.myData);*/
	}
}
