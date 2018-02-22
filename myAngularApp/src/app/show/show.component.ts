import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	authors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
	this.getAuthorsFromService();
  }

  getAuthorsFromService() {
	let observable = this._httpService.getAuthors();
	observable.subscribe(data => {
		console.log("Got our authors!", data)
		this.authors = data['authors'];
	})
  }
  onDeleteButtonClick(id) {
	  let observable = this._httpService.deleteAuthor(id);
	  observable.subscribe(data => {
		  console.log("Deleted an author", data);
	  });
	  this.getAuthorsFromService();
  }

  saveIDtoService(a_ID){
    this._httpService.authorID = a_ID
    console.log(a_ID)
  }

}
