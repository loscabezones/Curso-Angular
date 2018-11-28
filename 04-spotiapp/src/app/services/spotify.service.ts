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
      'Authorization': 'Bearer BQDoeEmap6j8SzshIK_AQqWDELB32raSBjKdEM0w4ycT5GqhmvWvs2e53UoQyEdptgF5MMRzHASucCCRSv8'
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
