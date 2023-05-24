import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http: HttpClient) { }

  geTopHeadlines(category : string): Observable<any>{

    var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ed28e9c127384886ac06c447a907d76e';
    
    if(category){
      url = `${url}&category=${category}`
    }

    return this._http.get(url);
  }
}
