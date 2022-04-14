import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <h1>Aggiungi un nuovo calciatore</h1>
        <hr>
        <div>
            <h3>[Crea un nuovo calciatore a tua scelta]</h3>
            <br>
            <br>
            <button type="submit" class="sBtn">Salva</button>
            <button type="button" class="cBtn" (click)="stop()">Annulla</button>
        </div>
    `
})

export class AddPlayerComponent {
    constructor(private router: Router) {

    }

    stop() {
        this.router.navigate(['/home'])
    }
}