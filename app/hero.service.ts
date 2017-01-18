import {Injectable} from '@angular/core';

import {Hero} from './Hero';
import {HEROES} from './mock-heroes';
import resolve = require("resolve");

@Injectable()
export class HeroService {
    getHeroes():Hero[] {
        return HEROES;
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000))
            .then(() => this.getHeroes());
    }
}