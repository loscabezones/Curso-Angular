import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCE7LrQ8SSjZRZVXzo_F8V-n7AxoNhFdL8pgJ5-NZ88UfdVU2idzu96QglL8oNvtv7NMbhIq4kkpmMTCh0'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).subscribe(data=>{
      console.log(data);
    });

  }
}
