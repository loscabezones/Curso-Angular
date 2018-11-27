import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQACzgrvBBEBylr2TWA1wo45dPqBC5Ivq-lwYS5Q7-p0YSydffg45oapoTQ2JrfIuli-dCIsfwFbHSZBhvY'
    });

    return  this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }



}
