
// describe('Pruebas de string');
// it('Debe regresar un string');
// it('Debe contener un nombre');

import { mensjage } from './string';


describe('Pruebas de string', () => {

  it('Debe regresar un string', () => {
    const resp = mensjage('Carreon');
    expect(typeof resp).toBe('string');
  });

  it('Debe mandar un saludo a Carreon', () => {
    const nombre = 'Carreon';
    const resp = mensjage(nombre);
    expect(resp).toContain(nombre);
  });

});

