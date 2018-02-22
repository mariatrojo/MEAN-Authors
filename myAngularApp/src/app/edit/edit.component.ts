import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	// author = {};
	// id: number;
	theAuthor = {name: ""}

  constructor(
	  private _httpService: HttpService, 
	  private _router: Router, 
	  private _route: ActivatedRoute
	) { }

  ngOnInit() {
	
	this._route.params.subscribe((params: Params) => {
		console.log(params['id']);
		this.getTheAuthor(params['id']);
	})

    // this._httpService.findOneAuthorByID(this._httpService.authorID).subscribe(data => {
    //   if(data["error"]){
    //     console.log("Something happened on Init", data["error"])
    //   }else{
    //     this.author = data
    //   }
    // })
  }

  getTheAuthor(ID) {
	  let observable = this._httpService.findOneAuthorByID(ID);
	  observable.subscribe(data => {
		  this.theAuthor = data['data'];
		  console.log('Hi this is from getTheAuthor', this.theAuthor);
	  })
  }

  onSubmit(){
	  this._httpService.editAuthor(this._httpService.authorID, this.author).subscribe(data => {
		  if(data["error"]){
			  console.log(data["error"]);
		  } else {
			  console.log(data['db']);
			  //Update fix: works once we add the Router module to redirect
			  this._router.navigate(['/show']);
		  }
	  })
  }


}
