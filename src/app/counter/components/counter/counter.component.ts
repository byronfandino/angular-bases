import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

      <h3> Counter : {{ counter }}</h3>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="resetNumber()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {

  public title: string  = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(entero: number) : void {
    this.counter += entero;
  }

  resetNumber() : void {
    this.counter = 10;
  }
}
