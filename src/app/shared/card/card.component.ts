import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/service.service';

type DataPeliculas = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  datosPeliculas!: DataPeliculas[];

  constructor(private sharedService: SharedService) {}

  async ngOnInit(): Promise<void> {
    const data = await this.sharedService.get();
    if (data) {
      this.datosPeliculas = [...data.results];
    }
    console.log('datoooos: ', this.datosPeliculas);
  }
}
