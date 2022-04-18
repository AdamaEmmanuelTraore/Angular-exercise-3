import { Injectable } from "@angular/core";
import {Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { ServiceCard } from "./service/service";

@Injectable()
export class DirectorsListResolver implements Resolve<any> {
    constructor(private service: ServiceCard) {

    }
    resolve() {
        return this.service.getDirectors().pipe(map(directors => directors))
    }
}