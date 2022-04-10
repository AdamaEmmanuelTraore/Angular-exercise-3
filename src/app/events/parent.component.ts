import { Component } from "@angular/core";

@Component ({
    selector: 'parent-component',
    template: `
        <div>
            <h1 class="pyr">Giocatori dell'Ac Milan</h1>
            <hr>
            <div class="pick">
                <child-component [Card]="card"></child-component>
            </div>
        </div>
    `
})

export class ParentComponent {
    card = [{
        id: 1,
        img: '/assets/images/Mike_Maignan.jpg',
        ruolo: 'Portiere',
        numero_maglia: 16,
        nome: 'Mike',
        cognome: 'Maignan',
        nazionalita: 'Francese',
        età: '27 anni',
        reti: 0,
        assist: 1
    }]
}