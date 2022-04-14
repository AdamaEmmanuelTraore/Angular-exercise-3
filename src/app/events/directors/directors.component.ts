import { Component } from "@angular/core";
import { ServiceCard } from "../service/service";

@Component({
    templateUrl: './directors.component.html',
    styleUrls: ['./directors.component.css']
})

export class DirectorsComponent {
    director: any = []
    constructor(private service: ServiceCard) {

    }
    ngOnInit() {
        this.director = this.service.getDirectors()
    }
}