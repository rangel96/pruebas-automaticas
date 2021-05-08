import { Jugador2 } from './jugador2';


describe('Pruebas de EventEmitter', () => {

  let player: Jugador2 = new Jugador2();

  beforeEach(() => player = new Jugador2());

  it('Debe emitir 0, si recibe 1000 de daño', () => {

    let newHP = 0;
    player.hpCambia.subscribe( hp => newHP = hp );

    player.punch(1000);

    expect(newHP).toBe(0);
  });

  it('Debe emitir 1, si recibe 99 de daño', () => {

    let newHP = 0;
    player.hpCambia.subscribe( hp => newHP = hp );

    player.punch(99);

    expect(newHP).toBe(1);
  });
});
