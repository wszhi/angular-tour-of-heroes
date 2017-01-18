import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './Hero'
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    ngOnInit():void {
        this.route.params
            .switchMap((params:Params)=> this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    constructor(private heroService:HeroService,
                private route:ActivatedRoute,
                private location:Location) {
    }

    @Input()
    hero:Hero;

    goBack():void {
        this.location.back();
    }
}