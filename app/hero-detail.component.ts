import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './Hero'
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'html/hero-detail.component.html',
    styleUrls: [ 'css/hero-detail.component.css' ]
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

    hero:Hero;

    goBack():void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}