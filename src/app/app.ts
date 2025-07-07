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
  // Atributos de la plantilla
  protected title: string = 'Hola mundoooo!';
  

  // Envio de propiedades 
  // Padre -> Hijo (@input)
  subtitle: string = "Contador con estados locales"

  public users: string[] = ['Daniel', 'Fernanda', 'Alejandro'];
  // public users?: string[];

  visible: boolean = false;

  isVisible(): void {
    this.visible = !this.visible;
  }
}
