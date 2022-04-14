import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceCard } from "../service/service";

@Component({
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.css']
})

export class CardDetailsComponent {
    card: any
    constructor(private service: ServiceCard, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.card = this.service.getElement(+this.route.snapshot.params['id'])
    }
}