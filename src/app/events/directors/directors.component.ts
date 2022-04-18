import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceCard } from "../service/service";

@Component({
    templateUrl: './directors.component.html',
    styleUrls: ['./directors.component.css']
})

export class DirectorsComponent {
    director: any = []
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.director = this.route.snapshot.data['directors']
    }
}