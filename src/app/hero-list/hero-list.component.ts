import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: any = [];
  selectedHero: any;
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeros().subscribe(data => {
      // console.log(data);
      this.heroes = data.items;
    })
  }

  onSelect(data: any): void {
    this.selectedHero = data;
  }
}
