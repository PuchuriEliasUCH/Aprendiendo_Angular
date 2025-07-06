import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  // Atributos de la plantilla
  protected title: string = 'Hola mundoooo!';

  public users: string[] = ['Daniel', 'Fernanda', 'Alejandro'];
  // public users?: string[];

  visible: boolean = false;

  isVisible(): void {
    this.visible = !this.visible;
  }
}
