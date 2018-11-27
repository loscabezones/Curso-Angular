import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBxddQ0r-FKual7b3VwSGriIq94h3xGK3W8k1ZwUOvpWDct9shg4cFXylXBIqTjcnUKzxKsE3G4NDWQSr8'
    });

    return  this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

  getArtista( termino:string ){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBxddQ0r-FKual7b3VwSGriIq94h3xGK3W8k1ZwUOvpWDct9shg4cFXylXBIqTjcnUKzxKsE3G4NDWQSr8'
    });

    return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });


  }


}
