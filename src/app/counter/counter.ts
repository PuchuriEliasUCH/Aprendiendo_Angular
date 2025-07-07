import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html'
})
export class Counter implements OnInit {
  // Ciclo de vida
  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem('contador')!) || 0;
  }

  counter: number = 0;

  setCounter(): void {
    this.counter++;

    localStorage.setItem('contador', this.counter + '')
  }


  // Envio de propiedades 
  // Padre -> Hijo (@input)
  @Input() subtitle!: string;

}
