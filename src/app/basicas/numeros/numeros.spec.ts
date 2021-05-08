import { sumar } from './numeros';


describe('Pruebas de numeros', () => {

  it('Funcion de sumar', () => {
    const result = sumar(1, 2);
    expect(result).toBe(3);
  });

});

