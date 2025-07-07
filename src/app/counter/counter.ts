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

  }

  // Envio de propiedades
  // Padre -> Hijo (@input)
  @Input() subtitle!: string;

  // Envio de propiedades
  // Padre -> Hijo (@input)
  @Output() eventoHijo = new EventEmitter<void>();

  enviarEvento(): void{
    this.eventoHijo.emit();
  }

}
