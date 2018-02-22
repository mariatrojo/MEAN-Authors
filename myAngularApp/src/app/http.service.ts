import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
	
  authorID: any;

  constructor(private _http: HttpClient) { }

  getAuthors(){
	  return this._http.get('/authors');
  }

  addAuthor(newauthor) {
	return this._http.post('/authors', newauthor)
  }

  deleteAuthor(id){
	  return this._http.delete(`/authors/${id}`);
  }

  findOneAuthorByID(authorID) {
	  return this._http.get(`/authors/` + authorID);
  }

  editAuthor(authorID, author){
	  return this._http.put(`/authors/` + authorID, author);
  }


}


