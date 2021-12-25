import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public data:any = [];

  constructor(private http: HttpClient) {
   const url ='https://api.themoviedb.org/3/movie/top_rated?api_key=ff76cec2f9b39d952b64c9d65d6732fa&language=en-US';
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    this.http.get(url).subscribe((res:any)=>{
      this.data = {
        api_data : res.results,
        image : imgUrl
        
      }
    })
  }

  ngOnInit(): void {
  }

}
