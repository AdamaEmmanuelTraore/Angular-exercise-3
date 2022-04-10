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
            <div>Età: {{Card.eta}}</div>
            <div>Reti: {{Card.reti}}</div>
            <div>Assist: {{Card.assist}}</div>
        </div>
    `
})

export class ChildComponent {
    @Input() Card: any
}