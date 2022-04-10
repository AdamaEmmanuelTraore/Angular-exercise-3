import { Component, Input } from "@angular/core";

@Component ({
    selector: 'child-component',
    template: `
        <div class="pyrs">
            <div>{{Card.img}}</div>
            <div>Ruolo: {{Card.ruolo}}</div>
            <div>Numero di maglia: {{Card.numero_maglia}}</div>
            <div>Nome: {{Card.nome}}</div>
            <div>Cognome: {{Card.Cognome}}</div>
            <div>Nazionalità: {{Card.nazionalitav}}</div>
            <div>Età:</div>
            <div>Reti:</div>
            <div>Assist:</div>
        </div>
    `
})

export class ChildComponent {
    @Input() Card: any
}