import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero :any = {};

  constructor(private heroService: HeroService ) { }

  ngOnInit(): void {
    this.getSelectedHero();
  }

  getSelectedHero(): void{
    this.heroService.selectedHeroObs.subscribe(data => {
      this.hero = data;
    }); 

  }

}
