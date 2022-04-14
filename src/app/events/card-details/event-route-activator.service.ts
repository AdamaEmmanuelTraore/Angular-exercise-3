import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ServiceCard } from "../service/service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private service: ServiceCard, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist= !!this.service.getElement(+route.params['id'])
        if(!eventExist) {
            this.router.navigate(['404'])
        } return eventExist
    }
}