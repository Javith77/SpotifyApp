import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe((param) => {
      this.getArtist(param.id);
      this.getTopTracks(param.id);
    });
  }

  ngOnInit(): void {}

  getArtist(id: string) {
    this.spotifyService.getArtist( id ).subscribe(( resp: any ) => {
      this.artist = resp;
      this.loading = false;
    });
  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks( id ).subscribe(( resp: any) => {
      this.topTracks = resp;
      console.log(this.topTracks);
    })
  }
}
