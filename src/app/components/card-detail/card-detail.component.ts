import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieListService } from '../card-list/movieList.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  public detail :any ;
  public relatedData: any;
  private routeSub: any;
  public shuffled: any;
  constructor(public api:MovieListService,private route:ActivatedRoute) { 
    console.log(route.params)
  }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.detail = this.api.movieService().filter((e:any)=>e.id == params['id']);
      this.relatedData = this.api.movieService().filter((e:any)=>e.id !== params['id']);
      this.shuffled = this.relatedData.sort(() => 0.5 - Math.random());
      this.relatedData = this.shuffled.slice(0,3);
    });
  }

}
