import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceCard } from "./service/service";

@Component ({
    template: `
        <div class="pyr">
            <h1>Giocatori dell'Ac Milan</h1>
            <hr>
            <div  *ngFor="let card of player" class="pick">
                <child-component (cambio)="dati($event)" [card]="card"></child-component>
            </div>
        </div>
    `
})

export class ParentComponent implements OnInit {
    player: any = []
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.player = this.route.snapshot.data['player']
    }
    // questo mi serve per il collegamento @Output figlio/padre
    dati(x: any) {
        console.log("Cliccato su: ", x)
    }
}