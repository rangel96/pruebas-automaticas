import { EventEmitter } from '@angular/core';


export class Jugador2 {

  // Vida
  hp: number;
  hpCambia = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  punch(damage: number): void {

    (damage > this.hp)
      ? this.hp = 0
      : this.hp -= damage;

    this.hpCambia.emit(this.hp);
  }
}
