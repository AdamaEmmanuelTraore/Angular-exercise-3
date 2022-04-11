import { Injectable } from "@angular/core";

@Injectable()
export class Service {
    getService() {
        return PLAYERS
    }
}

const PLAYERS = [
    {
        id: 1,
        img: '/assets/images/Mike_Maignan.jpg',
        ruolo: 'Portiere',
        numero_maglia: 16,
        nome: 'Mike',
        cognome: 'Maignan',
        nazionalita: 'Francese',
        eta: '27 anni',
        reti: 0,
        assist: 1
    },
    {
        id: 2,
        img: '/assets/images/tata.jpg',
        ruolo: 'Portiere',
        numero_maglia: 1,
        nome: 'Ciprian',
        cognome: 'Tatarusanu',
        nazionalita: 'Roumena',
        eta: '36 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 3,
        img: '/assets/images/calabria.jpg',
        ruolo: 'Difensore',
        numero_maglia: 2,
        nome: 'Davive',
        cognome: 'Calabria',
        nazionalita: 'Italiano',
        eta: '25 anni',
        reti: 2,
        assist: 3
    }
]