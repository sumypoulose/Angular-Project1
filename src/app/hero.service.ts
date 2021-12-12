import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  //selectedHero: any;  
  heroListObs = new BehaviorSubject<any>([]);
  selectedHeroObs = new BehaviorSubject<any>({});

  constructor() {
    this.getAllHeroes();
  }

  // public getAllHeros(): Observable<any> {  //getallHeros is observing
  //   return of(HEROES).pipe(delay(500));
  // }

  getAllHeroes():void{
    of(HEROES).pipe(delay(5000)).subscribe(data => {
      this.heroListObs.next(data.items)
    });
  }

  setSelectedHero(data : any){
    //this.selectedHero = data;
    //console.log(this.selectedHero);
    this.selectedHeroObs.next(data);
  }
}

const HEROES = {
  items: [     //const is type. cannt modify const variable
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ],
  total: 30,
  page: 1,
  pageSize: 10
}
