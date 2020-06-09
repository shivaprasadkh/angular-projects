import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { from } from 'rxjs';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  
  selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
}

  constructor(private messageService: MessageService) { }

  /*getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }*/

  ngOnInit(): void {
    //this.getHeroes();
  }

}
/*export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}*/
