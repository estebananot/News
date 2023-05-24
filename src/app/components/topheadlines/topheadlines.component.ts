import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent {
  articles : any [] = [];

  constructor(private _service: NewsApiService,  private _route: ActivatedRoute){}

  ngOnInit(){
    this._route.data.subscribe((data: any) =>{
      this._service.geTopHeadlines(data.category).subscribe((result) => {
        this.articles = result.articles;
  
        console.log(this.articles);
      })
    })
    
  }
}
