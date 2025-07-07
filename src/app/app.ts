import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Counter],
  templateUrl: './app.html',
})
export class App {
  
  // Envio de propiedades 
  // Padre -> Hijo (@input)
  subtitle: string = "Otro ejemplo de @Output"

  // Envio de propiedades
  // Hijo -> Padre (@output)
  manejoEventoHijo(): void{
    alert("Oñoooooooo")
  }
}
