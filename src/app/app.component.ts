import { Component } from '@angular/core';
import { RedditAPIService } from './reddit-api.service';
import { Posts } from './Posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //This is an array of all the services the component will use 
  //You may use as many or as few services as you wish
  providers: [RedditAPIService]
})
export class AppComponent {
  title = "service demo";
  redditData?: Posts;
  
  constructor(private redditAPI: RedditAPIService) {
    this.redditAPI.getPosts().subscribe(
      (response: Posts) => {
        this.redditData = response;
      });
  }

  
}
