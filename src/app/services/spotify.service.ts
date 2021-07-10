import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string =
    'Bearer BQCRE8HEeUxVfFePCaxhCSWFVie7L7P-RW0MlePXvgoQ6YwCCR4nXnF9htGlxkf6WVAaMnhYUJgVnLfzTOY';

  constructor(private httpClient: HttpClient) {}

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: this.token,
    });

    return this.httpClient.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
      .pipe(map((data: any) => data.tracks));
  }
}
