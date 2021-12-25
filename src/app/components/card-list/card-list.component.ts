import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CardListService } from './card-list.service';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public data:any = [];

  constructor(private api:CardListService){

  }

  // constructor(private http: HttpClient) { 
  //   const url ='https://api.themoviedb.org/3/genre/movie/list?api_key=ff76cec2f9b39d952b64c9d65d6732fa&language=en-US';
  //   this.http.get(url).subscribe((res:any)=>{
  //     this.genreData = res.genres
  //     console.log(this.genreData)
  //   }) 
  // }
  // getSelectedId(val:any){
  //   this.selectBox = val;
  //   const url ='https://api.themoviedb.org/3/movie/top_rated?api_key=ff76cec2f9b39d952b64c9d65d6732fa&language=en-US';
  //   this.http.get(url,{params:{}}).subscribe((res:any)=>{
  //     this.data = {
  //       api_data : res.results,
  //       image : imgUrl
  //     }
  //     for(let i = 0 ; i< this.data.api_data.length; i++){
  //       for(let j = 0 ; j<this.data.api_data[i].genre_ids.length;j++){
  //         if(this.data.api_data[i].genre_ids[j] == this.selectBox){
  //           this.filterData=(this.data.api_data[i]);
  //         }
  //       }
  //     }
  //     this.endData = this.filterData
  //     console.log(this.endData);
      
  //   })
  // }
  movieList:any = [];
  filterMovieList:any = [];
  
  public genreData:any = [
    {
      id: 0,
      name:'All'
    },
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 18,
      name:'Drama'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 53,
      name: 'Thriller'
    },
  ]
  getMovie(){
    this.movieList = this.api.movieService();
    this.filterMovieList = this.api.movieService();
    console.log(this.movieList)
  }
  changeSelected(event:any){
    // console.log(this.filterMovieList= this.movieList.filter((e:any)=>e.genre_ids == event.target.value));
    if(event.target.value == 0){
      this.getMovie();
    }else{
      this.filterMovieList = this.movieList.filter((e:any)=>e.genre_ids == event.target.value);
    }
  }
  

  ngOnInit(): void {
    this.getMovie();
  }

}
