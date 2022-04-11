import { Component, OnInit } from "@angular/core";
import { Service } from "./service/service";

@Component ({
    selector: 'parent-component',
    template: `
        <div class="pyr">
            <h1>Giocatori dell'Ac Milan</h1>
            <hr>
            <div  *ngFor="let card of player" class="pick">
                <child-component [card]="card"></child-component>
            </div>
        </div>
    `
})

export class ParentComponent implements OnInit {
    player: any = []
    constructor(private service: Service) {

    }
    ngOnInit() {
        this.player = this.service.getService()
    }
}