
// tslint:disable-next-line:class-name
export class Jugador {

  // Vida
  hp: number;

  constructor() {
    this.hp = 100;
  }

  punch(damage: number): number {

    (damage > this.hp)
      ? this.hp = 0
      : this.hp -= damage;

    return this.hp;
  }
}
