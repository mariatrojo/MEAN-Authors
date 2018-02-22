import { Component, OnInit } from '@angular/core';
import { ShowComponent } from './show/show.component';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite authors';

  constructor(private _httpService: HttpService){}


//   onSubmit() {
// 	  let observable = this._httpService.addAuthor(this.newAuthor);
// 	  observable.subscribe(data => {
// 		  console.log("Got a new author", data);
// 		  this.newAuthor = { name: "" }
// 	  })
//   }
}
