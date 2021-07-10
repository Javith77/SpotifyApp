import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.loading = true;
    this.spotifyService.getArtists(term).subscribe((resp: any) => {
      this.artists = resp;
      this.loading = false;
    });
  }
}
