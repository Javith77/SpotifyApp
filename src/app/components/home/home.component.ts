import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {

  albums: any[] = [];
  loading: boolean = true;

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases().subscribe((resp: any) => {
      this.albums = resp;
      this.loading = false;
    });
  }

  ngOnInit(): void {}
}
