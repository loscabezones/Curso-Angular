import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = "Bearer BQBLZYVu6M13le2amsmyyFsWXPStS3rsGOS_jSKdSvHnpxQVJkt_PLTbWSEqvFDMJJwmRDe3aZy3n9l4SUU";

  constructor(private http: HttpClient) { }

  getNewToken(){

    const clientId = "80010743b6704fbbaa00df329e91ed49";
    const clientSecret = "27f417b867034a02b56a0465e9590c06";

    return  this.http.get(`https://spotify-get-token.herokuapp.com/spotify/${clientId}/${clientSecret}`);

  }

  getChangeToken( toquen?:string ){

    if (toquen){
      this.token = toquen;
    }  
    console.log("el toquen cambiado :"+this.token)

  }

  getQuery(query: string) {

    const headers = new HttpHeaders({
      'Authorization': `${this.token}`
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(`${url}`, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=30').pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map(data => data['tracks']));
  }


}
