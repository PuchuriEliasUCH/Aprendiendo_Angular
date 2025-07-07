import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
})
export class Counter implements OnInit {
  // Ciclo de vida
  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('contador')!) || 0;
  }

  counter: number = 0;

  // Envio de propiedades
  // Padre -> Hijo (@input)
  @Input() subtitle!: string;

  // Envio de propiedades
  // Padre -> Hijo (@input)
  @Output() contadorEmmit: EventEmitter<number> = new EventEmitter();

  setCounter(): void {
    this.counter++;

    localStorage.setItem('contador', this.counter + '');
    
    // Enviando datos al componente padre
    this.contadorEmmit.emit(this.counter);
  }
}
