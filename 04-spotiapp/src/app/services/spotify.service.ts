import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqVhFOFar0tQLvEaFDV8GwL43BDKokAg2XcK-UhMQrtmsiKW9gFdTVJT_3GJv4pXr9LXEpELeVgUN04Gw'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(`${url}`, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=30').pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));

  }


}
