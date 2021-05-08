import { Jugador } from './clases';


describe('Pruebas de clase', () => {

  let player: Jugador = new Jugador();

  // Ciclos de vida de una prueba
  beforeAll(() => {
    // console.log('beforeAll');

  });
  beforeEach(() => {
    // console.log('beforeEach');
    // player.hp = 100;
    player = new Jugador();
  });

  afterAll(() => {
    // console.log('afterAll');

  });
  afterEach(() => {
    // console.log('afterEach');

  });

  it('Debe retornar 80hp, si recibe 20 de daño', () => {
    const result = player.punch(20);
    expect(result).toBe(80);
  });

  it('Debe retornar 50hp, si recibe 50 de daño', () => {
    const result = player.punch(50);
    expect(result).toBe(50);
  });

  it('Debe retornar 0hp, si recibe 100 de daño', () => {
    const result = player.punch(100);
    expect(result).toBe(0);
  });

  it('Debe retornar 0hp, si recibe 100 de daño o mas', () => {
    const result = player.punch(150);
    expect(result).toBe(0);
  });
});
