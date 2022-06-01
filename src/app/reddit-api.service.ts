import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './Posts';

@Injectable({
  providedIn: 'root'
})
export class RedditAPIService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts> {
    return this.http.get<Posts>("https://www.reddit.com/r/aww/.json");
  }
}
