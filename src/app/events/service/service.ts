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
        img: '/assets/images/mike.png',
        ruolo: 'Portiere',
        numero_maglia: 16,
        nome: 'Mike',
        cognome: 'Maignan',
        nazionalita: 'Francia',
        eta: '27 anni',
        reti: 0,
        assist: 1
    },
    {
        id: 2,
        img: '/assets/images/tata.png',
        ruolo: 'Portiere',
        numero_maglia: 1,
        nome: 'Ciprian',
        cognome: 'Tatarusanu',
        nazionalita: 'Romania',
        eta: '36 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 3,
        img: '/assets/images/calabria.png',
        ruolo: 'Difensore',
        numero_maglia: 2,
        nome: 'Davive',
        cognome: 'Calabria',
        nazionalita: 'Italia',
        eta: '25 anni',
        reti: 2,
        assist: 3
    },
    {
        id: 4,
        img: '/assets/images/florenzi.png',
        ruolo: 'Difensore',
        numero_maglia: 25,
        nome: 'Alessandro',
        cognome: 'Florenzi',
        nazionalita: 'Italia',
        eta: '31 anni',
        reti: 1,
        assist: 0
    },
    {
        id: 5,
        img: '/assets/images/kjaer.png',
        ruolo: 'Difensore',
        numero_maglia: 24,
        nome: 'Simon',
        cognome: 'Kjaer',
        nazionalita: 'Danimarca',
        eta: '33 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 6,
        img: '/assets/images/tomori.png',
        ruolo: 'Difensore',
        numero_maglia: 23,
        nome: 'Fikayo',
        cognome: 'Tomori',
        nazionalita: 'Inghilterra',
        eta: '24 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 7,
        img: '/assets/images/romagnoli.png',
        ruolo: 'Difensore',
        numero_maglia: 13,
        nome: 'Alessio',
        cognome: 'Romagnoli',
        nazionalita: 'Italia',
        eta: '27 anni',
        reti: 1,
        assist: 0
    },
    {
        id: 8,
        img: '/assets/images/gabbia.png',
        ruolo: 'Difensore',
        numero_maglia: 46,
        nome: 'Matteo',
        cognome: 'Gabbia',
        nazionalita: 'Italia',
        eta: '22 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 9,
        img: '/assets/images/theo.png',
        ruolo: 'Difensore',
        numero_maglia: 19,
        nome: 'Theo',
        cognome: 'Hernandez',
        nazionalita: 'Francia',
        eta: '24 anni',
        reti: 4,
        assist: 6
    },
    {
        id: 10,
        img: '/assets/images/toure.png',
        ruolo: 'Difensore',
        numero_maglia: 5,
        nome: 'Ballo',
        cognome: 'Touré',
        nazionalita: 'Senegal',
        eta: '25 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 11,
        img: '/assets/images/kalulu.png',
        ruolo: 'Difensore',
        numero_maglia: 20,
        nome: 'Pierre',
        cognome: 'Kalulu',
        nazionalita: 'Francia',
        eta: '21 anni',
        reti: 1,
        assist: 1
    },
    {
        id: 12,
        img: '/assets/images/tonali.png',
        ruolo: 'Centrocampista',
        numero_maglia: 8,
        nome: 'Sandro',
        cognome: 'Tonali',
        nazionalita: 'Italia',
        eta: '21 anni',
        reti: 2,
        assist: 3
    },
    {
        id: 13,
        img: '/assets/images/isma.png',
        ruolo: 'Centrocampista',
        numero_maglia: 4,
        nome: 'Ismail',
        cognome: 'Bennacer',
        nazionalita: 'Algeria',
        eta: '24 anni',
        reti: 2,
        assist: 1
    },
    {
        id: 14,
        img: '/assets/images/baka.png',
        ruolo: 'Centrocampista',
        numero_maglia: 41,
        nome: 'Tiemoué',
        cognome: 'Bakayoko',
        nazionalita: 'Francia',
        eta: '27 anni',
        reti: 0,
        assist: 0
    },
    {
        id: 15,
        img: '/assets/images/diaz.png',
        ruolo: 'Centrocampista',
        numero_maglia: 10,
        nome: 'Brahim',
        cognome: 'Diaz',
        nazionalita: 'Spagna',
        eta: '22 anni',
        reti: 3,
        assist: 3
    },
    {
        id: 16,
        img: '/assets/images/leao.png',
        ruolo: 'Attaccante',
        numero_maglia: 17,
        nome: 'Rafael',
        cognome: 'Leao',
        nazionalita: 'Portogallo',
        eta: '22 anni',
        reti: 8,
        assist: 4
    },
    {
        id: 17,
        img: '/assets/images/rebic.png',
        ruolo: 'Attaccante',
        numero_maglia: 12,
        nome: 'Ante',
        cognome: 'Rebic',
        nazionalita: 'Croazia',
        eta: '28 anni',
        reti: 2,
        assist: 2
    },
    {
        id: 18,
        img: '/assets/images/alexis.png',
        ruolo: 'Attaccante',
        numero_maglia: 56,
        nome: 'Alexis',
        cognome: 'Saelemakers',
        nazionalita: 'Belgio',
        eta: '22 anni',
        reti: 1,
        assist: 3
    },
    {
        id: 19,
        img: '/assets/images/messias.png',
        ruolo: 'Attaccante',
        numero_maglia: 30,
        nome: 'Junior',
        cognome: 'Messias',
        nazionalita: 'Brasile',
        eta: '30 anni',
        reti: 4,
        assist: 0
    },
    {
        id: 20,
        img: '/assets/images/giroud.png',
        ruolo: 'Attaccante',
        numero_maglia: 9,
        nome: 'Olivier',
        cognome: 'Giroud',
        nazionalita: 'Francia',
        eta: '35 anni',
        reti: 8,
        assist: 4
    },
    {
        id: 21,
        img: '/assets/images/ibra.png',
        ruolo: 'Attaccante',
        numero_maglia: 11,
        nome: 'Zlatan',
        cognome: 'Ibrahimovic',
        nazionalita: 'Svezia',
        eta: '40 anni',
        reti: 8,
        assist: 2
    },
    {
        id: 22,
        img: '/assets/images/lazetic.png',
        ruolo: 'Attaccante',
        numero_maglia: 22,
        nome: 'Marco',
        cognome: 'Lazzetic',
        nazionalita: 'Serbia',
        eta: '18 anni',
        reti: 0,
        assist: 0
    },
]