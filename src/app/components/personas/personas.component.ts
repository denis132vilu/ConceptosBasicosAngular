import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    deshabilitado = false;
    mensaje = 'No se ha agregado ninguna persona.';
    titulo = 'Licenciado';

    agregarPersona(): void {
        this.mensaje = 'Persona agregada.';
    }

    modificarTitulo(event: Event): void {
        console.log('Entrando a método modificar título');
        
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}