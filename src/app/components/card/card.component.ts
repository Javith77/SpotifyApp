import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [],
})
export class CardComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getArtist(item: any) {
    const artistId = item.type === 'artist' ? item.id : item.artists[0].id;
    this.router.navigate(['/artist/', artistId]);
  }
}
