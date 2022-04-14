import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'child-component',
    template: `
    <div class="pyrs">
        <div><img src="{{card.img}}" class="foto"></div>
        <div [ngSwitch]="card.ruolo">
            <span *ngSwitchCase="'Portiere'"><h1>Portiere</h1><hr></span>
            <span *ngSwitchCase="'Difensore'"><h1>Difensore</h1><hr></span>
            <span *ngSwitchCase="'Centrocampista'"><h1>Centrocampista</h1><hr></span>
            <span *ngSwitchCase="'Attaccante'"><h1>Attaccante</h1><hr></span>
        </div>
        <div>Numero di maglia: {{card.numero_maglia}}</div>
        <div>Nome: {{card.nome}}</div>
        <div>Cognome: {{card.cognome}}</div>
        <div>Nazionalità: {{card.nazionalita}}</div>
        <div>Età: {{card.eta}}</div>
        <div>Reti: {{card.reti}}</div>
        <div>Assist: {{card.assist}}</div>
        <br>
        <div><button [routerLink]="['/home', card.id]" type="button" (click)="Dettagli()" class="info">Scopri di più</button></div>
    </div>
    `
})

export class ChildComponent {
    @Input() card: any
    @Output() cambio = new EventEmitter()
    Dettagli() {
        this.cambio.emit("Dettagli sul calciatore")
    }
}