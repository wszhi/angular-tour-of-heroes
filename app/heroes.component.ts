import {Component} from '@angular/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'html/heroes.component.html',
    styleUrls: [ 'css/heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    selectedHero:Hero;
    heroes:Hero[];

    constructor(
        private heroService:HeroService,
        private router :Router) {}

    ngOnInit():void {
        this.getHeroes()
    }

    onSelect(hero:Hero):void {
        this.selectedHero = hero;
    }


    getHeroes():void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
