import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    deshabilitado   = false;
    mostrar         = false;
    msjConPersona   = '';
    msjSinPersona   = 'No se ha agregado ninguna persona.';
    titulo          = 'Licenciado';

    agregarPersona(): void {
        this.mostrar = true;
        this.msjConPersona = 'Persona agregada';
    }

    modificarTitulo(event: Event): void {
        this.titulo = this.getInputValue(event);
    }

    getInputValue(event: Event): string {
        return (<HTMLInputElement>event.target).value;
    }
}